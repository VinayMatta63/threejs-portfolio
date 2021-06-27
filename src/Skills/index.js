import { useTexture } from "@react-three/drei";
import React from "react";
import { FontLoader } from "three";
import Roboto from "./fonts/Roboto_Regular";
import Skill from "./Skill";
const Skills = () => {
  const font = new FontLoader().parse(Roboto);
  const icons = useTexture([
    "/assets/react.png",
    "/assets/node.png",
    "/assets/mongo.png",
    "/assets/python.png",
    "/assets/sql.png",
    "/assets/cpp.png",
    "/assets/html.png",
    "/assets/css.png",
    "/assets/three.png",
    "/assets/bootstrap.png",
    "/assets/next.png",
    "/assets/flutter.png",
  ]);

  const textOptions = {
    font,
    size: 8,
    height: 2,
  };
  console.log(icons);
  return (
    <group>
      <mesh rotation={[0, Math.PI, 0]} position={[-80, 0, 120]}>
        <textBufferGeometry attach="geometry" args={["Skills", textOptions]} />
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <Skill icon={icons[0]} position={[-80, 3, 40]} scale={[5, 5, 5]} />
      <Skill icon={icons[1]} position={[-100, 3, 80]} scale={[8, 5, 5]} />
      <Skill icon={icons[2]} position={[-120, 3, 80]} scale={[10, 4, 5]} />
      <Skill icon={icons[3]} position={[-110, 3, 60]} scale={[5, 5, 5]} />
      <Skill icon={icons[4]} position={[-100, 3, 100]} scale={[8, 5, 5]} />
      <Skill icon={icons[5]} position={[-70, 3, 60]} scale={[4, 4, 4]} />
      <Skill icon={icons[6]} position={[-80, 3, 80]} scale={[5, 5, 4]} />
      <Skill icon={icons[7]} position={[-120, 3, 100]} scale={[5, 5, 4]} />
      <Skill icon={icons[8]} position={[-120, 3, 40]} scale={[8, 4, 5]} />
      <Skill icon={icons[9]} position={[-70, 3, 100]} scale={[10, 5, 5]} />
      <Skill icon={icons[10]} position={[-100, 3, 40]} scale={[8, 5, 5]} />
      <Skill icon={icons[11]} position={[-90, 3, 60]} scale={[5, 5, 5]} />
    </group>
  );
};

export default Skills;
