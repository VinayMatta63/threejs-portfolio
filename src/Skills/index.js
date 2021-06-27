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
    size: 10,
    height: 4,
  };
  return (
    <group>
      <mesh rotation={[0, Math.PI, 0]} position={[-80, 0, 120]}>
        <textBufferGeometry attach="geometry" args={["Skills", textOptions]} />
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      {/*React*/}
      <Skill icon={icons[0]} position={[-80, 5, 40]} scale={[7, 7, 1]} />
      {/*Node js*/}
      <Skill icon={icons[1]} position={[-100, 5, 80]} scale={[10, 7, 1]} />
      {/*Mongo*/}
      <Skill icon={icons[2]} position={[-120, 5, 80]} scale={[12, 6, 1]} />
      {/*Python*/}
      <Skill icon={icons[3]} position={[-110, 5, 60]} scale={[7, 7, 1]} />
      {/*SQl*/}
      <Skill icon={icons[4]} position={[-100, 5, 100]} scale={[10, 7, 1]} />
      {/*CPP*/}
      <Skill icon={icons[5]} position={[-70, 5, 60]} scale={[6, 6, 1]} />
      {/*HTML*/}
      <Skill icon={icons[6]} position={[-80, 5, 80]} scale={[7, 7, 1]} />
      {/*CSS*/}
      <Skill icon={icons[7]} position={[-120, 5, 100]} scale={[7, 7, 1]} />
      {/*THREE*/}
      <Skill icon={icons[8]} position={[-120, 5, 40]} scale={[10, 6, 1]} />
      {/*Bootstrap*/}
      <Skill icon={icons[9]} position={[-70, 5, 100]} scale={[12, 7, 1]} />
      {/*Next*/}
      <Skill icon={icons[10]} position={[-100, 5, 40]} scale={[10, 7, 1]} />
      {/*Flutter*/}
      <Skill icon={icons[11]} position={[-90, 5, 60]} scale={[7, 7, 1]} />
    </group>
  );
};

export default Skills;
