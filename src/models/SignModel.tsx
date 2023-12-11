import TextMesh from "../meshs/TextMesh";
import { Euler, Vector3 } from "@react-three/fiber";

interface SignMeshProps {
  model: any;
  position: Vector3;
  scale: Vector3;
  text: string;
  textScale: Vector3;
  rotation: Euler;
  textRotation: Euler;
  textPosition: Vector3;
}

const SignMesh = ({
  model,
  position,
  scale,
  text,
  textScale,
  rotation,
  textRotation,
  textPosition,
}: SignMeshProps) => {
  const geometry = model.nodes.Cube.geometry;
  const material = model.nodes.Cube.material;
  return (
    <group>
      <mesh
        geometry={geometry}
        material={material}
        position={position}
        scale={scale}
        rotation={rotation}
      />
      <TextMesh
        position={textPosition}
        scale={textScale}
        rotation={textRotation}
        size={1}
        height={0.1}
      >
        {text}
      </TextMesh>
    </group>
  );
};

export default SignMesh;
