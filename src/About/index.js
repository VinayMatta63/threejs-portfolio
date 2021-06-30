import React from "react";

const About = ({ font }) => {
  const textOptions = {
    font,
    size: 10,
    height: 4,
  };

  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[20, 0.5, 120]}>
        <textBufferGeometry attach="geometry" args={["About", textOptions]} />
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 80]}>
        <textBufferGeometry
          attach="geometry"
          args={["Education", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 74]}
        >
          <textBufferGeometry
            attach="geometry"
            args={["DCRUST", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 71]}>
          <textBufferGeometry
            attach="geometry"
            args={[
              "B.Tech ECE \n Aug 2018-2022",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 62]}
        >
          <textBufferGeometry
            attach="geometry"
            args={[
              "R.S. Public Sr. Sec. School",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 59]}>
          <textBufferGeometry
            attach="geometry"
            args={["Karnal, Haryana", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 56]}>
          <textBufferGeometry
            attach="geometry"
            args={["Class X and XII ", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>

      {/* <Me /> */}
    </>
  );
};

export default About;
