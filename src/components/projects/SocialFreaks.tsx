import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const SocialFreaks = () => {
  const [sfModel, mfModel, fsModel] = useGLTF(
    ["/models/sf.glb", "/models/mf.glb", "/models/fs.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={SFScreen}
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

const SFScreen: React.FC = () => (
  <PlateScreen
    title="Social Freaks"
    description=" An all-in-one next-js social media, youtube trailer playing, shopping and
      chatting platform using next-auth, Redux, Styled-components, firebase
      firestore, TMDB, stripe payments, pwa and more."
    visitLink="https://social-freaks.vercel.app/"
    codeLink="https://github.com/VinayMatta63/Social-Freaks"
  />
);
