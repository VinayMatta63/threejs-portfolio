import React from "react";
import SignMesh from "./SignMesh";
import { Text3D, useGLTF } from "@react-three/drei";

const Signs: React.FC = () => {
  const font = "/fonts/Roboto_Regular.json";
  const model = useGLTF("/models/sign.glb");
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
        textPosition={[3.5, 4.5, 15 + 0.38]}
        scale={signScale}
        text="Go Through the Portal"
        textScale={signScale / 9.5}
        rotation={[0, Math.PI, 0]}
        textRotation={[0, 0, 0]}
        font={font}
      />
      <SignMesh
        model={model}
        position={[10, 0, 15]}
        textPosition={[5 + 3.5, 4.5, 15 + 0.38]}
        scale={signScale}
        text="Press F to increase height and"
        textScale={signScale / 9.5}
        rotation={[0, Math.PI, 0]}
        textRotation={[0, 0, 0]}
        font={font}
      />
      <SignMesh
        model={model}
        position={[10, 0, 15]}
        textPosition={[5 + 3.5, 4.5 - 0.5, 15 + 0.38]}
        scale={signScale}
        text="take a better look at everything."
        textScale={signScale / 10}
        rotation={[0, Math.PI, 0]}
        textRotation={[0, 0, 0]}
        font={font}
      />
      <mesh
        position={[4, 4, 15 + 0.35]}
        scale={signScale / 8}
        rotation={[0, 0, 0]}
      >
        <Text3D font={font} size={1} height={0.1}>
          to contact me...
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[-20, 20, -15]}>
        <Text3D {...textOptions}>Contact</Text3D>
        <meshBasicMaterial attach="material" color="#fff" />
      </mesh>
    </>
  );
};

export default Signs;
