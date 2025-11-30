import { jsx as _jsx } from "react/jsx-runtime";
const Path = ({ position, castShadow, path }) => {
    return (_jsx("mesh", { geometry: path.Cube078.geometry, position: position, castShadow: castShadow, children: _jsx("meshStandardMaterial", { color: "#aaa", roughness: 1, metalness: 0, opacity: 0.8 }) }));
};
export default Path;
