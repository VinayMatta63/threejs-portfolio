import Path from "../models/PathModel";
import { Vector3 } from "@react-three/fiber";

interface PathCreatorProps {
  count: number;
  path: any;
  x?: number;
  z?: number;
  start: number;
  shadow?: boolean;
}

const PathCreator = ({
  count,
  x,
  z,
  start,
  shadow = false,
  path,
}: PathCreatorProps) => {
  const pathArray: Vector3[] = [];
  let i = start;
  while (count--) {
    let position: Vector3[] = [];
    position =
      i % 2 === 0
        ? [x ? x : i * 4, 0, z ? z : i * 4]
        : [x ? x - 3 : i * 4, 0, z ? z + 3 : i * 4];
    // @ts-ignore
    pathArray.push(position);
    i += 1;
  }
  return pathArray.map((position, index) => (
    <Path position={position} key={index} castShadow={shadow} path={path} />
  ));
};

export default PathCreator;
