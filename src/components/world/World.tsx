import React, { lazy, Suspense } from "react";
import { Loader } from "@react-three/drei";
import { LOADER_CONFIG } from "../../constants/loaderConfig";
import Paths from "./Paths";
import Player from "./Player";
import Trees from "./Trees";
import Floor from "./Floor";
import Light from "./Light";

// Lazy load heavy components
const Portal = lazy(() => import("../portal/Portal"));
const Game = lazy(() => import("../game/Game"));
const Projects = lazy(() => import("../projects/Projects"));
const Lamps = lazy(() => import("../lamps/Lamps"));
const Skills = lazy(() => import("../skills/Skills"));
const About = lazy(() => import("../about/About"));

const World: React.FC = () => {
  return (
    <>
      {/* Base */}
      <Player />
      <Floor />
      <Trees />
      <Light />
      <Paths />

      {/* Lazy load heavy components */}
      <Suspense fallback={null}>
        <Portal />
        <Lamps />
        <Skills />
        <About />
        <Game />
        <Projects />
      </Suspense>
      <Loader {...LOADER_CONFIG} />
    </>
  );
};

export default World;
