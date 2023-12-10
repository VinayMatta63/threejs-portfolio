import { Text3D } from "@react-three/drei";
import React from "react";

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <Text3D font={font} size={3} height={1}>
          Education
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          <Text3D font={font} size={1} height={0.1}>
            DCRUST
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[36, 0.1, 81]}>
          <Text3D font={font} size={1} height={0.1}>
            B.Tech ECE
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 78]}>
          <Text3D font={font} size={1} height={0.1}>
            Aug 2018-2022
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 72]}
        >
          <Text3D font={font} size={1} height={0.1}>
            R.S. Public Sr. Sec. School
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 69]}>
          <Text3D font={font} size={1} height={0.1}>
            Karnal, Haryana
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 66]}>
          <Text3D font={font} size={1} height={0.1}>
            Class X and XII
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
