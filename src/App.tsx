import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import {
  KeyboardControls,
  Loader,
  PerformanceMonitor,
} from "@react-three/drei";
import { LOADER_CONFIG } from "./constants/loaderConfig";
import { KEYBOARD_MAP } from "./hooks/useMovementState";
import World from "./components/world/World";
import "./App.css";

const App = () => {
  const [dpr, setDpr] = useState(1.5);
  return (
    <div id="cover">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas
          shadows
          dpr={dpr}
          style={{
            height: "95vh",
            width: "100vw",
          }}
          camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 20, 35] }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          id="canvas"
        >
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          >
            <Suspense fallback={null}>
              <Physics>
                <World />
              </Physics>
            </Suspense>
          </PerformanceMonitor>
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
