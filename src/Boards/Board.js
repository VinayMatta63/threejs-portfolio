import React from "react";

const Board = ({
  x,
  z,
  text,
  rotation = [0, 0, 0],
  font,
  model,
  modelLeft,
  modelRight,
}) => {
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

      {model && <primitive object={model.scene} />}
      {modelLeft && <primitive object={modelLeft.scene} />}
      {modelRight && <primitive object={modelRight.scene} />}
    </group>
  );
};

export default Board;
