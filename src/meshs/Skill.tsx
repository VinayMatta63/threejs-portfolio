import { SpriteProps } from "@react-three/fiber";
import { SpriteMaterial, Texture } from "three";

interface SkillProps extends SpriteProps {
  icon: Texture;
}

const Skill = ({ icon, position, scale }: SkillProps) => {
  const material = new SpriteMaterial({ map: icon });
  return <sprite material={material} position={position} scale={scale} />;
};

export default Skill;
