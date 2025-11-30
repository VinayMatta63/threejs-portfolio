import { useTexture } from "@react-three/drei";
import { RepeatWrapping, SRGBColorSpace } from "three";

interface FloorProps {
  height: number;
  width: number;
}

const Floor: React.FC<FloorProps> = ({ height = 400, width = 400 }) => {
  const floorTexture = useTexture("/assets/grass.jpg", (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(height / 2, width / 2);
    texture.colorSpace = SRGBColorSpace;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[height, width]} />
      <meshStandardMaterial map={floorTexture} />
    </mesh>
  );
};

export default Floor;

useTexture.preload("/assets/grass.jpg");
