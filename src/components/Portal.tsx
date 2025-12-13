import { memo, useEffect, useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  ShaderMaterial,
  SRGBColorSpace,
  Texture,
} from "three";
import { vertexShader, fragmentShader } from "../helpers/shaders";
import { CollisionPayload } from "../services/CollisionEmitter";
import { resetKeyboardEvents } from "../utils/resetKeyboardEvents";
import CollisionPlate from "./CollisionPlate";

const Portal = () => {
  const portal = useGLTF("/models/portal.glb");
  const bakedMap = useTexture("/textures/baked.jpg", (texture) => {
    texture.flipY = false;
    texture.colorSpace = SRGBColorSpace;
  });

  const { material, lampMaterial, portalMaterial } = useMemo(() => {
    const mat = new MeshBasicMaterial({ map: bakedMap as Texture });
    const lampMat = new MeshBasicMaterial({ color: 0xffffe5 });
    const portalMat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new Color(0xffffff) },
        uColorEnd: { value: new Color(0xc34cff) },
      },
      vertexShader,
      fragmentShader,
      side: DoubleSide,
    });
    return { material: mat, lampMaterial: lampMat, portalMaterial: portalMat };
  }, [bakedMap]);

  const portalMaterialRef = useRef(portalMaterial);

  useEffect(() => {
    portalMaterialRef.current = portalMaterial;
    portal.scene.children
      .filter((child) => child instanceof Mesh)
      .forEach((child) => {
        if (child.name === "PoleLightA" || child.name === "PoleLightB") {
          child.material = lampMaterial;
        } else if (child.name === "PortalLight") {
          child.material = portalMaterial;
        } else {
          child.material = material;
          child.castShadow = true;
        }
      });
  }, [portal.scene, material, lampMaterial, portalMaterial]);

  useFrame(({ clock }) => {
    portalMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  const handleCollision = (payload: CollisionPayload) => {
    if (payload.type === "enter") {
      window.open("https://vinay-matta.web.app/contact", "contact");
    } else {
      resetKeyboardEvents();
    }
  };

  return (
    <group>
      <primitive object={portal.scene} />
      <CollisionPlate
        name="contact"
        position={[0, 0.5, -8]}
        onCollision={handleCollision}
      />
    </group>
  );
};

export default memo(Portal);
