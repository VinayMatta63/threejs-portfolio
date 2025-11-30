import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Html } from "@react-three/drei";
import { forwardRef } from "react";
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
const Track = forwardRef(({ position, args = [30, 80], show, completed }, ref) => {
    return (_jsxs("group", { children: [_jsxs("mesh", { position: position, rotation: [-Math.PI / 2, 0, 0], ref: ref, children: [_jsx("planeGeometry", { args: args }), _jsx("meshStandardMaterial", { attach: "material", color: "#e0d296", roughness: 1 })] }), !show && (_jsx(Html, { sprite: true, style: spriteStyles, position: [100, 5, 0], transform: true, children: !completed ? (_jsxs(_Fragment, { children: [_jsx("span", { children: "Start Game" }), _jsx("br", {}), _jsx("span", { children: "( Only move forward or backward" }), _jsx("span", { children: "While the Doll is looking away )" })] })) : (_jsx(_Fragment, { children: "completed" })) }))] }));
});
Track.displayName = "Track";
export default Track;
