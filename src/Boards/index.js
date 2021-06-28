import { useTexture } from "@react-three/drei";
import React from "react";
import Board from "./Board";

const Boards = () => {
  const sf = useTexture([
    "/textures/sf1.JPG",
    "/textures/sf2.JPG",
    "/textures/sf3.JPG",
  ]);
  const iic = useTexture([
    "/textures/iic1.JPG",
    // "/textures/iic2.JPG",
    // "/textures/iic3.JPG",
  ]);
  const chat = useTexture([
    "/textures/chat1.JPG",
    // "/textures/iic2.JPG",
    // "/textures/iic3.JPG",
  ]);
  const museum = useTexture([
    "/textures/mc1.JPG",
    "/textures/mc2.JPG",
    // "/textures/iic3.JPG",
  ]);

  return (
    <>
      <Board map={sf} x={-120} z={-10} text="Social Freaks" />
      <Board
        map={iic}
        x={-60}
        z={-40}
        text="IIC DCRUST"
        rotation={[0, Math.PI, 0]}
      />
      <Board map={chat} x={-120} z={-70} text="Chat App" />
      <Board
        map={museum}
        x={-60}
        z={-135}
        text="Museum Counsel"
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
};

export default Boards;
