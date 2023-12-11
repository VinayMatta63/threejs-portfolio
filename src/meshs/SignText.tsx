import TextMesh, { TextMeshProps } from "./TextMesh";

const SignText = ({ scale, position, children }: TextMeshProps) => {
  return (
    <TextMesh
      scale={scale}
      rotation={[0, Math.PI, 0]}
      position={position}
      size={1}
      height={0.1}
    >
      {children}
    </TextMesh>
  );
};

export default SignText;
