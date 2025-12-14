import { RigidBody, RigidBodyProps } from "@react-three/rapier";
import { Color } from "three";
import { CollisionPayload } from "../services/CollisionEmitter";
import { useCollisionListener } from "../hooks/useCollisionDetector";

type CollisionPlateProps = RigidBodyProps & {
  name?: string;
  color?: Color | number | string;
  size?: [number, number];
  onCollision: (payload: CollisionPayload) => void;
};

const CollisionPlate = ({
  name = "plate",
  color = 0xff0000,
  size = [5, 5],
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
        <planeGeometry args={size} />
        <meshStandardMaterial color={color} side={1} />
      </mesh>
    </RigidBody>
  );
};

export default CollisionPlate;
