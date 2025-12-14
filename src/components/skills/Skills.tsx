import { useTexture } from "@react-three/drei";
import { SKILL_ICONS } from "../../constants/skillIcons";
import Sprite from "../../base/Sprite";
import Text from "../../base/Text";
import SkillsSign from "./SkillsSign";

const Skills = () => {
  const icons = useTexture([...SKILL_ICONS]);

  const textOptions = {
    font: "/fonts/Roboto_Regular.json",
    size: 10,
    height: 4,
  };

  return (
    <group>
      <Text
        rotation={[0, Math.PI, 0]}
        position={[-80, 0, 120]}
        textOptions={textOptions}
      >
        Skills
      </Text>
      <SkillsSign />
      {/*React*/}
      <Sprite icon={icons[0]} position={[-80, 5, 40]} scale={[7, 7, 1]} />
      {/*Node js*/}
      <Sprite icon={icons[1]} position={[-100, 5, 80]} scale={[10, 7, 1]} />
      {/*Mongo*/}
      <Sprite icon={icons[2]} position={[-120, 5, 80]} scale={[12, 6, 1]} />
      {/*Python*/}
      <Sprite icon={icons[3]} position={[-110, 5, 60]} scale={[7, 7, 1]} />
      {/*SQl*/}
      <Sprite icon={icons[4]} position={[-100, 5, 100]} scale={[10, 7, 1]} />
      {/*CPP*/}
      <Sprite icon={icons[5]} position={[-70, 5, 60]} scale={[6, 6, 1]} />
      {/*HTML*/}
      <Sprite icon={icons[6]} position={[-80, 5, 80]} scale={[7, 7, 1]} />
      {/*CSS*/}
      <Sprite icon={icons[7]} position={[-120, 5, 100]} scale={[7, 7, 1]} />
      {/*THREE*/}
      <Sprite icon={icons[8]} position={[-120, 5, 40]} scale={[10, 6, 1]} />
      {/*Bootstrap*/}
      <Sprite icon={icons[9]} position={[-70, 5, 100]} scale={[12, 7, 1]} />
      {/*Next*/}
      <Sprite icon={icons[10]} position={[-100, 5, 40]} scale={[10, 7, 1]} />
      {/*Flutter*/}
      <Sprite icon={icons[11]} position={[-90, 5, 60]} scale={[7, 7, 1]} />
    </group>
  );
};

useTexture.preload(SKILL_ICONS);

export default Skills;
