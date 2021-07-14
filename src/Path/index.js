import React from "react";
import PathCreator from "./PathCreator";

const PathMesh = ({ path }) => {
  return (
    <>
      <PathCreator count={6} x={1} start={0} shadow={true} path={path} />

      <PathCreator count={35} z={20} start={1} path={path} />
      <PathCreator count={35} z={20} start={-36} path={path} />

      <PathCreator count={30} x={50} start={7} path={path} />
      <PathCreator count={30} x={-50} start={7} path={path} shadow={true} />

      <PathCreator count={35} z={150} start={0} path={path} />
      <PathCreator count={35} z={150} start={-35} path={path} />

      <PathCreator count={30} x={50} start={-25} path={path} shadow={true} />
      {/* <PathCreator count={30} x={-50} start={-25} path={path} /> */}

      <PathCreator count={35} z={-110} start={0} path={path} />
      <PathCreator count={35} z={-110} start={-35} path={path} />

      <PathCreator count={30} x={140} start={-25} path={path} />
      <PathCreator count={30} x={-140} start={-25} path={path} shadow={true} />

      <PathCreator count={30} x={140} start={7} path={path} shadow={true} />
      <PathCreator count={30} x={-140} start={7} path={path} />

      {/* <PathCreator count={11} x={140} start={39} path={path} /> */}
      {/* <PathCreator count={11} x={-140} start={39} path={path} /> */}

      {/* <PathCreator count={20} x={140} start={-48} path={path} /> */}
      {/* <PathCreator count={20} x={-140} start={-48} path={path} /> */}

      <PathCreator count={30} x={-90} start={-25} path={path} shadow={true} />
      {/* <PathCreator count={20} x={-90} start={-48} path={path} /> */}
    </>
  );
};

export default PathMesh;
