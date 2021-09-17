import React from "react";
import SignMesh from "./SignMesh";
import SignText from "./SignText";

const Signs = ({ model, font, largeSignModel }) => {
  const skillsPos = { x: -60, y: 0, z: 30 };
  const projPos = { x: -80, y: 0, z: 15 };
  const aboutPos = { x: -40, y: 0, z: 35 };
  const signScale = 1.6;
  const textOptions = {
    font,
    size: 8,
    height: 3,
  };

  return (
    <>
      <group
        position={[-10, 0.01, 15]}
        scale={signScale}
        rotation={[0, Math.PI, 0]}
      >
        <primitive object={largeSignModel.scene} />
        <SignText
          scale={signScale / 5.5}
          position={[0.85, 5.05, -0.38]}
          text="Skills"
          font={font}
        />
        <SignText
          scale={signScale / 5.5}
          position={[1, 4.38, -0.38]}
          text="Projects"
          font={font}
        />
        <SignText
          scale={signScale / 5.35}
          position={[0.55, 3.45, -0.38]}
          text="About"
          font={font}
        />
        <SignText
          scale={signScale / 6.8}
          position={[0.45, 2.5, -0.38]}
          text="Experience"
          font={font}
        />
        <SignText
          scale={signScale / 6.8}
          position={[0.45, 1.8, -0.38]}
          text="Contact Me"
          font={font}
        />
      </group>
      <SignMesh
        model={model}
        position={[skillsPos.x, skillsPos.y + 0.01, skillsPos.z]}
        textPosition={[skillsPos.x + 0.35, skillsPos.y + 4, skillsPos.z + 1.1]}
        scale={signScale}
        text="Skills"
        textScale={signScale / 2.2}
        rotation={[0, -Math.PI / 2, 0]}
        textRotation={[0, Math.PI / 2, 0]}
        font={font}
      />
      <SignMesh
        model={model}
        position={[aboutPos.x, aboutPos.y + 0.01, aboutPos.z]}
        textPosition={[aboutPos.x + 0.35, aboutPos.y + 4.1, aboutPos.z + 1.2]}
        scale={signScale}
        text="About"
        textScale={signScale / 2.5}
        rotation={[0, -Math.PI / 2, 0]}
        textRotation={[0, Math.PI / 2, 0]}
        font={font}
      />
      <SignMesh
        model={model}
        position={[projPos.x, projPos.y + 0.01, projPos.z]}
        textPosition={[projPos.x + 0.35, projPos.y + 4.1, projPos.z + 1.2]}
        scale={signScale}
        text="Projects"
        textScale={signScale / 3}
        rotation={[0, -Math.PI / 2, 0]}
        textRotation={[0, Math.PI / 2, 0]}
        font={font}
      />
      <SignMesh
        model={model}
        position={[5, 0, 15]}
        textPosition={[3.5, 4.5, 15 + 0.35]}
        scale={signScale}
        text="Go Through the Portal"
        textScale={signScale / 8}
        rotation={[0, Math.PI, 0]}
        textRotation={[0, 0, 0]}
        font={font}
      />
      <mesh
        position={[4, 4, 15 + 0.35]}
        scale={signScale / 8}
        rotation={[0, 0, 0]}
      >
        <textBufferGeometry
          attach="geometry"
          args={["to contact me...", { font, size: 1, height: 0.1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[-20, 20, -15]}>
        <textBufferGeometry attach="geometry" args={["Contact", textOptions]} />
        <meshBasicMaterial attach="material" color="#fff" metalness={1} />
      </mesh>
    </>
  );
};

export default Signs;
