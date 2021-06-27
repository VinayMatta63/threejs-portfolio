import React from "react";

const Tree = ({ treeTop, treeBottom, pos, scale }) => {
  const selectTree = Math.floor(Math.random() * 3);
  const tree = treeTop.scene.children[selectTree];
  const treeb = treeBottom.scene.children[selectTree];
  return (
    <group position={pos} rotation={[0, Math.floor(Math.random() * 10), 0]}>
      <mesh
        geometry={tree.geometry}
        castShadow
        receiveShadow
        scale={[4, 4, 4]}
        position={[0, -0.6, 0]}
      >
        <meshStandardMaterial color="#B9E749" attach="material" roughness={1} />
      </mesh>
      <mesh geometry={treeb.geometry} castShadow receiveShadow>
        <meshStandardMaterial color="#E78C46" attach="material" roughness={1} />
      </mesh>
    </group>
  );
};

export default Tree;
