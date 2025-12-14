import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const Chat = () => {
  const chatModel = useGLTF("/models/chat.glb", true);

  return (
    <Project
      position={[-120, 0, -70]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Chat App"
      model={chatModel}
      scale={[2, 1.8, 2]}
    />
  );
};

export default Chat;
