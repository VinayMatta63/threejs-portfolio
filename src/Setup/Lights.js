import React from "react";

const Lights = () => {
  return (
    <mesh>
      <rectAreaLight
        width={1000}
        height={1000}
        color={"white"}
        intensity={0.1}
        position={[100, 100, 150]}
        lookAt={[0, 0, 0]}
        penumbra={1}
      />
      <directionalLight
        color={"#C34CFF"}
        intensity={0.1}
        position={[0, 5, -9]}
        castShadow
      />
      <pointLight position={[2.8, 5, 0]} args={["#FF7A1F", 0.01]} castShadow />
      <pointLight position={[-3.5, 5, 0]} args={["#FF7A1F", 0.01]} castShadow />
    </mesh>
  );
};

export default Lights;
