import React, { forwardRef } from "react";
import { Mesh } from "three";

interface PlateProps {
  position: [number, number, number];
  args?: [number, number];
  color?: string;
}

const Plate = forwardRef<Mesh, PlateProps>((
  { position, args = [15, 10], color = "red" },
  ref
) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} roughness={1} />
    </mesh>
  );
});

Plate.displayName = "Plate";

export default Plate;
