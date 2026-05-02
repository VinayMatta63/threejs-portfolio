import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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

const TARGET_INTERVAL = 1000 / 60;

// Hard 60fps cap: frameloop="never" means R3F won't render on its own.
// We drive it manually with RAF + timestamp delta check so the cap is exact.
const FpsLimiter = () => {
  const { advance } = useThree();
  const lastTime = useRef(0);

  useEffect(() => {
    let rafId: number;
    const loop = (time: number) => {
      rafId = requestAnimationFrame(loop);
      const delta = time - lastTime.current;
      if (delta >= TARGET_INTERVAL) {
        lastTime.current = time - (delta % TARGET_INTERVAL);
        advance(time / 1000);
      }
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [advance]);

  return null;
};

const App = () => {
  const {
    physics: { debug },
  } = useDefaults();
  const { hash } = useLocation();
  const [dpr, setDpr] = useState(1);

  const isDebugMode = hash === "#debug";

  return (
    <>
      <div id="cover">
        <KeyboardControls map={KEYBOARD_MAP}>
          <Canvas
            dpr={dpr}
            style={{
              height: "95vh",
              width: "100vw",
            }}
            camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 20, 35] }}
            gl={{ antialias: false }}
            frameloop="never"
            id="canvas"
          >
            <FpsLimiter />
            <PerformanceMonitor
              onIncline={() => setDpr(Math.min(1.5, window.devicePixelRatio))}
              onDecline={() => setDpr(1)}
              bounds={() => [45, 90]}
            >
              {isDebugMode && <Stats />}
              <Suspense fallback={null}>
                <Physics debug={isDebugMode && debug} timeStep="vary">
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
