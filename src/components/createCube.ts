import {
  Mesh,
  MeshStandardMaterial,
  BoxGeometry,
  MathUtils,
  Quaternion,
  Vector3,
} from "three";

const radiansPerSecond = MathUtils.degToRad(30);
export const createCube = () => {
  const geometry = new BoxGeometry(1, 1, 1, 8, 8, 8);
  const material = new MeshStandardMaterial({ color: "hotpink" });
  const cube = new Mesh(geometry, material);
  cube.position.setX(-1.5);
  cube.rotation.set(-0.5, -0.1, 0.8);
  const quaternion = new Quaternion();
  const axisVector = new Vector3();

  // @ts-ignore
  cube.tick = (delta) => {
    // rotate x
    axisVector.set(1, 0, 0);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    cube.applyQuaternion(quaternion);

    // rotate y
    axisVector.set(0, 1, 0);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    cube.applyQuaternion(quaternion);

    // rotate z
    axisVector.set(0, 0, 1);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    cube.applyQuaternion(quaternion);
  };
  return cube;
};
