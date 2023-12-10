import { Text3D } from "@react-three/drei";
import React from "react";

const SignText = ({ scale, position, font, text }) => {
  return (
    <>
      <mesh scale={scale} rotation={[0, Math.PI, 0]} position={position}>
        <Text3D size={1} height={0.1} font={font}>
          {text}
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
    </>
  );
};

export default SignText;
