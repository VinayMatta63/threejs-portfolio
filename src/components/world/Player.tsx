import { useRef, useState } from "react";
import {
  CuboidCollider,
  IntersectionEnterHandler,
  IntersectionExitHandler,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import usePlayerMovement from "../../hooks/usePlayerMovement";
import { useCollisionDetector } from "../../hooks/useCollisionDetector";
import useMovementState, { KeyControls } from "../../hooks/useMovementState";
import Character, { CharacterAnimationType } from "../../base/Character";

const Player = () => {
  const playerRef = useRef<RapierRigidBody>(null);
  const [animation, setAnimation] = useState<CharacterAnimationType>("Idle");
  const sprintPressed = useMovementState(KeyControls.sprint);
  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);

  const { rotation } = usePlayerMovement({ playerRef });

  const { handleCollisionEnter, handleCollisionExit } = useCollisionDetector();

  useFrame(() => {
    if (!playerRef.current) return;

    // Check if any movement key is actually pressed
    const isMoving =
      forwardPressed || backPressed || leftPressed || rightPressed;

    // Determine animation based on input and sprint state
    if (isMoving) {
      setAnimation(sprintPressed ? "Run" : "Walk");
    } else {
      setAnimation("Idle");
    }
  });

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
        scale={1.75}
        animation={animation}
        rotation={rotation}
      />
    </RigidBody>
  );
};

export default Player;
