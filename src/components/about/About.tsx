import Text from "../../base/Text";
import Education from "./Education";
import Links from "./Links";
import Me from "./Me";

const About = () => {
  return (
    <>
      <Text
        rotation={[0, Math.PI, 0]}
        position={[20, 0.5, 120]}
        textOptions={{
          size: 10,
          height: 4,
          font: "/fonts/Roboto_Regular.json",
        }}
      >
        About
      </Text>
      <Education />
      <Links />
      <Me />
    </>
  );
};

export default About;
