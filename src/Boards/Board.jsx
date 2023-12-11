import React from "react";
import TextMesh from "../components/TextMesh";

const Board = ({
  x,
  z,
  text,
  rotation = [0, 0, 0],
  model,
  modelLeft,
  modelRight,
}) => {
  return (
    <group position={[x, 0, z]} rotation={rotation}>
      <TextMesh
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, (text.length / 2) * 3.2]}
        size={5}
        height={1}
      >
        {text}
      </TextMesh>

      {model && <primitive object={model.scene} />}
      {modelLeft && <primitive object={modelLeft.scene} />}
      {modelRight && <primitive object={modelRight.scene} />}
    </group>
  );
};

export default Board;
