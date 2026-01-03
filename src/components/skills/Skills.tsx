import { useTexture } from "@react-three/drei";
import { SKILL_ICONS } from "../../constants/skillIcons";
import Sprite from "../../base/Sprite";
import Text from "../../base/Text";
import SkillsSign from "./SkillsSign";
import { useDispose } from "../../hooks/useDispose";

const Skills = () => {
  const icons = useTexture([...SKILL_ICONS]);

  useDispose(icons);

  const textOptions = {
    font: "/fonts/Roboto_Regular.json",
    size: 7,
    height: 1,
  };

  return (
    <group>
      <Text
        type="3d"
        rotation={[-Math.PI / 2, 2 * Math.PI, 0]}
        position={[-110, 0, 140]}
        textOptions={textOptions}
      >
        Skills
      </Text>
      <SkillsSign />
      <group position={[-80, 5, 40]}>
        {/*Node js*/}
        <Sprite icon={icons[1]} position={[0, 0, 20]} scale={[10, 7, 1]} />
        {/*Mongo*/}
        <Sprite icon={icons[2]} position={[0, 0, 40]} scale={[12, 6, 1]} />
        {/*Python*/}
        <Sprite icon={icons[3]} position={[0, 0, 60]} scale={[7, 7, 1]} />
        {/*SQl*/}
        <Sprite icon={icons[4]} position={[0, 0, 80]} scale={[10, 7, 1]} />
        {/*HTML*/}
        <Sprite icon={icons[6]} position={[-20, 0, 20]} scale={[7, 7, 1]} />
        {/*CSS*/}
        <Sprite icon={icons[7]} position={[-20, 0, 40]} scale={[7, 7, 1]} />
        {/*THREE*/}
        <Sprite icon={icons[8]} position={[-20, 0, 60]} scale={[10, 6, 1]} />
        {/*Bootstrap*/}
        <Sprite icon={icons[9]} position={[-20, 0, 80]} scale={[12, 7, 1]} />
        {/*React*/}
        <Sprite icon={icons[0]} position={[-40, 0, 20]} scale={[7, 7, 1]} />
        {/*CPP*/}
        <Sprite icon={icons[5]} position={[-40, 0, 40]} scale={[6, 6, 1]} />
        {/*Next*/}
        <Sprite icon={icons[10]} position={[-40, 0, 60]} scale={[10, 7, 1]} />
        {/*Flutter*/}
        <Sprite icon={icons[11]} position={[-40, 0, 80]} scale={[7, 7, 1]} />
      </group>
    </group>
  );
};

export default Skills;
