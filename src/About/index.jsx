import React from "react";
import Education from "./Education";
import Links from "./Links";
import Me from "./Me";
import { Text3D } from "@react-three/drei";

const About = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[20, 0.5, 120]}>
        <Text3D font={font} size={10} height={4}>
          About
        </Text3D>
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <Education font={font} />
      <Links font={font} />
      <Me font={font} />
    </>
  );
};

export default About;
