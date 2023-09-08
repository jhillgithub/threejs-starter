import { Clock, Scene, Camera, WebGLRenderer } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const clock = new Clock();

export class Loop {
  camera: Camera;
  scene: Scene;
  renderer: WebGLRenderer;
  controls: OrbitControls;
  updatables: any[];

  constructor(camera, scene, renderer, controls) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.controls = controls;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.controls.update();

      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();

    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}
