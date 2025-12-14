import React, { lazy, Suspense } from "react";
import { Preload } from "@react-three/drei";
import Paths from "./Paths";
import Player from "./Player";
import Trees from "./Trees";
import Floor from "./Floor";
import Light from "./Light";
import Portal from "../portal/Portal";

// Lazy load heavy components
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
      <Portal />

      {/* Lazy load heavy components */}
      <Suspense fallback={null}>
        <Lamps />
        <Skills />
        <About />
        <Game />
        <Projects />
        <Preload all />
      </Suspense>
    </>
  );
};

export default World;
