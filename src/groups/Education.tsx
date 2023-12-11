import TextMesh from "../meshs/TextMesh";

const Education = () => {
  return (
    <>
      <TextMesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        Education
      </TextMesh>
      <group>
        <TextMesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
          size={1}
          height={0.1}
        >
          DCRUST
        </TextMesh>
        <TextMesh
          rotation={[Math.PI / 2, Math.PI, 0]}
          position={[36, 0.1, 81]}
          size={1}
          height={0.1}
        >
          B.Tech ECE
        </TextMesh>
        <TextMesh
          rotation={[Math.PI / 2, Math.PI, 0]}
          position={[37, 0.1, 78]}
          size={1}
          height={0.1}
        >
          Aug 2018-2022
        </TextMesh>
      </group>
      <group>
        <TextMesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 72]}
          size={1}
          height={0.1}
        >
          R.S. Public Sr. Sec. School
        </TextMesh>
        <TextMesh
          rotation={[Math.PI / 2, Math.PI, 0]}
          position={[37, 0.1, 69]}
          size={1}
          height={0.1}
        >
          Karnal, Haryana
        </TextMesh>
        <TextMesh
          rotation={[Math.PI / 2, Math.PI, 0]}
          position={[37, 0.1, 66]}
          size={1}
          height={0.1}
        >
          Class X and XII
        </TextMesh>
      </group>
    </>
  );
};

export default Education;
