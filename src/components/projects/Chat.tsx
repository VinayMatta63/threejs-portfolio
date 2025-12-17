import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const Chat = () => {
  const chatModel = useGLTF("/models/chat.glb", true);

  return (
    <Project
      ScreenComponent={ChatScreen}
      position={[-120, 0, -70]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Chat App"
      model={chatModel}
      scale={[2, 1.8, 2]}
    />
  );
};

export default Chat;

const ChatScreen: React.FC = () => (
  <PlateScreen
    title="Chat App"
    description="A React js Chat App with whatsapp-web like features including emoji picker
      ,speech to text input and more. Backend functionality of this app is
      implemented using MongoDB, ExpressJS, NodeJS and made real-time using
      pusher."
    visitLink="https://whats-clone-1c76b.web.app/"
    codeLink="https://github.com/VinayMatta63/Chat-App"
  />
);
