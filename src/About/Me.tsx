import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

interface MeProps {
  font: any;
}

const Me: React.FC<MeProps> = ({ font }) => {
  const secondRef = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (secondRef.current) {
      secondRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
    }
  });
  return (
    <>
      <mesh
        position={[130, 2, 110]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        ref={secondRef}
      >
        <Text3D font={font} size={10} height={2}>
          Welcome!
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" />
      </mesh>
    </>
  );
};

export default Me;
