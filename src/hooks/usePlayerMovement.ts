import React, { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";
import useCameraMovement from "./useCameraMovement";
import useMovementState, { KeyControls } from "./useMovementState";

// Physics constants
const SPEED = 17;
const SPRINT_MULTIPLIER = 1.5;
const FLOOR_Y = 2;
const GRAVITY = -9.81;
const ACCELERATION = 50;
const FRICTION = 0.85;

interface UsePlayerMovementProps {
  playerRef: React.RefObject<RapierRigidBody | null>;
}

const usePlayerMovement = ({ playerRef }: UsePlayerMovementProps) => {
  useCameraMovement({ playerRef });

  const forwardPressed = useMovementState(KeyControls.forward);
  const backPressed = useMovementState(KeyControls.back);
  const leftPressed = useMovementState(KeyControls.left);
  const rightPressed = useMovementState(KeyControls.right);
  const sprintPressed = useMovementState(KeyControls.sprint);

  const velocityRef = useRef(new Vector3(0, 0, 0));

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const rb = playerRef.current;
    const currentVel = rb.linvel();

    // Clamp delta to prevent large jumps
    const clampedDelta = Math.min(delta, 0.016); // 60fps max frame

    // Target velocity based on input
    let targetVelX = 0;
    let targetVelZ = 0;

    const moveSpeed = sprintPressed ? SPEED * SPRINT_MULTIPLIER : SPEED;

    if (forwardPressed) targetVelZ -= moveSpeed;
    if (backPressed) targetVelZ += moveSpeed;
    if (leftPressed) targetVelX -= moveSpeed;
    if (rightPressed) targetVelX += moveSpeed;

    // Smooth acceleration towards target velocity
    const accelFactor = 1 - Math.exp(-ACCELERATION * clampedDelta);
    velocityRef.current.x += (targetVelX - velocityRef.current.x) * accelFactor;
    velocityRef.current.z += (targetVelZ - velocityRef.current.z) * accelFactor;

    // Apply friction when no input
    if (targetVelX === 0)
      velocityRef.current.x *= Math.pow(FRICTION, clampedDelta);
    if (targetVelZ === 0)
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
  });

  return null;
};

export default usePlayerMovement;
