import React from "react";
import Path from "../../base/Path";

const PathMesh: React.FC = () => {
  return (
    <>
      <Path count={6} x={1} start={0} />
      <Path count={35} z={20} start={1} />
      <Path count={35} z={20} start={-36} />
      <Path count={30} x={50} start={7} />
      <Path count={30} x={-50} start={7} />
      <Path count={35} z={150} start={0} />
      <Path count={35} z={150} start={-35} />
      <Path count={30} x={50} start={-25} />
      <Path count={35} z={-110} start={0} />
      <Path count={35} z={-110} start={-35} />
      <Path count={30} x={140} start={-25} />
      <Path count={30} x={-140} start={-25} />
      <Path count={30} x={140} start={7} />
      <Path count={30} x={-140} start={7} />
      <Path count={30} x={-90} start={-25} />
      <Path count={20} x={-90} start={-48} />
    </>
  );
};

export default PathMesh;
