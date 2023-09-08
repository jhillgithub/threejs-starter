import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const createOrbitControls = (camera, renderer) => {
  return new OrbitControls(camera, renderer.domElement);
};
