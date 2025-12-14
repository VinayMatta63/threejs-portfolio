import React from "react";
import { RepeatWrapping, SRGBColorSpace } from "three";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useDispose } from "../../hooks/useDispose";

interface FloorProps {
  height?: number;
  width?: number;
}

const Floor: React.FC<FloorProps> = ({ height = 400, width = 400 }) => {
  const floorTexture = useTexture("/assets/grass.jpg", (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(height / 2, width / 2);
    texture.colorSpace = SRGBColorSpace;
  });

  // Dispose texture on unmount
  useDispose(floorTexture);

  return (
    <RigidBody colliders="cuboid" type="fixed">
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[height, width]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;

useTexture.preload("/assets/grass.jpg");
