import { useTexture } from "@react-three/drei";
import React from "react";
import Board from "./Board";

const Boards = () => {
  const sf = useTexture([
    "/assets/sf.png",
    "/assets/sf2.png",
    "/assets/sf3.png",
  ]);

  return <Board map={sf} x={-120} z={-10} />;
};

export default Boards;
