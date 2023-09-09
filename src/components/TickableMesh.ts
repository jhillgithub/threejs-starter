import { Mesh } from "three";

export class TickableMesh extends Mesh {
  tick: (delta: number) => void;
}
