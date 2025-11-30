import { Html } from "@react-three/drei";
import React from "react";
import { MutableRefObject } from "react";
import {
  chatSprite,
  iicSprite,
  museumSprite,
  sfSprite,
  tttSprite,
} from "./sprites";

interface SpriteComponentProps {
  controlsRef: MutableRefObject<any>;
  obj?: string;
  type: "links" | string;
}

const spriteStyles: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.8)",
  fontSize: "30px",
  padding: "100px 200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const SpriteComponent: React.FC<SpriteComponentProps> = ({ controlsRef, obj, type }) => {
  return type === "links" ? (
    <Html
      sprite
      style={spriteStyles}
      position={[
        controlsRef.current.getObject().position.x,
        controlsRef.current.getObject().position.y - 2,
        controlsRef.current.getObject().position.z + 20,
      ]}
      transform
    >
      {
        <>
          <span>Press E to visit Profile</span>
          <span>Move out of Plate to Exit</span>
        </>
      }
    </Html>
  ) : (
    <Html
      sprite
      style={spriteStyles}
      position={[
        controlsRef.current.getObject().position.x < -100
          ? controlsRef.current.getObject().position.x - 20
          : controlsRef.current.getObject().position.x + 20,
        controlsRef.current.getObject().position.y - 2,
        controlsRef.current.getObject().position.z,
      ]}
      transform
    >
      {obj ? (
        (obj === "sf" && sfSprite) ||
        (obj === "iic" && iicSprite) ||
        (obj === "chat" && chatSprite) ||
        (obj === "museum" && museumSprite) ||
        (obj === "ttt" && tttSprite)
      ) : (
        <>
          <span>Press B for brief introduction</span>
          <span>Press V to visit Project</span>
          <span>Press G to visit Project Github</span>
          <span>Move out of Plate to Exit</span>
        </>
      )}
    </Html>
  );
};

export default SpriteComponent;
