import React from "react";

const SignText = ({ scale, position, font, text }) => {
  return (
    <>
      <mesh scale={scale} rotation={[0, Math.PI, 0]} position={position}>
        <textBufferGeometry
          attach="geometry"
          args={[text, { font, size: 1, height: 0.1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
    </>
  );
};

export default SignText;
