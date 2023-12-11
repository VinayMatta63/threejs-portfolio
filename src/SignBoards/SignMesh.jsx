import React from "react";
import TextMesh from "../meshs/TextMesh";

const SignMesh = ({
  model,
  position,
  scale,
  text,
  textScale,
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
      <TextMesh
        position={textPosition}
        scale={textScale}
        rotation={textRotation}
        size={1}
        height={0.1}
      >
        {text}
      </TextMesh>
    </group>
  );
};

export default SignMesh;
