import { ThreeElements } from "@react-three/fiber";
import { SpriteMaterial, Texture } from "three";

type SpriteProps = ThreeElements["sprite"] & {
  icon: Texture;
};

const Sprite = ({ icon, ...props }: SpriteProps) => {
  const material = new SpriteMaterial({ map: icon });
  return <sprite {...props} material={material} />;
};

export default Sprite;
