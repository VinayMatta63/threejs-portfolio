import { PointLightProps } from "@react-three/fiber";

interface LampsLightProps extends PointLightProps {
  pos1: number[];
  pos2: number[];
}

const LampsLight = ({ pos1, pos2, ...props }: LampsLightProps) => {
  return (
    <pointLight
      position={[
        (pos1[0] + pos2[0]) / 2,
        (pos1[1] + pos2[1]) / 2,
        (pos1[2] + pos2[2]) / 2,
      ]}
      {...props}
      castShadow
      shadow-onUpdate={false}
      shadow-mapSize-width={512}
      shadow-mapSize-height={512}
      shadow-camera-near={0.1}
      shadow-camera-far={25}
    />
  );
};

export default LampsLight;
