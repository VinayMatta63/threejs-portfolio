import React from "react";
import TextMesh from "../components/TextMesh";

const SignText = ({ scale, position, text }) => {
  return (
    <TextMesh
      scale={scale}
      rotation={[0, Math.PI, 0]}
      position={position}
      size={1}
      height={0.1}
    >
      {text}
    </TextMesh>
  );
};

export default SignText;
