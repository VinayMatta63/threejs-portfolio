import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const MuseumCounsel = () => {
  const [mcModel, mcLeft, mcRight] = useGLTF(
    ["/models/mc.glb", "/models/mc1.glb", "/models/mc3.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={MCScreen}
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

const MCScreen: React.FC = () => (
  <PlateScreen
    title="Museum Counsel Web App"
    description="A Web Application which gives its user the information about museums in India including reviews and location. It uses Basic web technologies like HTML, CSS, Bootstrap, JS, ExpressJS, NodeJS, MongoDB and Ejs."
    visitLink="https://museum-counsel.herokuapp.com/"
    codeLink="https://github.com/VinayMatta63/Museum-Counsel"
  />
);
