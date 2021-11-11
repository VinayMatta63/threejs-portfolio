import React from "react";
import { forwardRef } from "react";

const Plate = forwardRef(
  ({ position, args = [15, 10], color = "red" }, ref) => {
    return (
      <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
        <planeBufferGeometry args={args} />
        <meshStandardMaterial attach="material" color={color} roughness={1} />
      </mesh>
    );
  }
);

export default Plate;
