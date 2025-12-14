import React from "react";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Portal from "./components/portal/Portal";
import Lamps from "./components/lamps/Lamps";
import Signs from "./SignBoards/Signs";
import PathMesh from "./Path/index";
import Game from "./Game/Game";
import Boards from "./Boards";
import Trees from "./Trees";
import Lights from "./Setup/Lights";

function Body(): React.ReactElement {
  return (
    <>
      <Portal />
      <Lamps />
      <Skills />
      <Lights />
      <About />
      <Game />
      <PathMesh />
      <Trees />
      <Boards />
      <Signs />
    </>
  );
}

export default Body;
