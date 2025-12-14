import React from "react";
import Boards from "../projects/Projects";
import Skills from "../skills/Skills";
import Portal from "../portal/Portal";
import Lamps from "../lamps/Lamps";
import About from "../about/About";
import Game from "../game/Game";
import Signs from "../../SignBoards/Signs";
import PathMesh from "./Paths";
import Trees from "./Trees";
import Player from "./Player";
import Floor from "./Floor";
import Light from "./Light";

const World: React.FC = () => {
  return (
    <>
      {/* Base */}
      <Player />
      <Floor />
      <Trees />
      <Light />
      <PathMesh />

      {/* Additions */}
      <Portal />
      <Lamps />
      <Skills />
      <About />
      <Game />
      <Boards />
      <Signs />
    </>
  );
};

export default World;
