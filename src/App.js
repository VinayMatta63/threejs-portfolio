import "./App.css";
import { React, Suspense } from "react";
import Bounce from "react-reveal/Bounce";
import { Canvas } from "@react-three/fiber";
import Scene from "./Body";
import Sky from "./Setup/Sky";
import Lights from "./Setup/Lights";
import CameraControls from "./Setup/CameraControls";
import Particles from "react-particles-js";
import { PCFSoftShadowMap } from "three";
import Floor from "./Setup/Floor";
import { OrbitControls } from "@react-three/drei";
const App = () => {
  return (
    <>
      <div id="selector">
        <div id="welcome">
          <Bounce top>
            <h1 style={{ fontSize: "45px", fontWeight: "500" }}>
              Hello, I'm <span>Vinay Matta.</span>
            </h1>
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
              I'm a full-stack Web Developer.
            </h2>
          </Bounce>
          <Bounce bottom>
            <p>Click to play</p>
            <p>
              Move: WASD
              <br />
              Jump: SPACE
              <br />
              Look: MOUSE
            </p>
          </Bounce>
        </div>
        <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 800,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#91fff8",
                // value: "#daf277",
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 0.2,
              },
            },
          }}
        />
      </div>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }}
        id="canvas"
        shadows={true}
        shadowMap
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFSoftShadowMap;
          gl.antialias = true;
        }}
      >
        <fog attach="fog" args={["#0d1a26", 60, 100]} />
        <Suspense fallback={null}>
          <Sky pointCount={10000} />
          <Floor />
          <Lights />
          <CameraControls />
          <Scene />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </>
  );
};

export default App;
