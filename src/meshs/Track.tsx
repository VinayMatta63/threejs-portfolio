import { Html } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { forwardRef } from "react";
import { Mesh } from "three";

const spriteStyles = {
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.8)",
  fontSize: "30px",
  padding: "100px 200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

interface TrackProps {
  position: Vector3;
  args: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ];
  show: boolean;
  completed: boolean;
}

const Track = forwardRef<Mesh, TrackProps>(
  ({ position, args = [30, 80], show, completed }, ref) => {
    return (
      <group>
        <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
          <planeGeometry args={args} />
          <meshStandardMaterial
            attach="material"
            color={"#e0d296"}
            roughness={1}
          />
        </mesh>
        {!show && (
          // @ts-ignore
          <Html sprite style={spriteStyles} position={[100, 5, 0]} transform>
            {!completed ? (
              <>
                <span>Start Game</span>
                <br />
                <span>( Only move forward or backward</span>
                <span>While the Doll is looking away )</span>
              </>
            ) : (
              <>completed</>
            )}
          </Html>
        )}
      </group>
    );
  }
);

export default Track;
