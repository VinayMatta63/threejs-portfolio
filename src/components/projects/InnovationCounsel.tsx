import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const InnovationCounsel = () => {
  const [iicModel, eventsModel, loginModel] = useGLTF(
    ["/models/iic.glb", "/models/iicEvents.glb", "/models/iicLogin.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={ICScreen}
      position={[-60, 0, -40]}
      title="IIC DCRUST"
      rotation={[0, -Math.PI / 2, 0]}
      model={iicModel}
      modelRight={eventsModel}
      modelLeft={loginModel}
    />
  );
};

export default InnovationCounsel;

const ICScreen: React.FC = () => (
  <PlateScreen
    title="IIC DCRUST Web App"
    description="The Web Application of Institute Innovation Cell, an MIC envisioned
      society for helping budding innovative minds. Worked on this project as
      the team leader of front-end team.It uses React.js, Styled-components and
      Material-UI for styling as main front-end components."
    visitLink="https://iicdcrustm.com/home/"
    codeLink="https://github.com/VinayMatta63/web"
  />
);
