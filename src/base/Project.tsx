import React, { useState } from "react";
import { Group } from "three";
import { Html } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import CollisionPlate from "./CollisionPlate";
import Text from "./Text";
import { SPRITE_STYLES } from "../constants/spriteStyles";

type ProjectProps = ThreeElements["group"] & {
  title: string;
  scale?: number | [number, number, number];
  subScale?: number | [number, number, number];
  model?: { scene: Group };
  modelLeft?: { scene: Group };
  modelRight?: { scene: Group };
  ScreenComponent: React.FC;
};

const Project: React.FC<ProjectProps> = ({
  title,
  model,
  modelLeft,
  modelRight,
  scale,
  subScale = 0.7,
  ScreenComponent,
  ...props
}) => {
  const [isColliding, setIsColliding] = useState(false);

  const textOptions = {
    size: 3,
    height: 1,
    font: "/fonts/Roboto_Regular.json",
  };

  return (
    <group {...props}>
      <Text
        type="3d"
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, 12]}
        textOptions={textOptions}
      >
        {title}
      </Text>

      <pointLight position={[10, 15, 0]} args={["#fafafa", 0.75, 30, 0.1]} />

      <CollisionPlate
        name={title.toLowerCase().replace(/\s+/g, "-") + "-plate"}
        size={[10, 10]}
        position={[10, 0.1, 0]}
        onCollision={({ type }) => {
          if (type === "enter") {
            setIsColliding(true);
          } else if (type === "exit") {
            setIsColliding(false);
          }
        }}
      />

      {isColliding && (
        <Html style={SPRITE_STYLES} transform rotation={[0, Math.PI / 2, 0]}>
          <ScreenComponent />
        </Html>
      )}

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
