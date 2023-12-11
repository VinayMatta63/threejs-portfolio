import LampsLights from "../meshs/LampsLight";

const Lights = () => {
  return (
    <group>
      <rectAreaLight
        width={1000}
        height={1000}
        color="#fafafa"
        intensity={0.2}
        position={[100, 100, 200]}
        lookAt={() => [0, 0, 0]}
        castShadow={false}
      />
      <directionalLight
        color={"#E7B7FF"}
        intensity={0.05}
        position={[0, 5, -9]}
        castShadow
        shadow-onUpdate={false}
        shadow-bias={-0.000001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <LampsLights
        pos1={[2.8, 5, 0]}
        pos2={[-3.5, 5, 0]}
        args={["#FF7A1F", 0.03, 20, 0.5]}
      />
      <LampsLights
        pos1={[-55, 5, 80]}
        pos2={[-48, 5, 80]}
        args={["#FF7A1F", 0.1, 20, 0.5]}
      />

      <LampsLights
        pos1={[45.5, 5, -57]}
        pos2={[52, 5, -57]}
        args={["#FF7A1F", 0.1, 20, 0.5]}
      />
      <LampsLights
        pos1={[135.5, 5, 80]}
        pos2={[142, 5, 80]}
        args={["#FF7A1F", 0.1, 20, 0.5]}
      />
      <LampsLights
        pos1={[-145, 5, -57]}
        pos2={[-138, 5, -57]}
        args={["#FF7A1F", 0.1, 20, 0.5]}
      />
      <pointLight position={[-95, 2, 125]} args={["#FF7A1F", 0.5, 20, 1]} />
      <pointLight position={[0, 2, 125]} args={["#FF7A1F", 0.5, 20, 1]} />
      <pointLight position={[-110, 7, -10]} args={["#fafafa", 0.5, 30, 1]} />
      <pointLight position={[-70, 5, -40]} args={["#fafafa", 0.5, 30, 1]} />
      <pointLight position={[-105, 5, -70]} args={["#fafafa", 0.5, 30, 1]} />
      <pointLight position={[-65, 7, -140]} args={["#fafafa", 0.5, 30, 1]} />
      <pointLight position={[-105, 7, -140]} args={["#fafafa", 0.5, 30, 1]} />
      <pointLight position={[100, 15, -50]} args={["#fafafa", 0.5, 70]} />
    </group>
  );
};

export default Lights;
