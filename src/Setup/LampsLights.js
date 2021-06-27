import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { PointLightHelper } from "three";

const LampsLights = ({ pos1, pos2, args }) => {
  const helper = useRef(null);
  useHelper(helper, PointLightHelper);
  return (
    <>
      <pointLight position={pos1} args={args} castShadow />
      <pointLight position={pos2} args={args} castShadow />
    </>
  );
};

export default LampsLights;
