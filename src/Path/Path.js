import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Path = (props) => {
  const { nodes } = useLoader(GLTFLoader, "/models/tile.glb");

  return (
    <mesh receiveShadow geometry={nodes.Cube078.geometry} castShadow {...props}>
      <meshStandardMaterial color="#AAAAAA" />
    </mesh>
  );
};

export default Path;
