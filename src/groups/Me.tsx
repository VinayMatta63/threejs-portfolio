import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import TextMesh from "../meshs/TextMesh";
import { Mesh } from "three";

const Me = () => {
  const secondRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (secondRef?.current)
      secondRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
  });

  return (
    <TextMesh
      position={[130, 2, 110]}
      rotation={[-Math.PI / 2, 0, -Math.PI]}
      size={10}
      height={2}
      ref={secondRef}
    >
      Welcome!
    </TextMesh>
  );
};

export default Me;
