import TextMesh from "../meshs/TextMesh";
import { Euler } from "@react-three/fiber";

const Links = () => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle: Euler = [Math.PI / 2 - Math.PI / 8, Math.PI, 0];
  return (
    <>
      <TextMesh rotation={[0, Math.PI, 0]} position={[x + 2, 0.01, 90]}>
        Links
      </TextMesh>
      <group>
        <TextMesh
          rotation={text_angle}
          position={[x, 0.1, z]}
          size={1}
          height={0.1}
        >
          Hackerrank
        </TextMesh>
        <TextMesh
          rotation={text_angle}
          position={[x, 0.1, z - z_sub]}
          size={1}
          height={0.1}
        >
          Codechef
        </TextMesh>
        <TextMesh
          rotation={text_angle}
          position={[x, 0.1, z - z_sub * 2]}
          size={1}
          height={0.1}
        >
          Leetcode
        </TextMesh>
        <TextMesh
          rotation={text_angle}
          position={[x, 0.1, z - z_sub * 3]}
          size={1}
          height={0.1}
        >
          Linkedin
        </TextMesh>
        <TextMesh
          rotation={text_angle}
          position={[x, 0.1, z - z_sub * 4]}
          size={1}
          height={0.1}
        >
          Github
        </TextMesh>
      </group>
    </>
  );
};

export default Links;
