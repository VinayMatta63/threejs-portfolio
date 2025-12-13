import { useCallback, useEffect } from "react";
import {
  CollisionEnterPayload,
  CollisionExitPayload,
} from "@react-three/rapier";
import {
  collisionEmitter,
  CollisionPayload,
  type CollisionEventType,
} from "../services/CollisionEmitter";

type CollisionListener = (payload: CollisionPayload) => void;

export type { CollisionEventType, CollisionPayload };

export const useCollisionDetector = () => {
  const handleCollisionEnter = useCallback((event: CollisionEnterPayload) => {
    const plateName = event.rigidBodyObject?.userData?.collisionName;
    collisionEmitter.emit({ type: "enter", name: plateName });
  }, []);

  const handleCollisionExit = useCallback((event: CollisionExitPayload) => {
    const plateName = event.rigidBodyObject?.userData?.collisionName;
    collisionEmitter.emit({ type: "exit", name: plateName });
  }, []);

  return {
    handleCollisionEnter,
    handleCollisionExit,
  };
};

// Listen to collisions
export const useCollisionListener = (
  collisionName: string,
  callback: CollisionListener
) => {
  useEffect(() => {
    const unsubscribe = collisionEmitter.subscribe(collisionName, callback);
    return unsubscribe;
  }, [collisionName, callback]);
};
