import React from "react";

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[400, 400]} />
      <meshStandardMaterial
        color="#80e93d"
        attach="material"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

export default Floor;
