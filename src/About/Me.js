import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Me = ({ font }) => {
    const secondRef = useRef(null);
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (secondRef.current) {
            secondRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
        }
    });
    return (_jsx(_Fragment, { children: _jsxs("mesh", { position: [130, 2, 110], rotation: [-Math.PI / 2, 0, -Math.PI], ref: secondRef, children: [_jsx(Text3D, { font: font, size: 10, height: 2, children: "Welcome!" }), _jsx("meshBasicMaterial", { attach: "material", color: "#fafafa" })] }) }));
};
export default Me;
