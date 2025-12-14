import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import gsap from "gsap";
import useMovementState, { KeyControls } from "../../hooks/useMovementState";
import { delay } from "../../helpers/delay";
import Squid from "./Squid";
import Track from "./Track";

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [failed, setFailed] = useState(false);
  const squidRef = useRef<Group>(null);
  const isRunningRef = useRef(false);

  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);

  const isMoving = forwardPressed || backPressed || leftPressed || rightPressed;

  useEffect(() => {
    if (!squidRef.current) return;

    if (failed || !startGame) {
      isRunningRef.current = false;
      gsap.killTweensOf(squidRef.current?.rotation);
      if (failed) squidRef.current.rotation.y = Math.PI;
      return;
    }

    const animate = async () => {
      isRunningRef.current = true;
      if (!squidRef.current) return;

      while (isRunningRef.current) {
        gsap.to(squidRef.current.rotation, { y: 0, duration: 0.45 });
        await delay(Math.random() * 1000 + 1000);

        if (!isRunningRef.current) break;

        gsap.to(squidRef.current.rotation, { y: Math.PI, duration: 0.45 });
        await delay(Math.random() * 750 + 750);
      }
    };

    animate();
  }, [startGame, failed]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (failed) {
      timeout = setTimeout(() => {
        setFailed(false);
        setStartGame(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [failed]);

  useFrame(() => {
    if (startGame && squidRef.current?.rotation.y === 0 && isMoving) {
      setStartGame(false);
      setFailed(true);
    }
  });

  return (
    <group position={[100, 5, -100]}>
      <Track
        position={[0, -4.99, 55]}
        started={startGame}
        failed={failed}
        setStart={setStartGame}
      />
      <Squid ref={squidRef} />
    </group>
  );
};

export default Game;
