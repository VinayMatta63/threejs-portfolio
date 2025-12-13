import { useGLTF } from "@react-three/drei";
import SignText from "../base/SignText";

const SIGN_SCALE = 1.6;

const PortalSign = () => {
  const largeSignModel = useGLTF("/models/largeSign.glb", true);

  return (
    <group
      position={[-10, 0.01, 15]}
      scale={SIGN_SCALE}
      rotation={[0, Math.PI, 0]}
    >
      <primitive object={largeSignModel.scene} />
      <SignText
        scale={SIGN_SCALE / 5.5}
        position={[0.85, 5.05, -0.38]}
        text="Skills"
      />
      <SignText
        scale={SIGN_SCALE / 5.5}
        position={[1, 4.38, -0.38]}
        text="Projects"
      />
      <SignText
        scale={SIGN_SCALE / 5.35}
        position={[0.55, 3.45, -0.38]}
        text="About"
      />
      <SignText
        scale={SIGN_SCALE / 6.8}
        position={[0.45, 2.5, -0.38]}
        text="Experience"
      />
      <SignText
        scale={SIGN_SCALE / 6.8}
        position={[0.45, 1.8, -0.38]}
        text="Contact Me"
      />
    </group>
  );
};

export default PortalSign;

useGLTF.preload("/models/largeSign.glb");
