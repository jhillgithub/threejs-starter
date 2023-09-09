uniform vec3 uColorA; 
uniform vec3 uColorB; 
uniform vec3 uColorC; 
varying vec3 vUv;

void main() {
  vec3 mixedColor = vec3(
    mix(uColorA.x, uColorB.x, vUv.x) * uColorC.x + 
    mix(uColorB.x, uColorC.x, vUv.x) * uColorC.y + 
    mix(uColorC.x, uColorA.x, vUv.x) * uColorC.z,
    
    mix(uColorA.y, uColorB.y, vUv.y) * uColorC.x + 
    mix(uColorB.y, uColorC.y, vUv.y) * uColorC.y + 
    mix(uColorC.y, uColorA.y, vUv.y) * uColorC.z,
    
    mix(uColorA.z, uColorB.z, vUv.z) * uColorC.x + 
    mix(uColorB.z, uColorC.z, vUv.z) * uColorC.y + 
    mix(uColorC.z, uColorA.z, vUv.z) * uColorC.z
  );
  gl_FragColor = vec4(mixedColor, 1.0);
}