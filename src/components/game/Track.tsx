import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import CollisionPlate from "../../base/CollisionPlate";
import { SPRITE_STYLES } from "../../constants/spriteStyles";

interface TrackProps {
  position: [number, number, number];
  started: boolean;
  failed: boolean;
  setStart: (started: boolean) => void;
}

const Track = ({ position, started, failed, setStart }: TrackProps) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      setStart(false);
    }
  }, [completed, setStart]);

  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 80]} />
        <meshStandardMaterial
          attach="material"
          color={"#e0d296"}
          roughness={1}
        />
      </mesh>
      <pointLight position={[0, 50, 5]} args={["#fafafa", 0.9, 80, 0.05]} />
      <CollisionPlate
        name="gameStart"
        position={[0, 0.01, 40]}
        size={[30, 10]}
        color="#c2ba69"
        onCollision={({ type }) => {
          if (type === "enter") {
            setStart(true);
          }
        }}
      />
      <CollisionPlate
        name="gameEnd"
        position={[0, 0.01, -40]}
        size={[30, 10]}
        color="#c2ba69"
        onCollision={({ type }) => {
          if (type === "enter") {
            setCompleted(true);
            setTimeout(() => {
              setCompleted(false);
            }, 2000);
          }
        }}
      />

      {!started && !failed && (
        <Html sprite style={SPRITE_STYLES} position={[0, 5, 0]} transform>
          <div style={{ textAlign: "center" }}>
            <p>Start Game</p>
            <span>( Only move forward or backward</span>
            <br />
            <span>While the Doll is looking away )</span>
          </div>
        </Html>
      )}

      {completed && (
        <Html sprite style={SPRITE_STYLES} position={[0, 5, -50]} transform>
          <span>Congratulations!</span>
        </Html>
      )}

      {failed && (
        <Html sprite style={SPRITE_STYLES} position={[0, 5, 0]} transform>
          <span>Game Over! Try Again.</span>
        </Html>
      )}
    </group>
  );
};

export default Track;
