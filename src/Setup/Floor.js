import React from "react";

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[400, 400]} />
      <meshStandardMaterial
        color="#B9E749"
        attach="material"
        roughness={1}
        metalness={0.1}
      />
    </mesh>
  );
};

export default Floor;
