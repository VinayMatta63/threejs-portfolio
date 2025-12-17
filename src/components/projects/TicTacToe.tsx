import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const TicTacToe = () => {
  const [tttModel, tttLeft] = useGLTF(
    ["/models/ttt.glb", "/models/ttt1.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={TTTScreen}
      position={[-120, 0, -140]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Tic Tac Toe"
      model={tttModel}
      modelLeft={tttLeft}
      scale={[1.2, 1.2, 1]}
      subScale={0.8}
    />
  );
};

export default TicTacToe;

const TTTScreen: React.FC = () => (
  <PlateScreen
    title="Tic Tac Toe"
    description="A Multiplayer Tic-Tac-Toe game with random matchups , private rooms and AI
      mode (using minimax algorithm) using react and firebase."
    visitLink="https://tic-tac-toe-7fcb8.web.app/"
    codeLink="https://github.com/VinayMatta63/tic-tac-toe-multipayer"
  />
);
