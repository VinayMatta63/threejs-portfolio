import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Tree from "./Tree";

const Trees = () => {
  const treeTop = useLoader(GLTFLoader, "/models/treeTops.glb");
  const treeBottom = useLoader(GLTFLoader, "/models/treeBase.glb");
  const treePositions = [
    [40, 0, 10],
    [20, 0, -30],
    [30, 0, -70],
    [10, 0, -55],
    [-40, 0, 10],
    [-30, 0, -60],
    [-15, 0, -10],
    [-10, 0, -80],
    [-25, 0, -40],
  ];
  for (let i = 0; i < 50; i++) {
    treePositions.push([
      -150 - Math.floor(Math.random() * 45),
      0,
      Math.floor((Math.random() - 0.5) * 350),
    ]);
    treePositions.push([
      150 + Math.floor(Math.random() * 45),
      0,
      Math.floor((Math.random() - 0.5) * 350),
    ]);
  }
  return treePositions.map((pos, index) => (
    <Tree treeTop={treeTop} treeBottom={treeBottom} pos={pos} key={index} />
  ));
};

export default Trees;
