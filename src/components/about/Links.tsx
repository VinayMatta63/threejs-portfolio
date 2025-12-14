import React from "react";
import Text from "../../base/Text";
import CollisionPlate from "../../base/CollisionPlate";

const Links: React.FC = () => {
  const z = 100;
  const x = -10;
  const z_sub = 12;
  const text_angle: [number, number, number] = [-Math.PI / 8, 0, 0];

  return (
    <group>
      <Text
        rotation={[-Math.PI / 8, Math.PI * 2, 0]}
        position={[x - 1.5, 0.01, z - 45]}
        textOptions={{ size: 3, height: 1, font: "/fonts/Roboto_Regular.json" }}
      >
        Links
      </Text>
      <group position={[x, 0.1, z + 15]} rotation={[0, Math.PI * 2, 0]}>
        <group position={[0, 0, 0]}>
          <Text rotation={text_angle}>Hackerrank</Text>
          <CollisionPlate
            position={[3.5, 0, 3.5]}
            name="hackerrank"
            onCollision={() => {}}
          />
        </group>

        <group position={[0, 0, -z_sub]}>
          <Text position={[0.65, 0, 0]} rotation={text_angle}>
            Codechef
          </Text>
          <CollisionPlate
            position={[3.5, 0, 3.5]}
            name="codechef"
            onCollision={() => {}}
          />
        </group>

        <group position={[0, 0, -z_sub * 2]}>
          <Text position={[0.75, 0, 0]} rotation={text_angle}>
            Leetcode
          </Text>
          <CollisionPlate
            position={[3.5, 0, 3.5]}
            name="leetcode"
            onCollision={() => {}}
          />
        </group>

        <group position={[0, 0, -z_sub * 3]}>
          <Text position={[0.75, 0, 0]} rotation={text_angle}>
            Linkedin
          </Text>
          <CollisionPlate
            position={[3.5, 0, 3.5]}
            name="linkedin"
            onCollision={() => {}}
          />
        </group>

        <group position={[0, 0, -z_sub * 4]}>
          <Text position={[1.25, 0, 0]} rotation={text_angle}>
            Github
          </Text>
          <CollisionPlate
            position={[3.5, 0, 3.5]}
            name="github"
            onCollision={() => {}}
          />
        </group>
      </group>
    </group>
  );
};

export default Links;
