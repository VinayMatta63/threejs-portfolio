import React from "react";
import { Group } from "three";
import Text from "./Text";
import { ThreeElements } from "@react-three/fiber";

type ProjectProps = ThreeElements["group"] & {
  title: string;
  scale?: number | [number, number, number];
  subScale?: number | [number, number, number];
  model?: { scene: Group };
  modelLeft?: { scene: Group };
  modelRight?: { scene: Group };
};

const Project: React.FC<ProjectProps> = ({
  title,
  model,
  modelLeft,
  modelRight,
  scale,
  subScale = 0.7,
  ...props
}) => {
  const textOptions = {
    size: 5,
    height: 1,
    font: "/fonts/Roboto_Regular.json",
  };

  return (
    <group {...props}>
      <Text
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, (title.length / 2) * 3.2]}
        textOptions={textOptions}
      >
        {title}
      </Text>

      {model && (
        <primitive
          scale={scale}
          position={[0, 0.1, 0]}
          object={model.scene}
          rotation={[0, title !== "Social Freaks" ? Math.PI / 2 : 0, 0]}
        />
      )}

      {modelLeft && (
        <primitive
          scale={subScale}
          position={[5, 0.1, 18]}
          object={modelLeft.scene}
          rotation={[0, -Math.PI - Math.PI / 3, 0]}
        />
      )}

      {modelRight && (
        <primitive
          scale={subScale}
          position={[5, 0.1, -18]}
          object={modelRight.scene}
          rotation={[0, Math.PI / 3, 0]}
        />
      )}
    </group>
  );
};

export default Project;
