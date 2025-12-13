import { useRef } from "react";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import usePlayerMovement from "./hooks/usePlayerMovement";

const Player = () => {
  const playerRef = useRef<RapierRigidBody>(null);
  usePlayerMovement({ playerRef });

  return (
    <RigidBody
      mass={10}
      ref={playerRef}
      position={[0, 2.5, 0]}
      colliders="cuboid"
      lockRotations
      sensor
    >
      <mesh>
        <capsuleGeometry args={[1, 2, 8, 16]} />
        <meshBasicMaterial color={0x4ecdc4} />
      </mesh>
    </RigidBody>
  );
};

export default Player;
