import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
source: https://sketchfab.com/3d-models/squid-game-giant-doll-7afd49dd07714651a6afa1fc4aac8576
title: Squid Game - Giant Doll
*/
import { forwardRef } from "react";
const Model = forwardRef(({ squidDoll }, group) => {
    const { nodes } = squidDoll;
    return (_jsx("group", { ref: group, dispose: null, rotation: [0, Math.PI, 0], children: _jsx("group", { rotation: [-Math.PI / 2, 0, 0], children: _jsxs("group", { rotation: [Math.PI / 2, 0, 0], scale: 0.01, children: [_jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_01_leher_squidGameDoll_01_MAT_0.geometry, material: nodes.squidGameDoll_01_leher_squidGameDoll_01_MAT_0.material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_02_mata_squidGameDoll_02_MAT_0.geometry, material: nodes.squidGameDoll_02_mata_squidGameDoll_02_MAT_0.material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_01_rambut_squidGameDoll_01_MAT_0.geometry, material: nodes.squidGameDoll_01_rambut_squidGameDoll_01_MAT_0.material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_01_bajuDanKaki_squidGameDoll_01_MAT_0
                                .geometry, material: nodes.squidGameDoll_01_bajuDanKaki_squidGameDoll_01_MAT_0
                                .material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_02_kepala_squidGameDoll_02_MAT_0.geometry, material: nodes.squidGameDoll_02_kepala_squidGameDoll_02_MAT_0.material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_01_tangan_squidGameDoll_01_MAT_0.geometry, material: nodes.squidGameDoll_01_tangan_squidGameDoll_01_MAT_0.material }) }), _jsx("group", { rotation: [-Math.PI / 2, 0, 0], scale: [100, 100, 100], children: _jsx("mesh", { geometry: nodes.squidGameDoll_02_jepit_squidGameDoll_02_MAT_0.geometry, material: nodes.squidGameDoll_02_jepit_squidGameDoll_02_MAT_0.material }) })] }) }) }));
});
Model.displayName = "Squid";
export default Model;
