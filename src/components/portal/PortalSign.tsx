import { useGLTF } from "@react-three/drei";
import Text from "../../base/Text";

const SIGN_SCALE = 1.6;

const PortalSign = () => {
  const largeSignModel = useGLTF("/models/largeSign.glb", true);

  return (
    <group
      position={[-10, 0.01, 15]}
      scale={SIGN_SCALE}
      rotation={[0, Math.PI, 0]}
    >
      <primitive scale={1.1} object={largeSignModel.scene} />
      <Text scale={SIGN_SCALE / 5.5} position={[0.8, 5.65, -0.38]}>
        Skills
      </Text>
      <Text scale={SIGN_SCALE / 5.5} position={[1, 4.85, -0.38]}>
        Projects
      </Text>
      <Text scale={SIGN_SCALE / 5.35} position={[0.55, 3.85, -0.38]}>
        About
      </Text>
      <Text scale={SIGN_SCALE / 6.8} position={[0.45, 2.8, -0.38]}>
        Experience
      </Text>
      <Text scale={SIGN_SCALE / 6.8} position={[0.45, 2, -0.38]}>
        Contact Me
      </Text>
    </group>
  );
};

export default PortalSign;
