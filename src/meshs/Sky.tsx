import { useMemo } from "react";
import { AdditiveBlending } from "three";

interface SkyProps {
  pointCount: number;
}

const Sky = ({ pointCount }: SkyProps) => {
  const [positions] = useMemo(() => {
    let positions = [];
    for (let i = 0; i < pointCount; i++) {
      positions.push((Math.random() - 0.5) * 500);
      positions.push(Math.random() * 300);
      positions.push((Math.random() - 0.5) * 500);
    }
    return [new Float32Array(positions)];
  }, [pointCount]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          // @ts-ignore
          attachObject={["attributes", "position"]}
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
