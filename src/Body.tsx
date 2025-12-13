import { useLoader } from "@react-three/fiber";

import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import Trees from "./Trees";
import PathMesh from "./Path/index";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";

import Boards from "./Boards";
import Signs from "./SignBoards/Signs";
import Portal from "./components/portal/Portal";
import Lamp from "./components/base/Lamp";

function Body(): React.ReactElement {
  const [
    tree,
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
  ] = useLoader(GLTFLoader, [
    "/models/tree.glb",
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
  ]);

  const font = "/fonts/Roboto_Regular.json";

  return (
    <>
      <Portal />
      <Lamp position={[-51, 0, 80]} />
      <Lamp position={[139, 0, 80]} />
      <Lamp position={[49, 0, -57]} />
      <Lamp position={[-141, 0, -57]} />
      <Skills />
      <About />
      <PathMesh path={path.nodes} />
      <Trees tree={tree} />
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
      <Signs model={signModel} font={font as unknown as string} />
    </>
  );
}

export default Body;
