import { useState } from "react";
import { ThreeElements } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CollisionPlate from "./CollisionPlate";
import Text from "./Text";
import Screen from "./Screen";
import { SPRITE_STYLES } from "../constants/spriteStyles";

type LinkProps = ThreeElements["group"] & {
  to?: string;
};

const Link = ({ children, to, ...props }: LinkProps) => {
  const [isColliding, setIsColliding] = useState(false);

  const text_angle: [number, number, number] = [-Math.PI / 8, 0, 0];

  return (
    <group {...props}>
      <Text position={[1, 0.2, 0]} rotation={text_angle}>
        {children}
      </Text>
      <CollisionPlate
        position={[3.5, 0, 3.5]}
        name={children?.toString().toLowerCase() || "link"}
        onCollision={({ type }) => {
          if (type === "enter") setIsColliding(true);
          else if (type === "exit") setIsColliding(false);
        }}
      />
      {isColliding && to && (
        <Html style={SPRITE_STYLES} transform position={[3.5, 0, 0]}>
          <Screen visitLink={to} />
        </Html>
      )}
    </group>
  );
};

export default Link;
