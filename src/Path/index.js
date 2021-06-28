import React from "react";
import PathCreator from "./PathCreator";

const PathMesh = () => {
  return (
    <>
      <PathCreator count={6} x={1} start={0} shadow={true} />

      <PathCreator count={35} z={20} start={1} />
      <PathCreator count={35} z={20} start={-36} />

      <PathCreator count={30} x={50} start={7} />
      <PathCreator count={30} x={-50} start={7} />

      <PathCreator count={35} z={150} start={0} />
      <PathCreator count={35} z={150} start={-35} />

      <PathCreator count={30} x={50} start={-25} />
      <PathCreator count={30} x={-50} start={-25} />

      <PathCreator count={35} z={-110} start={0} />
      <PathCreator count={35} z={-110} start={-35} />

      <PathCreator count={30} x={140} start={-25} />
      <PathCreator count={30} x={-140} start={-25} />

      <PathCreator count={30} x={140} start={7} />
      <PathCreator count={30} x={-140} start={7} />

      <PathCreator count={11} x={140} start={39} />
      <PathCreator count={11} x={-140} start={39} />

      <PathCreator count={20} x={140} start={-48} />
      <PathCreator count={20} x={-140} start={-48} />

      <PathCreator count={30} x={-90} start={-25} />
      <PathCreator count={20} x={-90} start={-48} />
    </>
  );
};

export default PathMesh;
