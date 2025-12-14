import React from "react";
import PathCreator from "./PathCreator";
import { useGLTF } from "@react-three/drei";

const PathMesh: React.FC = () => {
  const { nodes } = useGLTF("/models/tile.glb");
  return (
    <>
      <PathCreator count={6} x={1} start={0} shadow={true} path={nodes} />

      <PathCreator count={35} z={20} start={1} path={nodes} />
      <PathCreator count={35} z={20} start={-36} path={nodes} />

      <PathCreator count={30} x={50} start={7} path={nodes} />
      <PathCreator count={30} x={-50} start={7} path={nodes} shadow={true} />
      <PathCreator count={35} z={150} start={0} path={nodes} />
      <PathCreator count={35} z={150} start={-35} path={nodes} />

      <PathCreator count={30} x={50} start={-25} path={nodes} shadow={true} />
      {/* <PathCreator count={30} x={-50} start={-25} path={nodes} /> */}

      <PathCreator count={35} z={-110} start={0} path={nodes} />
      <PathCreator count={35} z={-110} start={-35} path={nodes} />

      <PathCreator count={30} x={140} start={-25} path={nodes} />
      <PathCreator count={30} x={-140} start={-25} path={nodes} shadow={true} />
      <PathCreator count={30} x={140} start={7} path={nodes} shadow={true} />
      <PathCreator count={30} x={-140} start={7} path={nodes} />

      {/* <PathCreator count={11} x={140} start={39} path={nodes} /> */}
      {/* <PathCreator count={11} x={-140} start={39} path={nodes} /> */}

      {/* <PathCreator count={20} x={140} start={-48} path={nodes} /> */}
      {/* <PathCreator count={20} x={-140} start={-48} path={nodes} /> */}

      <PathCreator count={30} x={-90} start={-25} path={nodes} shadow={true} />
      <PathCreator count={20} x={-90} start={-48} path={nodes} />
    </>
  );
};

export default PathMesh;
