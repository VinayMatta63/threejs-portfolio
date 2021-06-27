import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { PointLightHelper } from "three";
import LampsLights from "./LampsLights";

const Lights = () => {
  const helper = useRef(null);
  useHelper(helper, PointLightHelper);
  return (
    <mesh>
      <rectAreaLight
        width={1000}
        height={1000}
        color={"white"}
        intensity={0.15}
        position={[100, 100, 200]}
        lookAt={[0, 0, 0]}
        penumbra={1}
      />
      <directionalLight
        color={"#C34CFF"}
        intensity={0.3}
        position={[0, 5, -9]}
        castShadow
      />

      <LampsLights
        pos1={[2.8, 5, 0]}
        pos2={[-3.5, 5, 0]}
        args={["#FF7A1F", 0.02]}
      />
      <LampsLights
        pos1={[-55, 5, 80]}
        pos2={[-48, 5, 80]}
        args={["#FF7A1F", 0.1, 50, 0.5]}
      />

      <LampsLights
        pos1={[45.5, 5, -57]}
        pos2={[52, 5, -57]}
        args={["#FF7A1F", 0.1, 50, 0.5]}
      />
      <LampsLights
        pos1={[135.5, 5, 80]}
        pos2={[142, 5, 80]}
        args={["#FF7A1F", 0.1, 50, 0.5]}
      />
      <LampsLights
        pos1={[-145, 5, -57]}
        pos2={[-138, 5, -57]}
        args={["#FF7A1F", 0.1, 50, 0.5]}
      />
      <pointLight
        position={[-95, 2, 125]}
        args={["#FF7A1F", 0.5, 50, 1]}
        ref={helper}
      />
    </mesh>
  );
};

export default Lights;
