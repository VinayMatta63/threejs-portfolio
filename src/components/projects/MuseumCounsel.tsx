import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const MuseumCounsel = () => {
  const [mcModel, mcLeft, mcRight] = useGLTF(
    ["/models/mc.glb", "/models/mc1.glb", "/models/mc3.glb"],
    true
  );

  return (
    <Project
      position={[-60, 0, -140]}
      title="Museum Counsel"
      rotation={[0, -Math.PI / 2, 0]}
      model={mcModel}
      modelLeft={mcLeft}
      modelRight={mcRight}
      scale={1}
    />
  );
};

export default MuseumCounsel;
