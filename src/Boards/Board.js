import React from "react";
import { DoubleSide, FontLoader } from "three";
import Roboto from "../Skills/fonts/Roboto_Regular";

const Board = ({ map, x, z, text, rotation = [0, 0, 0] }) => {
  const font = new FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  return (
    <group position={[x, 0, z]} rotation={rotation}>
      {/* Text */}
      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, (text.length / 2) * 3.2]}
      >
        <textBufferGeometry attach="geometry" args={[text, textOptions]} />
        <meshBasicMaterial attach="material" color="#fff" metalness={0.5} />
      </mesh>

      {/* Center */}
      <mesh position={[0, 5.3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeBufferGeometry args={[20, 10]} />
        <meshStandardMaterial
          attach="material"
          side={DoubleSide}
          map={map[0]}
        />
      </mesh>

      {/* Left */}
      <mesh position={[5, 2, 12]} rotation={[0, -Math.PI - Math.PI / 3, 0]}>
        <planeBufferGeometry args={[10, 6]} />
        <meshStandardMaterial
          attach="material"
          side={DoubleSide}
          map={map[1]}
        />
      </mesh>

      {/* Right */}
      <mesh position={[5, 2, -12]} rotation={[0, Math.PI / 3, 0]}>
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
