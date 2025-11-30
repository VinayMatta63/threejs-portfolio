import { Text3D } from "@react-three/drei";
import React from "react";
import { Group } from "three";

interface BoardProps {
  x: number;
  z: number;
  text: string;
  rotation?: [number, number, number];
  font: any;
  model?: { scene: Group };
  modelLeft?: { scene: Group };
  modelRight?: { scene: Group };
}

const Board: React.FC<BoardProps> = ({
  x,
  z,
  text,
  rotation = [0, 0, 0],
  font,
  model,
  modelLeft,
  modelRight,
}) => {
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };
  return (
    <group position={[x, 0, z]} rotation={rotation}>
      {/* Text */}
      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, (text.length / 2) * 3.2]}
      >
        <Text3D {...textOptions}>{text}</Text3D>
        <meshBasicMaterial attach="material" color="#fff" />
      </mesh>

      {model && <primitive object={model.scene} />}
      {modelLeft && <primitive object={modelLeft.scene} />}
      {modelRight && <primitive object={modelRight.scene} />}
    </group>
  );
};

export default Board;
