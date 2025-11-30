import { KeyboardControlsEntry, useKeyboardControls } from "@react-three/drei";
import React, { useMemo } from "react";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
  fly = "fly",
  sprint = "sprint",
}

export const KEYBOARD_MAP: KeyboardControlsEntry<Controls>[] = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
  { name: Controls.fly, keys: ["KeyF"] },
  { name: Controls.sprint, keys: ["ShiftLeft"] },
];

const usePlayerMovement = () => {
  const forwardPressed = useKeyboardControls<Controls>(
    (state) => state.forward
  );
  const backPressed = useKeyboardControls<Controls>((state) => state.back);
  const leftPressed = useKeyboardControls<Controls>((state) => state.left);
  const rightPressed = useKeyboardControls<Controls>((state) => state.right);
  const jumpPressed = useKeyboardControls<Controls>((state) => state.jump);
  const flyPressed = useKeyboardControls<Controls>((state) => state.fly);
  const sprintPressed = useKeyboardControls<Controls>((state) => state.sprint);

  return {
    forwardPressed,
    backPressed,
    leftPressed,
    rightPressed,
    jumpPressed,
    flyPressed,
    sprintPressed,
  };
};

export default usePlayerMovement;
