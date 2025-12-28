import React, { useRef, useState } from "react";
import { Euler, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";
import useCameraMovement from "./useCameraMovement";
import useMovementState, { KeyControls } from "./useMovementState";
import useDefaults from "./useDefaults";

const FLOOR_Y = 2; // Y position of the floor
const GRAVITY = -9.81; // Gravity strength
const ACCELERATION = 50; // How quickly to reach target speed
const FRICTION = 0.85; // Friction factor when no input
const ROTATION_SPEED = 10; // How quickly to rotate towards movement direction

interface UsePlayerMovementProps {
  playerRef: React.RefObject<RapierRigidBody | null>;
}

const usePlayerMovement = ({ playerRef }: UsePlayerMovementProps) => {
  useCameraMovement({ playerRef });
  const {
    player: { movementSpeed, sprintMultiplier },
  } = useDefaults();

  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);
  const sprintPressed = useMovementState(KeyControls.sprint);

  const velocityRef = useRef(new Vector3(0, 0, 0));
  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0, 0));
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const rb = playerRef.current;
    const currentVel = rb.linvel();

    // Clamp delta to prevent physics instability on low framerates
    const clampedDelta = Math.min(delta, 0.016); // Cap at 60fps (16ms)

    // Build normalized direction vector from keyboard input
    const direction = new Vector3(0, 0, 0);

    const moveSpeed = sprintPressed
      ? movementSpeed * sprintMultiplier
      : movementSpeed;

    if (forwardPressed) direction.z -= 1;
    if (backPressed) direction.z += 1;
    if (leftPressed) direction.x -= 1;
    if (rightPressed) direction.x += 1;

    // Normalize to prevent faster diagonal movement, then apply speed
    if (direction.length() > 0) {
      direction.normalize().multiplyScalar(moveSpeed);
    }

    // Smoothly interpolate velocity towards target using exponential decay
    const lerpFactor = 1 - Math.exp(-ACCELERATION * clampedDelta);
    const targetVelocity = direction.clone();
    velocityRef.current.lerp(targetVelocity, lerpFactor);

    // Apply exponential friction decay when no input on each axis
    if (direction.x === 0)
      velocityRef.current.x *= Math.pow(FRICTION, clampedDelta);
    if (direction.z === 0)
      velocityRef.current.z *= Math.pow(FRICTION, clampedDelta);

    // Apply gravity
    let velocityY = currentVel.y + GRAVITY * clampedDelta;

    // Floor collision
    const pos = rb.translation();
    if (pos.y <= FLOOR_Y) {
      velocityY = 0;
      rb.setTranslation(new Vector3(pos.x, FLOOR_Y, pos.z), true);
    }

    rb.setLinvel(
      new Vector3(velocityRef.current.x, velocityY, velocityRef.current.z),
      true
    );

    // Calculate target rotation from velocity
    const speed = Math.sqrt(
      currentVel.x * currentVel.x + currentVel.z * currentVel.z
    );
    if (speed > 0.5) {
      targetRotationRef.current = Math.atan2(currentVel.x, currentVel.z);
    }

    // Smoothly interpolate current rotation towards target
    const angleDiff = targetRotationRef.current - currentRotationRef.current;

    // Normalize angle difference to [-PI, PI] for shortest rotation path
    const normalizedDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));

    currentRotationRef.current += normalizedDiff * ROTATION_SPEED * delta;
    setRotation(new Euler(0, currentRotationRef.current, 0));
  });

  return { rotation };
};

export default usePlayerMovement;
