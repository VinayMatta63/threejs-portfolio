import React, { memo, useMemo } from "react";
import { MeshBasicMaterial, SRGBColorSpace, Mesh } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { useDispose } from "../../hooks/useDispose";

const Lamp: React.FC<ThreeElements["group"]> = ({ position, ...props }) => {
  const lamp = useGLTF("/models/lamps.glb", true);
  const bakedLamp = useTexture("/textures/lamps.jpg", (texture) => {
    texture.flipY = false;
    texture.colorSpace = SRGBColorSpace;
  });

  const { bakedLampMaterial, lampMaterial } = useMemo(() => {
    const bakedLampMaterial = new MeshBasicMaterial({ map: bakedLamp });
    const lampMaterial = new MeshBasicMaterial({ color: 0xffffe5 });

    return { bakedLampMaterial, lampMaterial };
  }, [bakedLamp]);

  // Dispose materials on unmount
  useDispose([bakedLampMaterial, lampMaterial]);

  lamp.scene.children
    .filter((child) => child instanceof Mesh)
    .forEach((child) => {
      if (child.name === "PoleLightA" || child.name === "PoleLightB") {
        child.material = lampMaterial;
      } else {
        child.material = bakedLampMaterial;
        child.castShadow = true;
      }
    });

  return (
    <group position={position} {...props}>
      <primitive object={lamp.scene.clone(true)} />
      <pointLight
        castShadow
        args={["#fafafa", 0.5, 30, 1]}
        position={[0, 5, 0]}
        shadow-onUpdate={false}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
      />
    </group>
  );
};

export default memo(Lamp);
