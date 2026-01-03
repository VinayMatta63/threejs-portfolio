import React, { memo } from "react";
import { useGLTF } from "@react-three/drei";
import { BufferGeometry, Material, Object3D } from "three";
import Text from "./Text";
import { ThreeElements } from "@react-three/fiber";

type SignNode = Object3D & {
  geometry: BufferGeometry;
  material: Material;
};

type SignProps = ThreeElements["group"] & {
  title: string;
  titleScale?: [number, number, number] | number;
  titleRotation?: [number, number, number];
  titlePosition?: [number, number, number];
};

const Sign: React.FC<SignProps> = ({
  title,
  scale = 1.6,
  rotation = [0, Math.PI, 0],
  titleScale = 0.35,
  titleRotation = [0, Math.PI, 0],
  titlePosition = [0.7, 2.8, -0.35],
  ...props
}) => {
  const { nodes } = useGLTF("/models/sign.glb", true);
  const signNode = nodes.Cube as SignNode;

  return (
    <group scale={scale} rotation={rotation} {...props}>
      <mesh geometry={signNode.geometry} material={signNode.material} />
      <Text
        scale={titleScale}
        position={titlePosition}
        rotation={titleRotation}
      >
        {title}
      </Text>
    </group>
  );
};

useGLTF.preload("/models/sign.glb");

export default memo(Sign);
