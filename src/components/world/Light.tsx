import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight color="#fafafa" intensity={0.4} />
      <directionalLight
        color="#E7B7FF"
        intensity={0.04}
        position={[0, 5, -9]}
      />
    </>
  );
};

export default Lights;
