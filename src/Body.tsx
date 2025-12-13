import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import About from "./About/index";

import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import Trees from "./Trees";
import PathMesh from "./Path/index";
import Skills from "./Skills";

import Boards from "./Boards";
import Signs from "./SignBoards/Signs";
import Portal from "./components/portal/Portal";
import Lamp from "./components/base/Lamp";

function Body(): React.ReactElement {
  const textures = useTexture([
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
  ]);

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

  const skills = textures.slice(2, 14);

  return (
    <>
      <Portal />
      <PathMesh path={path.nodes} />
      <Lamp position={[-51, 0, 80]} />
      <Lamp position={[139, 0, 80]} />
      <Lamp position={[49, 0, -57]} />
      <Lamp position={[-141, 0, -57]} />
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
      <Signs model={signModel} font={font as unknown as string} />
    </>
  );
}

export default Body;
