import React from "react";

const Links = ({ font }) => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle = [Math.PI / 2 - Math.PI / 8, Math.PI, 0];
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[x + 2, 0.01, 90]}>
        <textBufferGeometry
          attach="geometry"
          args={["Links", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh rotation={text_angle} position={[x, 0.1, z]}>
          <textBufferGeometry
            attach="geometry"
            args={["Hackerrank", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub]}>
          <textBufferGeometry
            attach="geometry"
            args={["Codechef", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 2]}>
          <textBufferGeometry
            attach="geometry"
            args={["Leetcode", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 3]}>
          <textBufferGeometry
            attach="geometry"
            args={["LinkedIn", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 4]}>
          <textBufferGeometry
            attach="geometry"
            args={["Github", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Links;
