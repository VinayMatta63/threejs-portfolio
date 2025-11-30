import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const Plate = forwardRef(({ position, args = [15, 10], color = "red" }, ref) => {
    return (_jsxs("mesh", { position: position, rotation: [-Math.PI / 2, 0, 0], ref: ref, children: [_jsx("planeGeometry", { args: args }), _jsx("meshStandardMaterial", { attach: "material", color: color, roughness: 1 })] }));
});
Plate.displayName = "Plate";
export default Plate;
