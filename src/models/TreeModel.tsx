import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

interface TreeProps extends GroupProps {
  tree: any;
}

const Tree = ({ tree, ...props }: TreeProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = tree;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.tree.geometry}
        material={materials["Material_1019.001"]}
        rotation={[-1.54, 0, 0]}
        scale={Math.random() + 0.7}
      />
    </group>
  );
};

export default Tree;
