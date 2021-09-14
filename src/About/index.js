import React from "react";
import Education from "./Education";
import Links from "./Links";

const About = ({ font }) => {
  const textOptions = {
    font,
    size: 10,
    height: 4,
  };

  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[20, 0.5, 120]}>
        <textBufferGeometry attach="geometry" args={["About", textOptions]} />
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <Education font={font} />
      <Links font={font} />
      {/* <Me /> */}
    </>
  );
};

export default About;
