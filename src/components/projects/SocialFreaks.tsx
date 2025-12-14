import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const SocialFreaks = () => {
  const [sfModel, mfModel, fsModel] = useGLTF(
    ["/models/sf.glb", "/models/mf.glb", "/models/fs.glb"],
    true
  );

  return (
    <Project
      position={[-120, 0, -10]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Social Freaks"
      model={sfModel}
      modelLeft={mfModel}
      modelRight={fsModel}
      scale={3}
    />
  );
};

export default SocialFreaks;
