import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";
const LampsLights = ({ pos1, pos2, args }) => {
    const helper = useRef(null);
    useHelper(helper, PointLightHelper);
    // console.log(helper.current);
    return (_jsx(_Fragment, { children: _jsx("pointLight", { position: [
                (pos1[0] + pos2[0]) / 2,
                (pos1[1] + pos2[1]) / 2,
                (pos1[2] + pos2[2]) / 2,
            ], args: args, castShadow: true, "shadow-onUpdate": false, "shadow-mapSize-width": 512, "shadow-mapSize-height": 512, "shadow-camera-near": 0.1, "shadow-camera-far": 25 }) }));
};
export default LampsLights;
