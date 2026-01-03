import { memo } from "react";
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
      <Text scale={0.35} position={[0.6, 5.82, -0.5]}>
        Skills
      </Text>
      <Text scale={0.35} position={[0.9, 5.08, -0.5]}>
        Projects
      </Text>
      <Text scale={0.35} position={[0.5, 4.05, -0.5]}>
        About
      </Text>
      <Text scale={0.3} position={[0.3, 2.95, -0.5]}>
        Experience
      </Text>
      <Text scale={0.3} position={[0.3, 2.2, -0.5]}>
        Contact
      </Text>
    </group>
  );
};

export default memo(PortalSign);
