import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Loader, Preload } from "@react-three/drei";
import Scene from "./Body";
import Lights from "./Setup/Lights";
import Player from "./components/Player";
import Floor from "./components/Floor";
import { KEYBOARD_MAP } from "./hooks/useMovementState";
import "./App.css";
import CollisionPlate from "./components/CollisionPlate";

const App = () => {
  return (
    <div id="cover">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
          }}
          camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 20, 35] }}
          gl={{ antialias: true, outputColorSpace: "srgb" }}
          id="canvas"
        >
          <Suspense fallback={null}>
            <Physics>
              <Player />
              <Floor />
              <Scene />
              <CollisionPlate
                name="contact"
                position={[10, 1, 10]}
                onCollision={(payload) =>
                  console.log(`${payload.type} plate ${payload.name}`)
                }
              />
              <CollisionPlate
                name="visit"
                position={[20, 1, 20]}
                onCollision={(payload) =>
                  console.log(`${payload.type} plate ${payload.name}`)
                }
              />
            </Physics>
            <Preload all />
          </Suspense>
          <Lights />
        </Canvas>
      </KeyboardControls>

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
