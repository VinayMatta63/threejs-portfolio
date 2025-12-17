import Lamp from "./Lamp";

const Lamps = () => {
  return (
    <>
      <Lamp position={[-51, 0, 80]} />
      <Lamp position={[139, 0, 80]} />
      <Lamp position={[49, 0, -57]} />
      <Lamp position={[-141, 0, -57]} />
    </>
  );
};

export default Lamps;
