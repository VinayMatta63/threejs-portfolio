import React, { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import Text from "../../base/Text";

const Me: React.FC = () => {
  const secondRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (secondRef.current) {
      secondRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
    }
  });

  return (
    <Text
      type="3d"
      position={[72, 2, 90]}
      rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
      ref={secondRef}
      textOptions={{
        size: 7,
        height: 2,
        font: "/fonts/Roboto_Regular.json",
      }}
    >
      Welcome!
    </Text>
  );
};

export default Me;
