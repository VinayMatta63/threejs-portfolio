import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { AdditiveBlending } from "three";
const Sky = ({ pointCount }) => {
    const [positions] = useMemo(() => {
        const posArray = [];
        for (let i = 0; i < pointCount; i++) {
            posArray.push((Math.random() - 0.5) * 500);
            posArray.push(Math.random() * 300);
            posArray.push((Math.random() - 0.5) * 500);
        }
        return [new Float32Array(posArray)];
    }, [pointCount]);
    return (_jsxs("points", { children: [_jsx("bufferGeometry", { attach: "geometry", children: _jsx("bufferAttribute", { attach: "attributes-position", array: positions, count: positions.length / 3, itemSize: 3 }) }), _jsx("pointsMaterial", { attach: "material", size: 0.08, sizeAttenuation: true, blending: AdditiveBlending, depthWrite: false })] }));
};
export default Sky;
