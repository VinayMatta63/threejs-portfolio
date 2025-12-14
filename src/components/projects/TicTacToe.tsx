import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const TicTacToe = () => {
  const [tttModel, tttLeft] = useGLTF(
    ["/models/ttt.glb", "/models/ttt1.glb"],
    true
  );

  return (
    <Project
      position={[-120, 0, -140]}
      title="Tic Tac Toe"
      model={tttModel}
      modelLeft={tttLeft}
      scale={[1.2, 1.2, 1]}
      subScale={0.8}
    />
  );
};

export default TicTacToe;
