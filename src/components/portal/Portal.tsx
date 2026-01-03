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
  UnsignedByteType,
} from "three";
import { vertexShader, fragmentShader } from "../../shaders/portal/shaders";
import { CollisionPayload } from "../../services/CollisionEmitter";
import { resetKeyboardEvents } from "../../helpers/resetKeyboardEvents";
import { useDispose } from "../../hooks/useDispose";
import CollisionPlate from "../../base/CollisionPlate";
import PortalSign from "./PortalSign";
import ContactSign from "./ContactSign";
import Text from "../../base/Text";
import {
  EffectComposer,
  Select,
  Selection,
  SelectiveBloom,
} from "@react-three/postprocessing";
import useDefaults from "../../hooks/useDefaults";

const Portal = () => {
  const portal = useGLTF("/models/portal.glb");
  const bakedMap = useTexture("/textures/baked.jpg", (texture) => {
    texture.flipY = false;
    texture.colorSpace = SRGBColorSpace;
  });

  const {
    effects: {
      enabled,
      bloomIntensity,
      bloomThreshold,
      bloomSmoothing,
      bloomHeight,
      mipmapBlur,
      radius,
    },
  } = useDefaults();

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

  // Dispose materials on unmount
  useDispose([material, lampMaterial, portalMaterial]);

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
    <Selection>
      <group>
        <Text
          type="3d"
          rotation={[0, 0, 0]}
          position={[-8, 15, -4]}
          textOptions={{
            size: 3,
            height: 1,
            font: "/fonts/Roboto_Regular.json",
          }}
        >
          Contact
        </Text>
        <Select>
          <primitive object={portal.scene} />
        </Select>
        <pointLight position={[0, 15, 5]} args={["#fafafa", 0.75, 30, 0.1]} />
        <PortalSign />
        <ContactSign />
        <CollisionPlate
          name="contact"
          position={[0, 0.5, -8]}
          onCollision={handleCollision}
        />
      </group>
      <EffectComposer
        enabled={enabled}
        autoClear={false}
        multisampling={0}
        frameBufferType={UnsignedByteType}
      >
        <SelectiveBloom
          intensity={bloomIntensity}
          luminanceThreshold={bloomThreshold}
          luminanceSmoothing={bloomSmoothing}
          height={bloomHeight}
          mipmapBlur={mipmapBlur}
          radius={radius}
        />
      </EffectComposer>
    </Selection>
  );
};

export default memo(Portal);
