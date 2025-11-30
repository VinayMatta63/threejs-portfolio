import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text3D } from "@react-three/drei";
const SignMesh = ({ model, position, scale, text, textScale, font, rotation, textRotation, textPosition, }) => {
    const geometry = model.nodes.Cube.geometry;
    const material = model.nodes.Cube.material;
    return (_jsxs("group", { children: [_jsx("mesh", { geometry: geometry, material: material, position: position, scale: scale, rotation: rotation }), _jsx("mesh", { position: textPosition, scale: textScale, rotation: textRotation, children: _jsxs(Text3D, { font: font, size: 1, height: 0.1, children: [text, _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }) })] }));
};
export default SignMesh;
