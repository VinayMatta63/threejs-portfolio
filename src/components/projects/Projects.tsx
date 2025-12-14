import React from "react";
import InnovationCounsel from "./InnovationCounsel";
import MuseumCounsel from "./MuseumCounsel";
import SocialFreaks from "./SocialFreaks";
import TicTacToe from "./TicTacToe";
import Chat from "./Chat";

const Projects: React.FC = () => {
  return (
    <>
      <InnovationCounsel />
      <MuseumCounsel />
      <SocialFreaks />
      <TicTacToe />
      <Chat />
    </>
  );
};

export default Projects;
