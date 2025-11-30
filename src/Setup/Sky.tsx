import React, { useMemo } from "react";
import { AdditiveBlending } from "three";

interface SkyProps {
  pointCount: number;
}

const Sky: React.FC<SkyProps> = ({ pointCount }) => {
  const [positions] = useMemo(() => {
    const posArray: number[] = [];
    for (let i = 0; i < pointCount; i++) {
      posArray.push((Math.random() - 0.5) * 500);
      posArray.push(Math.random() * 300);
      posArray.push((Math.random() - 0.5) * 500);
    }
    return [new Float32Array(posArray)];
  }, [pointCount]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.08}
        sizeAttenuation={true}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Sky;
