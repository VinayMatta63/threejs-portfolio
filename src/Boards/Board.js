import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text3D } from "@react-three/drei";
const Board = ({ x, z, text, rotation = [0, 0, 0], font, model, modelLeft, modelRight, }) => {
    const textOptions = {
        font,
        size: 5,
        height: 1,
    };
    return (_jsxs("group", { position: [x, 0, z], rotation: rotation, children: [_jsxs("mesh", { rotation: [0, Math.PI / 2, 0], position: [0, 15, (text.length / 2) * 3.2], children: [_jsx(Text3D, { ...textOptions, children: text }), _jsx("meshBasicMaterial", { attach: "material", color: "#fff" })] }), model && _jsx("primitive", { object: model.scene }), modelLeft && _jsx("primitive", { object: modelLeft.scene }), modelRight && _jsx("primitive", { object: modelRight.scene })] }));
};
export default Board;
