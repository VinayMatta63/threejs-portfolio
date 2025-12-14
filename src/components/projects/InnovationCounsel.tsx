import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const InnovationCounsel = () => {
  const [iicModel, eventsModel, loginModel] = useGLTF(
    ["/models/iic.glb", "/models/iicEvents.glb", "/models/iicLogin.glb"],
    true
  );

  return (
    <Project
      position={[-60, 0, -40]}
      title="IIC DCRUST"
      rotation={[0, Math.PI, 0]}
      model={iicModel}
      modelRight={eventsModel}
      modelLeft={loginModel}
    />
  );
};

useGLTF.preload([
  "/models/iic.glb",
  "/models/iicEvents.glb",
  "/models/iicLogin.glb",
]);

export default InnovationCounsel;
