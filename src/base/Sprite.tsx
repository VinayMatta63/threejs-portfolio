import { useMemo } from "react";
import { ThreeElements } from "@react-three/fiber";
import { SpriteMaterial, Texture } from "three";
import { useDispose } from "../hooks/useDispose";

type SpriteProps = ThreeElements["sprite"] & {
  icon: Texture;
};

const Sprite = ({ icon, ...props }: SpriteProps) => {
  const material = useMemo(() => new SpriteMaterial({ map: icon }), [icon]);

  useDispose(material);

  return <sprite {...props} material={material} />;
};

export default Sprite;
