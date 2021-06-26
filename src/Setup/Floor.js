import React from "react";

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[300, 300]} />
      <meshStandardMaterial color="#B9E749" attach="material" />
    </mesh>
  );
};

export default Floor;
