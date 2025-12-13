import React from "react";
import { ThreeElements } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

type SignTextProps = ThreeElements["mesh"] & {
  text: string;
};

const SignText: React.FC<SignTextProps> = ({ scale, position, text }) => {
  return (
    <mesh scale={scale} rotation={[0, Math.PI, 0]} position={position}>
      <Text3D size={1} height={0.1} font="/fonts/Roboto_Regular.json">
        {text}
      </Text3D>
      <meshBasicMaterial attach="material" color="#fafafa" />
    </mesh>
  );
};

export default SignText;
