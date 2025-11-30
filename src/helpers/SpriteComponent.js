import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Html } from "@react-three/drei";
import { chatSprite, iicSprite, museumSprite, sfSprite, tttSprite, } from "./sprites";
const spriteStyles = {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.8)",
    fontSize: "30px",
    padding: "100px 200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};
const SpriteComponent = ({ controlsRef, obj, type, }) => {
    return type === "links" ? (_jsx(Html, { sprite: true, style: spriteStyles, position: [
            controlsRef.current.getObject().position.x,
            controlsRef.current.getObject().position.y - 2,
            controlsRef.current.getObject().position.z + 20,
        ], transform: true, children: _jsxs(_Fragment, { children: [_jsx("span", { children: "Press E to visit Profile" }), _jsx("span", { children: "Move out of Plate to Exit" })] }) })) : (_jsx(Html, { sprite: true, style: spriteStyles, position: [
            controlsRef.current.getObject().position.x < -100
                ? controlsRef.current.getObject().position.x - 20
                : controlsRef.current.getObject().position.x + 20,
            controlsRef.current.getObject().position.y - 2,
            controlsRef.current.getObject().position.z,
        ], transform: true, children: obj ? ((obj === "sf" && sfSprite) ||
            (obj === "iic" && iicSprite) ||
            (obj === "chat" && chatSprite) ||
            (obj === "museum" && museumSprite) ||
            (obj === "ttt" && tttSprite)) : (_jsxs(_Fragment, { children: [_jsx("span", { children: "Press B for brief introduction" }), _jsx("span", { children: "Press V to visit Project" }), _jsx("span", { children: "Press G to visit Project Github" }), _jsx("span", { children: "Move out of Plate to Exit" })] })) }));
};
export default SpriteComponent;
