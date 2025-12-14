import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";

const Chat = () => {
  const chatModel = useGLTF("/models/chat.glb", true);

  return (
    <Project
      position={[-120, 0, -70]}
      title="Chat App"
      model={chatModel}
      scale={[2, 1.8, 2]}
    />
  );
};

useGLTF.preload("/models/chat.glb");

export default Chat;
