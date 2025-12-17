import { KeyboardControlsEntry, useKeyboardControls } from "@react-three/drei";

export const KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "KeyW",
  "KeyS",
  "KeyA",
  "KeyD",
  "ShiftLeft",
];

export enum KeyControls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
  fly = "fly",
  sprint = "sprint",
}

export const KEYBOARD_MAP: KeyboardControlsEntry<KeyControls>[] = [
  { name: KeyControls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: KeyControls.back, keys: ["ArrowDown", "KeyS"] },
  { name: KeyControls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: KeyControls.right, keys: ["ArrowRight", "KeyD"] },
  { name: KeyControls.jump, keys: ["Space"] },
  { name: KeyControls.fly, keys: ["KeyF"] },
  { name: KeyControls.sprint, keys: ["ShiftLeft"] },
];

const useMovementState = (key: KeyControls) => {
  return useKeyboardControls<KeyControls>((state) => state[key]);
};

export default useMovementState;
