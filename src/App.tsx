import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import {
  KeyboardControls,
  Loader,
  PerformanceMonitor,
  Stats,
} from "@react-three/drei";
import { useLocation } from "react-router-dom";
import { Leva } from "leva";
import { LOADER_CONFIG } from "./constants/loaderConfig";
import { KEYBOARD_MAP } from "./hooks/useMovementState";
import useDefaults from "./hooks/useDefaults";
import World from "./components/world/World";
import "./App.css";

const App = () => {
  const {
    physics: { debug },
  } = useDefaults();
  const { hash } = useLocation();
  const [dpr, setDpr] = useState(1.5);

  const isDebugMode = hash === "#debug";

  return (
    <>
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
              onIncline={() => setDpr(1.5)}
              onDecline={() => setDpr(1)}
              bounds={() => [30, 60]}
            >
              {isDebugMode && <Stats />}
              <Suspense fallback={null}>
                <Physics debug={isDebugMode && debug}>
                  <World />
                </Physics>
              </Suspense>
            </PerformanceMonitor>
          </Canvas>
        </KeyboardControls>

        <div className="controls">
          <span>WASD - Move</span>
          <span>Shift - Sprint</span>
        </div>
        <Loader {...LOADER_CONFIG} />
      </div>
      <Leva hidden={!isDebugMode} />
    </>
  );
};

export default App;
