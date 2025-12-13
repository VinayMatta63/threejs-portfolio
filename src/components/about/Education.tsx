import React from "react";
import Text from "../base/Text";

const Education: React.FC = () => {
  return (
    <>
      <Text
        rotation={[0, Math.PI, 0]}
        position={[40, 0.5, 90]}
        textOptions={{
          size: 3,
          height: 1,
          font: "/fonts/Roboto_Regular.json",
        }}
      >
        Education
      </Text>
      <group>
        <Text
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          DCRUST
        </Text>
        <Text rotation={[Math.PI / 2, Math.PI, 0]} position={[36, 0.1, 81]}>
          B.Tech ECE
        </Text>
        <Text rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 78]}>
          Aug 2018-2022
        </Text>
      </group>
      <group>
        <Text
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 72]}
        >
          R.S. Public Sr. Sec. School
        </Text>
        <Text rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 69]}>
          Karnal, Haryana
        </Text>
        <Text rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 66]}>
          Class X and XII
        </Text>
      </group>
    </>
  );
};

export default Education;
