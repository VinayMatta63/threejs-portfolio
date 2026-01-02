import { useEffect, useRef, useState } from "react";
import {
  CuboidCollider,
  IntersectionEnterHandler,
  IntersectionExitHandler,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import usePlayerMovement from "../../hooks/usePlayerMovement";
import { useCollisionDetector } from "../../hooks/useCollisionDetector";
import useMovementState, { KeyControls } from "../../hooks/useMovementState";
import Character, { CharacterAnimationType } from "../../base/Character";
import useDefaults from "../../hooks/useDefaults";

const Player = () => {
  const {
    player: { scale },
  } = useDefaults();
  const playerRef = useRef<RapierRigidBody>(null);
  const [animation, setAnimation] = useState<CharacterAnimationType>("Idle");
  const sprintPressed = useMovementState(KeyControls.sprint);
  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);

  const { rotation } = usePlayerMovement({ playerRef });

  const { handleCollisionEnter, handleCollisionExit } = useCollisionDetector();

  useEffect(() => {
    const isMoving =
      forwardPressed || backPressed || leftPressed || rightPressed;

    let timeout;
    if (isMoving && sprintPressed) {
      timeout = setTimeout(() => setAnimation("Run"), 50);
    } else if (isMoving) {
      timeout = setTimeout(() => setAnimation("Walk"), 100);
    } else {
      timeout = setTimeout(() => setAnimation("Idle"), 150);
    }

    return () => clearTimeout(timeout);
  }, [forwardPressed, backPressed, leftPressed, rightPressed, sprintPressed]);

  return (
    <RigidBody
      sensor
      mass={10}
      lockRotations
      ref={playerRef}
      colliders={false}
      onIntersectionEnter={handleCollisionEnter as IntersectionEnterHandler}
      onIntersectionExit={handleCollisionExit as IntersectionExitHandler}
    >
      <CuboidCollider position={[0, 1, 0]} args={[1.5, 3, 1.5]} />
      <Character
        position={[0, -1.75, 0]}
        scale={scale}
        animation={animation}
        rotation={rotation}
      />
    </RigidBody>
  );
};

export default Player;
