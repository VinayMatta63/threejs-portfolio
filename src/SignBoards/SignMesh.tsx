import { Text3D } from "@react-three/drei";
import React from "react";

interface SignMeshProps {
  model: any;
  position: [number,number,number];
  scale: [number,number,number]|number;
  text: string;
  textScale: [number,number,number]|number;
  font: any;
  rotation?: [number,number,number];
  textRotation?: [number,number,number];
  textPosition?: [number,number,number];
}

const SignMesh: React.FC<SignMeshProps> = ({
  model,
  position,
  scale,
  text,
  textScale,
  font,
  rotation,
  textRotation,
  textPosition,
}) => {
  const geometry = model.nodes.Cube.geometry;
  const material = model.nodes.Cube.material;
  return (
    <group>
      <mesh
        geometry={geometry}
        material={material}
        position={position}
        scale={scale}
        rotation={rotation}
      />
      <mesh position={textPosition} scale={textScale} rotation={textRotation}>
        <Text3D font={font} size={1} height={0.1}>
          {text}
          <meshBasicMaterial attach="material" color="#fafafa" />
        </Text3D>
      </mesh>
    </group>
  );
};

export default SignMesh;
