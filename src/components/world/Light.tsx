import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <rectAreaLight
        width={1000}
        height={1000}
        color="#fafafa"
        intensity={0.2}
        position={[100, 100, 200]}
      />
      <directionalLight
        color="#E7B7FF"
        intensity={0.05}
        position={[0, 5, -9]}
        castShadow
        shadow-onUpdate={false}
        shadow-bias={-0.000001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default Lights;
