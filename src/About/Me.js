import { useTexture } from "@react-three/drei";
import React from "react";

const Me = () => {
  const [me] = useTexture(["/assets/me.jpg"]);
  return (
    <mesh position={[25, 5, 100]} rotation={[0, Math.PI + Math.PI / 6, 0]}>
      <planeBufferGeometry args={[10, 10, 2, 2]} />
      <meshBasicMaterial map={me} />
    </mesh>
  );
};

export default Me;
