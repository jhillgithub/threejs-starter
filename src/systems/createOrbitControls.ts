import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const createOrbitControls = (camera, renderer) => {
  const controls = new OrbitControls(camera, renderer.domElement);
  // @ts-expect-error
  controls.tick = () => controls.update();
  return controls;
};
