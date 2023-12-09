import { useFrame } from "@react-three/fiber";
import React from "react";

const ContactModel = ({ messageModel }) => {
  let mouseX = 0;
  let TargetX = 0;

  const windowHalfX = window.innerWidth / 2;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - windowHalfX;
  });

  useFrame(({ clock }) => {
    TargetX = mouseX * 0.001;

    const elapsedTime = clock.getElapsedTime();
    messageModel.scene.children[0].rotation.z = 0.8 * elapsedTime;
    messageModel.scene.children[0].rotation.y +=
      0.5 * (TargetX - messageModel.scene.children[0].rotation.y);
    messageModel.scene.children[0].position.x = Math.sin(elapsedTime * 0.8);
    messageModel.scene.children[0].position.z = Math.cos(elapsedTime * 0.8);
    messageModel.scene.children[0].position.y = -Math.tan(elapsedTime * 0.8);
  });

  return (
    <>
      <primitive object={messageModel.scene} />
    </>
  );
};

export default ContactModel;
