import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Text3D } from "@react-three/drei";
const SignText = ({ scale, position, font, text }) => {
    return (_jsx(_Fragment, { children: _jsxs("mesh", { scale: scale, rotation: [0, Math.PI, 0], position: position, children: [_jsx(Text3D, { size: 1, height: 0.1, font: font, children: text }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }) }));
};
export default SignText;
