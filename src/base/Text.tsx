import React from "react";
import { ThreeElements } from "@react-three/fiber";
import {
  Text,
  Text3D,
  Text3DProps,
  TextProps,
  useFont,
} from "@react-three/drei";
import { DoubleSide } from "three";

type BaseTextProps = ThreeElements["mesh"] & {
  type?: "2d" | "3d";
  textOptions?: Text3DProps | TextProps;
};

const BaseText: React.FC<BaseTextProps> = ({
  type = "2d",
  children,
  rotation = [0, Math.PI, 0],
  textOptions = { size: 1, height: 0.1, font: "/fonts/Roboto_Regular.json" },
  ...props
}) => {
  if (type === "3d") {
    return (
      <mesh rotation={rotation} {...props}>
        <Text3D {...(textOptions as Text3DProps)}>{children}</Text3D>
        <meshBasicMaterial
          attach="material"
          color="#fafafa"
          side={DoubleSide}
        />
      </mesh>
    );
  }

  return (
    // @ts-expect-error - TextProps are not fully compatible with mesh props
    <Text anchorX="left" anchorY="middle" rotation={rotation} {...props}>
      {children}
    </Text>
  );
};

useFont.preload("/fonts/Roboto_Regular.json");

export default BaseText;
