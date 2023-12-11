import "./styles/App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Body";
import Lights from "./Setup/Lights";
import { Loader, Preload, Stars } from "@react-three/drei";

const App = () => {
  return (
    <div id="cover">
      <div id="selector">
        <div id="welcome">
          <div>
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "500",
                marginBottom: "50px",
              }}
            >
              Hello, I'm <span>Vinay Matta.</span>
            </h1>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "500",
                marginBottom: "50px",
              }}
            >
              I'm a full-stack Web Developer.
            </h2>
          </div>
          {window.innerWidth > 767 ? (
            <div>
              <p>Click to play</p>
              <p style={{ textAlign: "center", marginTop: "50px" }}>
                Move: WASD
                <br />
                Jump: SPACE
                <br />
                Look: MOUSE
                <br />
                Sprint: Left Shift
                <br />
                Fly: F
              </p>
            </div>
          ) : (
            <div>
              <p>Sorry!</p>
              <p>This website does not support mobile devices yet.</p>
            </div>
          )}
        </div>
      </div>

      <Canvas
        style={{
          height: "95vh",
          width: "100vw",
          backgroundColor: "black",
        }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }}
        id="canvas"
        // shadows
      >
        <fog attach="fog" args={["#0d1a26", 70, 120]} />

        <Suspense fallback={null}>
          <Scene />
          <Preload all />
        </Suspense>
        <Stars
          radius={160}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <Lights />
      </Canvas>
      <div className="controls">
        <span>WASD - Move</span>
        <span>Shift - Sprint</span>
        <span>Space - Jump</span>
        <span>F - Fly and Land</span>
        <span>Mouse - Look Around</span>
      </div>
      <Loader
        containerStyles={{
          background:
            "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
        }} // Flex layout styles
        innerStyles={{
          backgroundColor: "salmon",
          width: "50vw",
        }} // Inner container styles
        barStyles={{
          backgroundColor: "lightgreen",
        }} // Loading-bar styles
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
        initialState={(active) => active}
        dataStyles={{
          color: "#fafafa",
          fontSize: "25px",
          fontFamily: "Raleway",
          fontWeight: "500",
        }}
      />
    </div>
  );
};

export default App;
