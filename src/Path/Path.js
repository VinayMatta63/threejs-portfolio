import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Path = (props) => {
  const { nodes } = useLoader(GLTFLoader, "/models/tile.glb");

  return (
    <mesh geometry={nodes.Cube078.geometry} {...props}>
      <meshStandardMaterial color="#AAAAAA" roughness={1} metalness={0} />
    </mesh>
  );
};

export default Path;
