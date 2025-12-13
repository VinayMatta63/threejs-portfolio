import { useEffect, useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Group } from "three";
import Squid from "./Squid";
import Track from "./Track";
import gsap from "gsap";
import { delay } from "../utils/delay";
import useMovementState, { KeyControls } from "../hooks/useMovementState";

const Game = ({ position }: ThreeElements["group"]) => {
  const [startGame, setStartGame] = useState(false);
  const [failed, setFailed] = useState(false);
  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);
  const squidRef = useRef<Group>(null);

  useEffect(() => {
    const startOp = async (game) => {
      if (!game) return;
      gsap.to(squidRef.current.rotation, { y: 0, duration: 0.45 });
      await delay(Math.random() * 1000 + 1000);
      gsap.to(squidRef.current.rotation, { y: Math.PI, duration: 0.45 });
      await delay(Math.random() * 750 + 750);
      startOp(!failed);
    };

    startOp(startGame);
  }, [startGame, failed]);

  useFrame(() => {
    if (!squidRef.current) return;

    if (startGame) {
      if (squidRef.current.rotation.y === 0) {
        if (forwardPressed || backPressed || leftPressed || rightPressed) {
          setStartGame(false);
          setFailed(true);
        }
      }
    }
  });

  return (
    <group position={position}>
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
