import React from "react";
import SignMesh from "./SignMesh";
import SignText from "./SignText";
import TextMesh from "../meshs/TextMesh";

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
      <TextMesh
        position={[4, 4, 15 + 0.35]}
        scale={signScale / 8}
        size={1}
        height={0.1}
      >
        to contact me...
      </TextMesh>
      <TextMesh position={[-20, 20, -15]} size={8} height={3}>
        Contact
      </TextMesh>
    </>
  );
};

export default Signs;
