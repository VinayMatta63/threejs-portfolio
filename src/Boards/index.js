import React from "react";
import Board from "./Board";

const Boards = ({ sf, iic, chat, museum, font }) => {
  return (
    <>
      <Board map={sf} x={-120} z={-10} text="Social Freaks" font={font} />
      <Board
        map={iic}
        x={-60}
        z={-40}
        text="IIC DCRUST"
        rotation={[0, Math.PI, 0]}
        font={font}
      />
      <Board map={chat} x={-120} z={-70} text="Chat App" font={font} />
      <Board
        map={museum}
        x={-60}
        z={-135}
        text="Museum Counsel"
        rotation={[0, Math.PI, 0]}
        font={font}
      />
    </>
  );
};

export default Boards;
