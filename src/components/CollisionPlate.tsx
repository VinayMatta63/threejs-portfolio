import { RigidBody, RigidBodyProps } from "@react-three/rapier";
import { Color } from "three";
import {
  CollisionPayload,
  useCollisionListener,
} from "../hooks/useCollisionDetector";

type CollisionPlateProps = RigidBodyProps & {
  name?: string;
  color?: Color | number | string;
  onCollision: (payload: CollisionPayload) => void;
};

const CollisionPlate = ({
  name = "plate",
  color = 0xff0000,
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
        <meshBasicMaterial color={color} side={1} />
      </mesh>
    </RigidBody>
  );
};

export default CollisionPlate;
