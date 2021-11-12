import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import Roboto from "./Skills/fonts/Roboto_Regular";
import About from "./About/index";
import Floor from "./Setup/Floor";

import React from "react";
import {
  Color,
  DoubleSide,
  FontLoader,
  MeshBasicMaterial,
  ShaderMaterial,
  sRGBEncoding,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lamps from "./Lamps";
import Trees from "./Trees";
import PathMesh from "./Path/index";
import Skills from "./Skills";
import CameraControls from "./Setup/CameraControls";

import Boards from "./Boards";
import Fireflies from "./Effects/Fireflies";
import Signs from "./SignBoards/Signs";
import { fragment, vertex } from "./helpers/shaders";

const vertexShader = vertex;
const fragmentShader = fragment;

function Body() {
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
    portal,
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
    squidDoll,
  ] = useLoader(GLTFLoader, [
    "/models/portal.glb",
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
  ]);
  const font = new FontLoader().parse(Roboto);

  const bakedMap = textures[0];
  const arrow = textures[1];
  const skills = textures.slice(2, 14);
  const lamps = textures[14];
  bakedMap.flipY = false;
  bakedMap.encoding = sRGBEncoding;

  const material = new MeshBasicMaterial({ map: bakedMap });
  const lampMaterial = new MeshBasicMaterial({ color: 0xffffe5 });
  const portalMaterial = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorStart: { value: new Color(0xffffff) },
      uColorEnd: { value: new Color(0xc34cff) },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: DoubleSide,
  });

  portal.scene.children.map((child) => {
    if (child.name === "PoleLightA" || child.name === "PoleLightB") {
      child.material = lampMaterial;
    } else if (child.name === "PortalLight") {
      child.material = portalMaterial;
    } else {
      child.material = material;
      child.castShadow = true;
    }
    return 0;
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    portalMaterial.uniforms.uTime.value = elapsedTime;
  });
  return (
    <>
      <primitive object={portal.scene} />
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
      <Fireflies pointCount={30} />
      <CameraControls icon={arrow} squidDoll={squidDoll} />
      <About font={font} />
      <Floor />
      <Signs largeSignModel={largeSignModel} model={signModel} font={font} />
    </>
  );
}

export default Body;
