import { ReactNode, forwardRef } from "react";
import { Text3D } from "@react-three/drei";
import { Color, MeshProps } from "@react-three/fiber";
import { Mesh } from "three";

interface TextMeshProps extends MeshProps {
  color?: Color;
  children: ReactNode;
  size?: number;
  height?: number;
  materialComponent?: ReactNode;
}

const FONT_URL = "/fonts/roboto.json";

const TextMesh = forwardRef<Mesh, TextMeshProps>(
  (
    {
      color = "#fafafa",
      children,
      size = 3,
      height = 1,
      materialComponent,
      ...props
    },
    meshRef
  ) => {
    return (
      <mesh ref={meshRef} {...props}>
        <Text3D font={FONT_URL} size={size} height={height}>
          {children}
        </Text3D>
        {materialComponent || (
          <meshBasicMaterial attach="material" color={color} />
        )}
      </mesh>
    );
  }
);

export default TextMesh;
