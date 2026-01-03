import React, { memo, useMemo } from "react";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import { BufferGeometry, Object3D } from "three";
import { getPathTilePositions } from "../helpers/getPathTilePositions";

type PathNode = Object3D & {
  geometry: BufferGeometry;
};

interface PathProps {
  start: number;
  count: number;
  x?: number;
  z?: number;
}

const Path: React.FC<PathProps> = ({ count, x, z, start }) => {
  const { nodes } = useGLTF("/models/tile.glb", true);

  const pathArray = useMemo(
    () => getPathTilePositions(start, count, x, z),
    [start, count, x, z]
  );

  return (
    <Instances
      limit={count}
      geometry={(nodes.Cube078 as PathNode).geometry}
      frustumCulled={false}
      castShadow
    >
      <meshStandardMaterial
        color="#aaa"
        roughness={1}
        metalness={0}
        opacity={0.8}
      />
      {pathArray.map((position, index) => (
        <Instance position={position} key={index} />
      ))}
    </Instances>
  );
};

useGLTF.preload("/models/tile.glb");

export default memo(Path);
