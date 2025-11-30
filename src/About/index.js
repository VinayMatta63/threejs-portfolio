import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Education from "./Education";
import Links from "./Links";
import Me from "./Me";
import { Text3D } from "@react-three/drei";
const About = ({ font }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("mesh", { rotation: [0, Math.PI, 0], position: [20, 0.5, 120], children: [_jsx(Text3D, { font: font, size: 10, height: 4, children: "About" }), _jsx("meshStandardMaterial", { attach: "material", color: "#fafafa", metalness: 1 })] }), _jsx(Education, { font: font }), _jsx(Links, { font: font }), _jsx(Me, { font: font })] }));
};
export default About;
