import React, { useMemo, useRef } from "react";
// import { AdditiveBlending } from "three";
import { extend, useFrame } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";
import { shaderMaterial } from "@react-three/drei";
import { AdditiveBlending } from "three";

const FireFlyMaterial = shaderMaterial(
  {
    uTime: 0.1,
    uPixelRatio: Math.min(window.devicePixelRatio, 2),
    uSize: 300,
    transparent: true,
    blending: AdditiveBlending,
    depthWrite: false,
  },
  // vertex shader
  glsl`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float scale;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position,1.0);
        modelPosition.y+=sin(modelPosition.x*100.0+uTime)*scale*0.2;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;

        gl_Position = projectionPosition;
        gl_PointSize = uSize*scale*uPixelRatio;
        gl_PointSize *= (1.0/-viewPosition.z);
      }
    `,
  // fragment shader
  glsl`
      void main() {
        float d2c=distance(gl_PointCoord,vec2(0.5));
        float strength = 0.05/d2c - 0.1;
        gl_FragColor = vec4(1.0,1.0,1.0, strength);
      }
    `
);

extend({ FireFlyMaterial });

const Fireflies = ({ pointCount }) => {
  const [positions, scale] = useMemo(() => {
    let positions = [];
    let scale = [];
    for (let i = 0; i < pointCount; i++) {
      positions.push((Math.random() - 0.5) * 15);
      positions.push(Math.random() * 10);
      positions.push((Math.random() - 0.5) * 15);
      scale.push(Math.random() * 3);
    }
    return [new Float32Array(positions), new Float32Array(scale)];
  }, [pointCount]);

  const fireRef = useRef(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    fireRef.current.uniforms.uTime.value = elapsedTime;
  });
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "scale"]}
          array={scale}
          count={positions.length}
          itemSize={1}
        />
      </bufferGeometry>
      <fireFlyMaterial ref={fireRef} />
    </points>
  );
};

export default Fireflies;
