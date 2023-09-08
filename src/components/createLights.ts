import { AmbientLight, DirectionalLight } from "three";

export const createLights = () => {
  const ambientLight = new AmbientLight("white", 0.25);

  // Create a directional light
  const directionalLight = new DirectionalLight("white", 8);

  // move the light right, up, and towards us
  directionalLight.position.set(10, 10, 10);

  return [ambientLight, directionalLight];
};
