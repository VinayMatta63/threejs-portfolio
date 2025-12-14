import { KEYS } from "../hooks/useMovementState";

export const resetKeyboardEvents = () => {
  KEYS.forEach((key) => {
    window.dispatchEvent(new KeyboardEvent("keyup", { key, code: key }));
  });
};
