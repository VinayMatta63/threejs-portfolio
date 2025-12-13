import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import Roboto from "./Skills/fonts/Roboto_Regular.json";
import About from "./About/index";

import React from "react";
import { Group, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Lamps from "./Lamps";
import Trees from "./Trees";
import PathMesh from "./Path/index";
import Skills from "./Skills";

import Boards from "./Boards";
import Signs from "./SignBoards/Signs";
import Portal from "./components/Portal";

interface GLTFModel {
  scene: Group;
  nodes: Record<string, Mesh>;
}

function Body(): React.ReactElement {
  const textures = useTexture([
    "/textures/baked.jpg",
    "/textures/arrow.png",
    "/assets/react.png",
    "/assets/node.png",
    "/assets/mongo.png",
    "/assets/python.png",
    "/assets/sql.png",
    "/assets/cpp.png",
    "/assets/html.png",
    "/assets/css.png",
    "/assets/three.png",
    "/assets/bootstrap.png",
    "/assets/next.png",
    "/assets/flutter.png",
    "/textures/lamps.jpg",
  ]);
  const [
    tree,
    lamp,
    path,
    chatModel,
    sfModel,
    mfModel,
    fsModel,
    iicModel,
    eventsModel,
    loginModel,
    mcModel,
    mcLeft,
    mcRight,
    tttModel,
    tttLeft,
    signModel,
    largeSignModel,
  ] = useLoader(GLTFLoader, [
    "/models/tree.glb",
    "/models/lamps.glb",
    "/models/tile.glb",
    "/models/chat.glb",
    "/models/sf.glb",
    "/models/mf.glb",
    "/models/fs.glb",
    "/models/iic.glb",
    "/models/iicEvents.glb",
    "/models/iicLogin.glb",
    "/models/mc.glb",
    "/models/mc1.glb",
    "/models/mc3.glb",
    "/models/ttt.glb",
    "/models/ttt1.glb",
    "/models/sign.glb",
    "/models/largeSign.glb",
    "/models/squid/scene.gltf",
  ]) as unknown as [
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel,
    GLTFModel
  ];

  const font = Roboto;

  const skills = textures.slice(2, 14);
  const lamps = textures[14];

  return (
    <>
      <Portal />
      <PathMesh path={path.nodes} />
      <Lamps position={[-51, 0, 80]} bakedLamp={lamps} scene={lamp.scene} />
      <Lamps position={[139, 0, 80]} bakedLamp={lamps} scene={lamp.scene} />
      <Lamps position={[49, 0, -57]} bakedLamp={lamps} scene={lamp.scene} />
      <Lamps position={[-141, 0, -57]} bakedLamp={lamps} scene={lamp.scene} />
      <Trees tree={tree} />
      <Skills icons={skills} font={font} />
      <Boards
        font={font}
        sfModel={sfModel}
        mfModel={mfModel}
        fsModel={fsModel}
        chatModel={chatModel}
        iicModel={iicModel}
        eventsModel={eventsModel}
        loginModel={loginModel}
        mcModel={mcModel}
        mcLeft={mcLeft}
        mcRight={mcRight}
        tttModel={tttModel}
        tttLeft={tttLeft}
      />
      <About font={font} />
      <Signs
        largeSignModel={largeSignModel}
        model={signModel}
        font={font as unknown as string}
      />
    </>
  );
}

export default Body;
