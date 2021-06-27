import React from "react";
import { DoubleSide, FontLoader } from "three";
import Roboto from "../Skills/fonts/Roboto_Regular";

const Board = ({ map, x, z }) => {
  const font = new FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };
  return (
    <group>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[x, 15, z + 20]}>
        <textBufferGeometry
          attach="geometry"
          args={["Social Freaks", textOptions]}
        />
        <meshStandardMaterial attach="material" color="#fff" metalness={1} />
      </mesh>
      {/* Center */}
      <mesh position={[x, 5.3, z]} rotation={[0, Math.PI / 2, 0]}>
        <planeBufferGeometry args={[20, 10]} />
        <meshStandardMaterial
          attach="material"
          side={DoubleSide}
          map={map[0]}
        />
      </mesh>
      {/* Left */}
      <mesh
        position={[x + 5, 2, z + 12]}
        rotation={[0, -Math.PI - Math.PI / 3, 0]}
      >
        <planeBufferGeometry args={[10, 6]} />
        <meshStandardMaterial
          attach="material"
          side={DoubleSide}
          map={map[1]}
        />
      </mesh>

      {/* Right */}

      <mesh position={[x + 5, 2, z - 12]} rotation={[0, Math.PI / 3, 0]}>
        <planeBufferGeometry args={[10, 6]} />
        <meshStandardMaterial
          attach="material"
          side={DoubleSide}
          map={map[2]}
        />
      </mesh>
    </group>
  );
};

export default Board;
