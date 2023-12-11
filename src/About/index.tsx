import Education from "./Education";
import Links from "./Links";
import Me from "./Me";
import TextMesh from "../components/TextMesh";

const About = () => {
  return (
    <>
      <TextMesh
        rotation={[0, Math.PI, 0]}
        position={[20, 0.5, 120]}
        size={10}
        height={4}
        materialComponent={
          <meshStandardMaterial
            attach="material"
            color="#fafafa"
            metalness={1}
          />
        }
      >
        About
      </TextMesh>
      <Education />
      <Links />
      <Me />
    </>
  );
};

export default About;
