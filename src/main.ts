import { World } from "./systems/world";

const main = async () => {
  const container = document.getElementById("root");
  const world = new World(container);
  // start the animation loop
  world.start();
};

main();
