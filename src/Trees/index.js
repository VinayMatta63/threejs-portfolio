import React from "react";
import Tree from "./Tree";

const Trees = ({ tree }) => {
  const treePositions = [
    [60, 0, 35],
    [20, 0, -30],
    [30, 0, -70],
    [10, 0, -55],
    [-40, 0, 10],
    [-30, 0, -60],
    [-25, 0, -10],
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
    <Tree tree={tree} pos={pos} key={index} />
  ));
};

export default Trees;
