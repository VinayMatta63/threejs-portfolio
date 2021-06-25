import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { DoubleSide, MeshBasicMaterial, sRGBEncoding } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Body(props) {
  const [bakedMap] = useTexture(["/textures/basic.jpg"]);
  bakedMap.flipY = false;
  bakedMap.encoding = sRGBEncoding;
  const { scene } = useLoader(GLTFLoader, "/models/portal2.glb");

  const material = new MeshBasicMaterial({ map: bakedMap });
  const lampMaterial = new MeshBasicMaterial({ color: 0xffffe5 });
  const portalMaterial = new MeshBasicMaterial({
    color: 0xc34cff,
    side: DoubleSide,
  });
  scene.children.map((child) => {
    if (child.name === "PoleLightA" || child.name === "PoleLightB") {
      child.material = lampMaterial;
    } else if (child.name === "PortalLight") {
      child.material = portalMaterial;
    } else {
      child.material = material;
    }
  });

  return <primitive object={scene} />;
}

export default Body;
