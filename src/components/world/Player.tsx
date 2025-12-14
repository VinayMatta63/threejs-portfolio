import { useRef, useState } from "react";
import {
  CuboidCollider,
  IntersectionEnterHandler,
  IntersectionExitHandler,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { Euler } from "three";
import usePlayerMovement from "../../hooks/usePlayerMovement";
import { useCollisionDetector } from "../../hooks/useCollisionDetector";
import useMovementState, { KeyControls } from "../../hooks/useMovementState";
import Character, { CharacterAnimationType } from "../../base/Character";

const Player = () => {
  const playerRef = useRef<RapierRigidBody>(null);
  const [animation, setAnimation] = useState<CharacterAnimationType>("Idle");
  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0, 0));
  const sprintPressed = useMovementState(KeyControls.sprint);

  usePlayerMovement({ playerRef });

  const { handleCollisionEnter, handleCollisionExit } = useCollisionDetector();

  useFrame(() => {
    if (!playerRef.current) return;

    const vel = playerRef.current.linvel();
    const speed = Math.sqrt(vel.x * vel.x + vel.z * vel.z);

    // Determine animation based on speed and sprint state
    if (speed > 0.5) {
      setAnimation(sprintPressed ? "Run" : "Walk");
    } else {
      setAnimation("Idle");
    }

    // Rotate character in direction of movement
    if (speed > 0.5) {
      const angle = Math.atan2(vel.x, vel.z);
      setRotation(new Euler(0, angle, 0));
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
