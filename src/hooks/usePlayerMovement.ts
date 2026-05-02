import React, { useRef } from "react";
import { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";
import useCameraMovement from "./useCameraMovement";
import useMovementState, { KeyControls } from "./useMovementState";
import useDefaults from "./useDefaults";

const FLOOR_Y = 2;
const GRAVITY = -9.81;
const ACCELERATION = 50;
const FRICTION = 0.85;
const ROTATION_SPEED = 10;

interface UsePlayerMovementProps {
  playerRef: React.RefObject<RapierRigidBody | null>;
  characterRef: React.RefObject<Group | null>;
}

// Pre-allocated vectors to avoid per-frame GC pressure
const _direction = new Vector3();
const _targetVelocity = new Vector3();
const _linvel = new Vector3();
const _translation = new Vector3();

const usePlayerMovement = ({ playerRef, characterRef }: UsePlayerMovementProps) => {
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
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const rb = playerRef.current;
    const currentVel = rb.linvel();

    const clampedDelta = Math.min(delta, 0.016);

    _direction.set(0, 0, 0);

    const moveSpeed = sprintPressed
      ? movementSpeed * sprintMultiplier
      : movementSpeed;

    if (forwardPressed) _direction.z -= 1;
    if (backPressed) _direction.z += 1;
    if (leftPressed) _direction.x -= 1;
    if (rightPressed) _direction.x += 1;

    if (_direction.length() > 0) {
      _direction.normalize().multiplyScalar(moveSpeed);
    }

    const lerpFactor = 1 - Math.exp(-ACCELERATION * clampedDelta);
    _targetVelocity.copy(_direction);
    velocityRef.current.lerp(_targetVelocity, lerpFactor);

    if (_direction.x === 0)
      velocityRef.current.x *= Math.pow(FRICTION, clampedDelta);
    if (_direction.z === 0)
      velocityRef.current.z *= Math.pow(FRICTION, clampedDelta);

    let velocityY = currentVel.y + GRAVITY * clampedDelta;

    const pos = rb.translation();
    if (pos.y <= FLOOR_Y) {
      velocityY = 0;
      _translation.set(pos.x, FLOOR_Y, pos.z);
      rb.setTranslation(_translation, true);
    }

    _linvel.set(velocityRef.current.x, velocityY, velocityRef.current.z);
    rb.setLinvel(_linvel, true);

    const speed = Math.sqrt(
      currentVel.x * currentVel.x + currentVel.z * currentVel.z
    );
    if (speed > 0.5) {
      targetRotationRef.current = Math.atan2(currentVel.x, currentVel.z);
    }

    const angleDiff = targetRotationRef.current - currentRotationRef.current;
    const normalizedDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
    currentRotationRef.current += normalizedDiff * ROTATION_SPEED * delta;

    // Mutate rotation directly — no React state, no re-render
    if (characterRef.current) {
      characterRef.current.rotation.y = currentRotationRef.current;
    }
  });
};

export default usePlayerMovement;
