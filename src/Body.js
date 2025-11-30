import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import Roboto from "./Skills/fonts/Roboto_Regular.json";
import About from "./About/index";
import Floor from "./Setup/Floor";
import { Color, DoubleSide, MeshBasicMaterial, ShaderMaterial, SRGBColorSpace, Mesh, } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Lamps from "./Lamps";
import Trees from "./Trees";
import PathMesh from "./Path/index";
import Skills from "./Skills";
import CameraControls from "./Setup/CameraControls";
import Boards from "./Boards";
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
    const [portal, tree, lamp, path, chatModel, sfModel, mfModel, fsModel, iicModel, eventsModel, loginModel, mcModel, mcLeft, mcRight, tttModel, tttLeft, signModel, largeSignModel, squidDoll,] = useLoader(GLTFLoader, [
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
    const font = Roboto;
    const bakedMap = textures[0];
    const arrow = textures[1];
    const skills = textures.slice(2, 14);
    const lamps = textures[14];
    bakedMap.flipY = false;
    bakedMap.colorSpace = SRGBColorSpace;
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
    portal.scene.children.forEach((child) => {
        if (child instanceof Mesh) {
            if (child.name === "PoleLightA" || child.name === "PoleLightB") {
                child.material = lampMaterial;
            }
            else if (child.name === "PortalLight") {
                child.material = portalMaterial;
            }
            else {
                child.material = material;
                child.castShadow = true;
            }
        }
    });
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        portalMaterial.uniforms.uTime.value = elapsedTime;
    });
    return (_jsxs(_Fragment, { children: [_jsx("primitive", { object: portal.scene }), _jsx(PathMesh, { path: path.nodes }), _jsx(Lamps, { position: [-51, 0, 80], bakedLamp: lamps, scene: lamp.scene }), _jsx(Lamps, { position: [139, 0, 80], bakedLamp: lamps, scene: lamp.scene }), _jsx(Lamps, { position: [49, 0, -57], bakedLamp: lamps, scene: lamp.scene }), _jsx(Lamps, { position: [-141, 0, -57], bakedLamp: lamps, scene: lamp.scene }), _jsx(Trees, { tree: tree }), _jsx(Skills, { icons: skills, font: font }), _jsx(Boards, { font: font, sfModel: sfModel, mfModel: mfModel, fsModel: fsModel, chatModel: chatModel, iicModel: iicModel, eventsModel: eventsModel, loginModel: loginModel, mcModel: mcModel, mcLeft: mcLeft, mcRight: mcRight, tttModel: tttModel, tttLeft: tttLeft }), _jsx(CameraControls, { icon: arrow, squidDoll: squidDoll }), _jsx(About, { font: font }), _jsx(Floor, {}), _jsx(Signs, { largeSignModel: largeSignModel, model: signModel, font: font })] }));
}
export default Body;
