import React from "react";
import Text from "../base/Text";

const Links: React.FC = () => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle: [number, number, number] = [
    Math.PI / 2 - Math.PI / 8,
    Math.PI,
    0,
  ];

  return (
    <>
      <Text
        rotation={[0, Math.PI, 0]}
        position={[x + 2, 0.01, 90]}
        textOptions={{ size: 3, height: 1, font: "/fonts/Roboto_Regular.json" }}
      >
        Links
      </Text>
      <group>
        <Text rotation={text_angle} position={[x, 0.1, z]}>
          Hackerrank
        </Text>
        <Text rotation={text_angle} position={[x, 0.1, z - z_sub]}>
          Codechef
        </Text>
        <Text rotation={text_angle} position={[x, 0.1, z - z_sub]}>
          Codechef
        </Text>
        <Text rotation={text_angle} position={[x, 0.1, z - z_sub * 2]}>
          Leetcode
        </Text>
        <Text rotation={text_angle} position={[x, 0.1, z - z_sub * 3]}>
          Linkedin
        </Text>
        <Text rotation={text_angle} position={[x, 0.1, z - z_sub * 4]}>
          Github
        </Text>
      </group>
    </>
  );
};

export default Links;
