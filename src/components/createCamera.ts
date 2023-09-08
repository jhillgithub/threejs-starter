import { PerspectiveCamera } from "three";

export const createCamera = () => {
  const fieldOfView = 35;
  // The aspect ratio will be reset later by the resizer
  const aspectRatio = 1;
  const nearClipping = 0.1;
  const farClipping = 100;

  const camera = new PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearClipping,
    farClipping
  );

  camera.position.set(0, 0, 5);

  return camera;
};
