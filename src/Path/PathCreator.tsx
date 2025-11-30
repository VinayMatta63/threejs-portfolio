import React from "react";
import Path from "./Path";

interface PathCreatorProps {
  count: number;
  x?: number;
  z?: number;
  start: number;
  shadow?: boolean;
  path: any;
}

const PathCreator: React.FC<PathCreatorProps> = ({
  count,
  x,
  z,
  start,
  shadow = false,
  path,
}) => {
  const pathArray: [number, number, number][] = [];
  let i = start;
  while (count--) {
    let position: [number, number, number];
    position =
      i % 2 === 0
        ? [x ? x : i * 4, 0, z ? z : i * 4]
        : [x ? x - 3 : i * 4, 0, z ? z + 3 : i * 4];
    pathArray.push(position);
    i += 1;
  }
  return pathArray.map((position, index) => (
    <Path position={position} key={index} castShadow={shadow} path={path} />
  ));
};

export default PathCreator;
