import React from "react";
import { ThreeElements } from "@react-three/fiber";
import { Text3D, Text3DProps } from "@react-three/drei";

type TextProps = ThreeElements["mesh"] & {
  textOptions?: Text3DProps;
};

const Text: React.FC<TextProps> = ({
  children,
  textOptions = { size: 1, height: 0.1, font: "/fonts/Roboto_Regular.json" },
  ...props
}) => {
  return (
    <mesh rotation={[0, Math.PI, 0]} {...props}>
      <Text3D {...textOptions}>{children}</Text3D>
      <meshBasicMaterial attach="material" color="#fafafa" />
    </mesh>
  );
};

export default Text;
