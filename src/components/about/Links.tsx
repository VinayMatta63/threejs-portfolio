import React, { memo } from "react";
import Text from "../../base/Text";
import Link from "../../base/Link";

const Links: React.FC = () => {
  const z = 100;
  const x = -10;
  const z_sub = 12;

  return (
    <group>
      <Text
        scale={4}
        rotation={[-Math.PI / 8, Math.PI * 2, 0]}
        position={[x - 1.5, 2.1, z - 45]}
      >
        Links
      </Text>
      <group position={[x, 1, z + 15]} rotation={[0, Math.PI * 2, 0]}>
        <Link position={[0, 0, 0]} to="https://www.hackerrank.com/vinaymatta63">
          Hackerrank
        </Link>
        <Link
          position={[0, 0, -z_sub]}
          to="https://www.codechef.com/users/vinay_matta_63"
        >
          Codechef
        </Link>
        <Link
          position={[0, 0, -z_sub * 2]}
          to="https://leetcode.com/vinaymatta63/"
        >
          Leetcode
        </Link>
        <Link
          position={[0, 0, -z_sub * 3]}
          to="https://linkedin.com/in/vinay-matta-465578192"
        >
          Linkedin
        </Link>
        <Link
          position={[0, 0, -z_sub * 4]}
          to="https://github.com/VinayMatta63"
        >
          Github
        </Link>
      </group>
    </group>
  );
};

export default memo(Links);
