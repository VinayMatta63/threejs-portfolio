import React from "react";

const Path = ({ position, castShadow, path }) => {
  return (
    <mesh
      geometry={path.Cube078.geometry}
      position={position}
      castShadow={castShadow}
    >
      <meshStandardMaterial
        color="#aaa"
        roughness={1}
        metalness={0}
        opacity={0.8}
      />
    </mesh>
  );
};

export default Path;
