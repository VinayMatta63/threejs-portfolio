import { Text3D } from "@react-three/drei";
import React from "react";

const Links = ({ font }) => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle = [Math.PI / 2 - Math.PI / 8, Math.PI, 0];
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[x + 2, 0.01, 90]}>
        <Text3D font={font} size={3} height={1}>
          Links
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh rotation={text_angle} position={[x, 0.1, z]}>
          <Text3D font={font} size={1} height={0.1}>
            Hackerrank
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub]}>
          <Text3D font={font} size={1} height={0.1}>
            Codechef
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 2]}>
          <Text3D font={font} size={1} height={0.1}>
            Leetcode
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 3]}>
          <Text3D font={font} size={1} height={0.1}>
            Linkedin
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 4]}>
          <Text3D font={font} size={1} height={0.1}>
            Github
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Links;
