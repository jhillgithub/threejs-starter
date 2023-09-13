import { Scene, Camera, WebGLRenderer } from "three";
import { createCamera } from "../components/createCamera";
import { createScene } from "../components/createScene";
import { createRenderer } from "./createRenderer";
import { createLights } from "../components/createLights";
import { createCube } from "../components/createCube";
import { createResizer } from "./createResizer";
import { Loop } from "./loop";
import { createOrbitControls } from "./createOrbitControls";
import { createShaderCube } from "../components/createShaderCube";

export class World {
  private scene: Scene;
  private camera: Camera;
  private renderer: WebGLRenderer;
  private loop: Loop;

  constructor(container) {
    this.scene = createScene();
    this.camera = createCamera();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);
    createResizer(container, this.camera, this.renderer);

    const lights = createLights();
    this.scene.add(...lights);

    const cube = createCube();
    const shaderCube = createShaderCube();
    this.scene.add(cube, shaderCube);

    const controls = createOrbitControls(this.camera, this.renderer);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.updatables.push(cube, shaderCube, controls);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}
