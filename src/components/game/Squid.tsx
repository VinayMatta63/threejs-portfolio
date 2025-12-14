import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

const Squid = forwardRef((_, squidRef) => {
  const squid = useGLTF("/models/squid/scene.gltf", true);

  return (
    <primitive ref={squidRef} object={squid.scene} rotation={[0, Math.PI, 0]} />
  );
});

Squid.displayName = "Squid";

export default Squid;
