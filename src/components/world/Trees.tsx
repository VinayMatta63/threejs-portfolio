import { memo, useMemo } from "react";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import { BufferGeometry, Object3D } from "three";
import {
  getTreePositions,
  getTreeScales,
} from "../../helpers/getTreePositions";

type TreeNode = Object3D & {
  geometry: BufferGeometry;
};

const Trees = () => {
  const { nodes, materials } = useGLTF("/models/tree.glb", true);
  const { treePositions, treeScales } = useMemo(() => {
    return {
      treePositions: getTreePositions(),
      treeScales: getTreeScales(),
    };
  }, []);

  return (
    <Instances
      limit={treePositions.length}
      geometry={(nodes.tree as TreeNode).geometry}
      material={materials["Material_1019.001"]}
      frustumCulled={false}
      castShadow
    >
      {treePositions.map((pos, index) => (
        <Instance
          key={index}
          position={pos as [number, number, number]}
          rotation={[-1.54, 0, 0]}
          scale={treeScales[index]}
        />
      ))}
    </Instances>
  );
};

export default memo(Trees);
