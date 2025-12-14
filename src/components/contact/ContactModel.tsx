/* eslint-disable react-hooks/immutability */
import { useEffect, useRef } from "react";
import { ObjectMap, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/Addons.js";

interface ContactModelProps {
  messageModel: GLTF & ObjectMap;
}

const ContactModel = ({ messageModel }: ContactModelProps) => {
  const mouseX = useRef(0);
  const windowHalfX = useRef(window.innerWidth / 2);

  // Use effect to manage event listener lifecycle
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX - windowHalfX.current;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup: remove event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ clock }) => {
    const TargetX = mouseX.current * 0.001;

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
