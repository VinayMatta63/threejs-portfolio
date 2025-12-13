import React from "react";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";
import {
  CollisionPayload,
  useCollisionListener,
} from "../hooks/useCollisionDetector";

type CollisionPlateProps = RigidBodyProps & {
  name?: string;
  onCollision: (payload: CollisionPayload) => void;
};

const CollisionPlate = ({
  name = "plate",
  onCollision,
  ...props
}: CollisionPlateProps) => {
  useCollisionListener(name, (payload) => {
    onCollision(payload);
  });

  return (
    <RigidBody
      type="fixed"
      sensor
      userData={{ collisionName: name }}
      {...props}
    >
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color={0xff0000} side={1} />
      </mesh>
    </RigidBody>
  );
};

export default CollisionPlate;
