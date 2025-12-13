import React, { useRef } from "react";
import { Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";

interface CameraMovementProps {
  playerRef: React.RefObject<RapierRigidBody>;
}

const CAMERA_DISTANCE = 35;
const CAMERA_HEIGHT = 20;
const LOOK_AHEAD = -2;
const CAMERA_SMOOTHING = 6;

const useCameraMovement = ({ playerRef }: CameraMovementProps) => {
  const { camera } = useThree();
  const targetPos = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3());

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const playerPos = playerRef.current.translation();
    const playerVel = playerRef.current.linvel();

    // Predict player position slightly ahead for smoother camera motion
    const predictedX = playerPos.x + playerVel.x * 0.05;
    const predictedZ = playerPos.z + playerVel.z * 0.05;

    const cameraTargetX = predictedX;
    const cameraTargetY = playerPos.y + CAMERA_HEIGHT;
    const cameraTargetZ = predictedZ + CAMERA_DISTANCE;

    // Frame-rate independent smoothing with tighter clamping
    const clampedDelta = Math.min(delta, 0.0167);
    const smoothFactor = 1 - Math.exp(-CAMERA_SMOOTHING * clampedDelta);

    // Smooth camera position
    targetPos.current.x += (cameraTargetX - targetPos.current.x) * smoothFactor;
    targetPos.current.y += (cameraTargetY - targetPos.current.y) * smoothFactor;
    targetPos.current.z += (cameraTargetZ - targetPos.current.z) * smoothFactor;

    camera.position.copy(targetPos.current);

    // Smooth the look-at point as well
    const lookAtX = playerPos.x;
    const lookAtY = playerPos.y + 1;
    const lookAtZ = playerPos.z - LOOK_AHEAD;

    targetLookAt.current.x += (lookAtX - targetLookAt.current.x) * smoothFactor;
    targetLookAt.current.y += (lookAtY - targetLookAt.current.y) * smoothFactor;
    targetLookAt.current.z += (lookAtZ - targetLookAt.current.z) * smoothFactor;

    camera.lookAt(targetLookAt.current);
  });

  return null;
};

export default useCameraMovement;
