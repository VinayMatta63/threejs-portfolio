import React from "react";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[400, 400]} />
      <meshStandardMaterial
        color="#80e93d"
        attach="material"
        opacity={0.8}
        roughness={1}
        metalness={0}
      />
      {/* <shadowMaterial
        attach="material"
        opacity={1}
        color="#80e93d"
        roughness={1}
      /> */}
    </mesh>
  );
};

export default Floor;
