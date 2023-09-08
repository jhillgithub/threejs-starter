import { Scene, Color } from "three";

const createScene = () => {
  const scene = new Scene();
  scene.background = new Color("slategray");
  return scene;
};

export { createScene };
