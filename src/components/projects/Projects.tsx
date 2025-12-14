import React from "react";
import InnovationCounsel from "./InnovationCounsel";
import MuseumCounsel from "./MuseumCounsel";
import SocialFreaks from "./SocialFreaks";
import TicTacToe from "./TicTacToe";
import Chat from "./Chat";
import ProjectsSign from "./ProjectsSign";

const Projects: React.FC = () => {
  return (
    <>
      <InnovationCounsel />
      <MuseumCounsel />
      <SocialFreaks />
      <TicTacToe />
      <Chat />
      <ProjectsSign />
    </>
  );
};

export default Projects;
