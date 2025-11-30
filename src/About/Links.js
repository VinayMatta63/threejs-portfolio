import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Text3D } from "@react-three/drei";
const Links = ({ font }) => {
    const z = 83;
    const x = -0.5;
    const z_sub = 8;
    const text_angle = [
        Math.PI / 2 - Math.PI / 8,
        Math.PI,
        0,
    ];
    return (_jsxs(_Fragment, { children: [_jsxs("mesh", { rotation: [0, Math.PI, 0], position: [x + 2, 0.01, 90], children: [_jsx(Text3D, { font: font, size: 3, height: 1, children: "Links" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }), _jsxs("group", { children: [_jsxs("mesh", { rotation: text_angle, position: [x, 0.1, z], children: [_jsx(Text3D, { font: font, size: 1, height: 0.1, children: "Hackerrank" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }), _jsxs("mesh", { rotation: text_angle, position: [x, 0.1, z - z_sub], children: [_jsx(Text3D, { font: font, size: 1, height: 0.1, children: "Codechef" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }), _jsxs("mesh", { rotation: text_angle, position: [x, 0.1, z - z_sub * 2], children: [_jsx(Text3D, { font: font, size: 1, height: 0.1, children: "Leetcode" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }), _jsxs("mesh", { rotation: text_angle, position: [x, 0.1, z - z_sub * 3], children: [_jsx(Text3D, { font: font, size: 1, height: 0.1, children: "Linkedin" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }), _jsxs("mesh", { rotation: text_angle, position: [x, 0.1, z - z_sub * 4], children: [_jsx(Text3D, { font: font, size: 1, height: 0.1, children: "Github" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] })] })] }));
};
export default Links;
