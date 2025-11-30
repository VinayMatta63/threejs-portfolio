import { jsx as _jsx } from "react/jsx-runtime";
import { SpriteMaterial } from "three";
const Skill = ({ icon, position, scale }) => {
    const material = new SpriteMaterial({ map: icon });
    return _jsx("sprite", { material: material, position: position, scale: scale });
};
export default Skill;
