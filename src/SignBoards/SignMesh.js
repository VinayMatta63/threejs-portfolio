import React from "react";

const SignMesh = ({
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
        <textBufferGeometry
          attach="geometry"
          args={[text, { font, size: 1, height: 0.1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
    </group>
  );
};

export default SignMesh;
