import Text from "../../base/Text";
import AboutSign from "./AboutSign";
import Education from "./Education";
import Links from "./Links";
import Me from "./Me";

const About = () => {
  return (
    <group>
      <Text
        type="3d"
        rotation={[-Math.PI / 2, Math.PI * 2, 0]}
        position={[-15, 0.5, 140]}
        textOptions={{
          size: 7,
          height: 1,
          font: "/fonts/Roboto_Regular.json",
        }}
      >
        About
      </Text>
      <AboutSign />
      <Education />
      <Links />
      <Me />
    </group>
  );
};

export default About;
