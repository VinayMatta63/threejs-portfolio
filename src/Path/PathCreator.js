import React from "react";
import Path from "./Path";

const PathCreator = ({ count, x }) => {
  const pathArray = [];

  for (let i = 0; i < count; i++) {
    let position = [];
    if (i % 2 === 0) {
      position = [x, 0, i * 4];
    } else {
      position = [x - 2, 0, i * 4];
    }
    pathArray.push(position);
  }
  return pathArray.map((position, index) => (
    <Path position={position} key={index} />
  ));
};

export default PathCreator;
