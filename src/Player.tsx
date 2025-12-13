import { useRef } from "react";
import { Vector3 } from "three";
import { RigidBody } from "@react-three/rapier";
import usePlayerMovement from "./hooks/usePlayerMovement";
import { useFrame } from "@react-three/fiber";

const Player = () => {
  const {
    forwardPressed,
    backPressed,
    leftPressed,
    rightPressed,
    sprintPressed,
  } = usePlayerMovement();

  const rigidbodyRef = useRef(null);

  const SPEED = 17;
  const SPRINT_MULTIPLIER = 1.5;

  useFrame(() => {
    if (!rigidbodyRef.current) return;

    const rb = rigidbodyRef.current;

    let velocityX = 0;
    let velocityZ = 0;

    const moveSpeed = sprintPressed ? SPEED * SPRINT_MULTIPLIER : SPEED;

    if (forwardPressed) velocityZ -= moveSpeed;
    if (backPressed) velocityZ += moveSpeed;
    if (leftPressed) velocityX -= moveSpeed;
    if (rightPressed) velocityX += moveSpeed;

    const currentVel = rb.linvel();

    rb.setLinvel(new Vector3(velocityX, currentVel.y, velocityZ), true);
  });

  return (
    <RigidBody
      ref={rigidbodyRef}
      position={[0, 1, 0]}
      colliders="cuboid"
      lockRotations
    >
      <mesh>
        <capsuleGeometry args={[1, 2, 8, 16]} />
        <meshBasicMaterial color={0x4ecdc4} />
      </mesh>
    </RigidBody>
  );
};

export default Player;
