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

const vertexShader = `
  varying vec2 vUv;

    void main() {
      vec4 modelPosition = modelMatrix * vec4(position,1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;

      gl_Position = projectionPosition;
      vUv=uv;
    }
  `;
const fragmentShader = `
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
varying vec2 vUv;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}
  void main() {
    vec2 uv2= vUv + cnoise(vec3(vUv*5.0,uTime*0.1));

    float strength=cnoise(vec3(uv2 * 5.0,uTime*0.2));

    float glow=distance(vUv,vec2(0.5))*5.0-1.4;
    strength+=glow;

    strength+= step(-0.2,strength)*0.8;
    // strength = clamp(strength,0.0,1.0);
    vec3 color = mix(uColorStart,uColorEnd,strength);
    gl_FragColor = vec4(color,1.0);
  }
`;

function Body() {
  // { bakedMap, skills, sf, iic, chat, museum, scene }
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
    "/textures/Projects/sf1.JPG",
    "/textures/Projects/sf2.JPG",
    "/textures/Projects/sf3.JPG",
    "/textures/Projects/iic1.JPG",
    "/textures/Projects/chat1.JPG",
    "/textures/Projects/mc1.JPG",
    "/textures/Projects/mc2.JPG",
    "/textures/lamps.jpg",
  ]);
  const [
    portal,
    treesTop,
    treesBottom,
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
  ] = useLoader(GLTFLoader, [
    "/models/portal.glb",
    "/models/treeTops.glb",
    "/models/treeBase.glb",
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
  ]);
  const font = new FontLoader().parse(Roboto);

  const bakedMap = textures[0];
  const arrow = textures[1];
  const skills = textures.slice(2, 14);
  const sf = textures.slice(14, 17);
  const iic = textures.slice(17, 18);
  const chat = textures.slice(18, 19);
  const museum = textures.slice(19, 21);
  const lamps = textures[21];
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
      <Trees treeTop={treesTop} treeBottom={treesBottom} />
      <Skills icons={skills} font={font} />
      <Boards
        sf={sf}
        chat={chat}
        iic={iic}
        museum={museum}
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
      />
      <Fireflies pointCount={30} />
      <CameraControls icon={arrow} />
      <About font={font} />
      <Floor />
    </>
  );
}

export default Body;
