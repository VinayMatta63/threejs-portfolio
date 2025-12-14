import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Loader, Preload } from "@react-three/drei";
import { KEYBOARD_MAP } from "./hooks/useMovementState";
import World from "./components/world/World";
import "./App.css";
import { LOADER_CONFIG } from "./constants/loaderConfig";

const App = () => {
  return (
    <div id="cover">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas
          shadows
          style={{
            height: "95vh",
            width: "100vw",
          }}
          camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 20, 35] }}
          gl={{ antialias: true }}
          id="canvas"
        >
          <Suspense fallback={null}>
            <Physics>
              <World />
            </Physics>
            <Preload all />
          </Suspense>
        </Canvas>
      </KeyboardControls>

      <div className="controls">
        <span>WASD - Move</span>
        <span>Shift - Sprint</span>
        <span>Space - Jump</span>
      </div>
      <Loader {...LOADER_CONFIG} />
    </div>
  );
};

export default App;
