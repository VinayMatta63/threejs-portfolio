import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Floor = () => {
    return (_jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], children: [_jsx("planeGeometry", { args: [400, 400] }), _jsx("meshStandardMaterial", { color: "#80e93d", attach: "material", opacity: 0.8, roughness: 1, metalness: 0 })] }));
};
export default Floor;
