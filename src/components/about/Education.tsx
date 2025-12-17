import React from "react";
import Text from "../../base/Text";

const Education: React.FC = () => {
  return (
    <group position={[20, 0.1, 70]}>
      <Text
        position={[-7, 0, -15]}
        rotation={[-Math.PI / 8, Math.PI * 2, 0]}
        textOptions={{
          size: 3,
          height: 1,
          font: "/fonts/Roboto_Regular.json",
        }}
      >
        Education
      </Text>
      <group rotation={[0, Math.PI, 0]} position={[-1, 0, -2]}>
        <Text rotation={[Math.PI / 4, Math.PI, 0]}>DCRUST</Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -5]}>
          B.Tech ECE
        </Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -10]}>
          2018-2022
        </Text>
      </group>
      <group rotation={[0, Math.PI, 0]} position={[-2, 0, 18]}>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[4, 0, 0]}>
          R.S. Public Sr. Sec. School
        </Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -5]}>
          Karnal, Haryana
        </Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -10]}>
          Class X and XII
        </Text>
      </group>
    </group>
  );
};

export default Education;
