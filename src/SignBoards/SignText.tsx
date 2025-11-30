import { Text3D } from "@react-three/drei";
import React from "react";

interface SignTextProps {
  scale: [number,number,number]|number;
  position: [number,number,number];
  font: any;
  text: string;
}

const SignText: React.FC<SignTextProps> = ({ scale, position, font, text }) => {
  return (
    <>
      <mesh scale={scale} rotation={[0, Math.PI, 0]} position={position}>
        <Text3D size={1} height={0.1} font={font}>
          {text}
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" />
      </mesh>
    </>
  );
};

export default SignText;
