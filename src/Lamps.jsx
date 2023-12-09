import React from "react";
import { MeshBasicMaterial, sRGBEncoding } from "three";

const Lamps = ({ position, bakedLamp, scene }) => {
  bakedLamp.flipY = false;
  bakedLamp.encoding = sRGBEncoding;
  const bakedLampMaterial = new MeshBasicMaterial({ map: bakedLamp });
  const lampMaterial = new MeshBasicMaterial({ color: 0xffffe5 });
  scene.children.map((child) => {
    if (child.name === "PoleLightA" || child.name === "PoleLightB") {
      child.material = lampMaterial;
    } else {
      child.material = bakedLampMaterial;
    }
    return (
      (child.name === "Cube003" ||
        child.name === "Cube005" ||
        child.name === "Cube006" ||
        child.name === "Cube009") &&
      (child.castShadow = true)
    );
  });

  return <primitive object={scene.clone(true)} position={position} />;
};

export default Lamps;
