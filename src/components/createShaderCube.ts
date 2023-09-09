import {
  MathUtils,
  Color,
  BoxGeometry,
  ShaderMaterial,
  Mesh,
  Quaternion,
  Vector3,
} from "three";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
const radiansPerSecond = MathUtils.degToRad(30);

export const createShaderCube = () => {
  let uniforms = {
    uColorA: { type: "vec3", value: new Color("aquamarine") },
    uColorB: { type: "vec3", value: new Color("orchid") },
    uColorC: { type: "vec3", value: new Color("turquoise") },
  };

  let geometry = new BoxGeometry(1, 1, 1);
  let material = new ShaderMaterial({
    uniforms: uniforms,
    fragmentShader,
    vertexShader,
  });

  const mesh = new Mesh(geometry, material);
  mesh.position.setX(1.5);

  const quaternion = new Quaternion();
  const axisVector = new Vector3();

  // @ts-expect-error
  mesh.tick = (delta) => {
    // rotate x
    axisVector.set(1, 0, 0);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    mesh.applyQuaternion(quaternion);

    // rotate y
    axisVector.set(0, 1, 0);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    mesh.applyQuaternion(quaternion);

    // rotate z
    axisVector.set(0, 0, 1);
    quaternion.setFromAxisAngle(axisVector, radiansPerSecond * delta);
    mesh.applyQuaternion(quaternion);
  };
  return mesh;
};
