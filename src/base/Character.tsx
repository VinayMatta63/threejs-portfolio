import { useEffect, useRef } from "react";
import {
  AnimationAction,
  BufferGeometry,
  Color,
  Group,
  Material,
  Object3D,
  SkinnedMesh,
} from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = Object3D & {
  geometry: BufferGeometry;
  material: Material;
  skeleton: SkinnedMesh["skeleton"];
};

type EmissiveMaterial = Material & {
  color?: Color;
  emissive?: { copy: (color: Color) => void };
  emissiveIntensity?: number;
};

export type CharacterAnimationType = "Idle" | "Walk" | "Run";

type CharacterProps = ThreeElements["group"] & {
  animation?: CharacterAnimationType;
};

const Character = ({
  animation = "Idle",
  rotation,
  ...props
}: CharacterProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/player.glb");
  const { actions } = useAnimations(animations, group);

  // Enhance emissive properties for all materials to avoid adding lighting.
  useEffect(() => {
    Object.values(materials).forEach((material: EmissiveMaterial) => {
      if (material.emissive) {
        material.emissive.copy(material.color!);
        material.emissiveIntensity = 0.45;
      }
    });
  }, [materials]);

  useEffect(() => {
    if (!actions) return;

    const action = actions[animation];

    // Find the currently playing action
    const currentAction = Object.values(actions).find(
      (a): a is AnimationAction => !!(a && a.isRunning())
    );

    // Don't restart if the same animation is already playing
    if (currentAction?.getClip().name === action?.getClip().name) return;

    // Smooth transition with 0.3s crossfade
    if (
      currentAction &&
      currentAction?.getClip().name !== action?.getClip().name
    ) {
      currentAction.fadeOut(0.3);
    }

    action?.reset().fadeIn(0.3).play();
  }, [animation, actions]);

  return (
    <group ref={group} {...props} rotation={rotation} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group
            name="Rogue"
            position={[0, 0, 0.166]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Rogue_1"
              geometry={(nodes.Rogue_1 as GLTFResult).geometry}
              material={materials.Skin}
              skeleton={(nodes.Rogue_1 as GLTFResult).skeleton}
            />
            <skinnedMesh
              name="Rogue_2"
              geometry={(nodes.Rogue_2 as GLTFResult).geometry}
              material={materials.UnderShirt}
              skeleton={(nodes.Rogue_2 as GLTFResult).skeleton}
            />
            <skinnedMesh
              name="Rogue_3"
              geometry={(nodes.Rogue_3 as GLTFResult).geometry}
              material={materials.Pants}
              skeleton={(nodes.Rogue_3 as GLTFResult).skeleton}
            />
            <skinnedMesh
              name="Rogue_4"
              geometry={(nodes.Rogue_4 as GLTFResult).geometry}
              material={materials.Shirt}
              skeleton={(nodes.Rogue_4 as GLTFResult).skeleton}
            />
            <skinnedMesh
              name="Rogue_5"
              geometry={(nodes.Rogue_5 as GLTFResult).geometry}
              material={materials.Detail}
              skeleton={(nodes.Rogue_5 as GLTFResult).skeleton}
            />
            <skinnedMesh
              name="Rogue_6"
              geometry={(nodes.Rogue_6 as GLTFResult).geometry}
              material={materials.Boots}
              skeleton={(nodes.Rogue_6 as GLTFResult).skeleton}
            />
          </group>
          <skinnedMesh
            name="Rogue001"
            geometry={(nodes.Rogue001 as GLTFResult).geometry}
            material={materials["Material.006"]}
            skeleton={(nodes.Rogue001 as GLTFResult).skeleton}
            position={[0, 0, 0.166]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/player.glb");

export default Character;
