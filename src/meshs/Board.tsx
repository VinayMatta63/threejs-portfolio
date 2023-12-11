import TextMesh from "./TextMesh";
import { GroupProps } from "@react-three/fiber";

interface BoardProps extends GroupProps {
  model: any;
  modelLeft?: any;
  modelRight?: any;
  text: string;
}

const Board = ({
  text,
  model,
  modelLeft,
  modelRight,
  ...props
}: BoardProps) => {
  return (
    <group {...props}>
      <TextMesh
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 15, (text.length / 2) * 3.2]}
        size={5}
        height={1}
      >
        {text}
      </TextMesh>

      {model && <primitive object={model.scene} />}
      {modelLeft && <primitive object={modelLeft.scene} />}
      {modelRight && <primitive object={modelRight.scene} />}
    </group>
  );
};

export default Board;
