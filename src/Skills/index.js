import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skill from "./Skill";
import { Text3D } from "@react-three/drei";
const Skills = ({ icons, font }) => {
    const textOptions = {
        font,
        size: 10,
        height: 4,
    };
    return (_jsxs("group", { children: [_jsxs("mesh", { rotation: [0, Math.PI, 0], position: [-80, 0, 120], children: [_jsx(Text3D, { ...textOptions, children: "Skills" }), _jsx("meshStandardMaterial", { attach: "material", color: "#fafafa", metalness: 1 })] }), _jsx(Skill, { icon: icons[0], position: [-80, 5, 40], scale: [7, 7, 1] }), _jsx(Skill, { icon: icons[1], position: [-100, 5, 80], scale: [10, 7, 1] }), _jsx(Skill, { icon: icons[2], position: [-120, 5, 80], scale: [12, 6, 1] }), _jsx(Skill, { icon: icons[3], position: [-110, 5, 60], scale: [7, 7, 1] }), _jsx(Skill, { icon: icons[4], position: [-100, 5, 100], scale: [10, 7, 1] }), _jsx(Skill, { icon: icons[5], position: [-70, 5, 60], scale: [6, 6, 1] }), _jsx(Skill, { icon: icons[6], position: [-80, 5, 80], scale: [7, 7, 1] }), _jsx(Skill, { icon: icons[7], position: [-120, 5, 100], scale: [7, 7, 1] }), _jsx(Skill, { icon: icons[8], position: [-120, 5, 40], scale: [10, 6, 1] }), _jsx(Skill, { icon: icons[9], position: [-70, 5, 100], scale: [12, 7, 1] }), _jsx(Skill, { icon: icons[10], position: [-100, 5, 40], scale: [10, 7, 1] }), _jsx(Skill, { icon: icons[11], position: [-90, 5, 60], scale: [7, 7, 1] })] }));
};
export default Skills;
