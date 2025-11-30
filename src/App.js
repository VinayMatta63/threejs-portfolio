import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Body";
// import Sky from "./Setup/Sky";
import Lights from "./Setup/Lights";
import { Loader, Preload, Stars } from "@react-three/drei";
//
//
const App = () => {
    return (_jsxs("div", { id: "cover", children: [_jsx("div", { id: "selector", children: _jsxs("div", { id: "welcome", children: [_jsxs("div", { children: [_jsxs("h1", { style: {
                                        fontSize: "45px",
                                        fontWeight: "500",
                                        marginBottom: "50px",
                                    }, children: ["Hello, I'm ", _jsx("span", { children: "Vinay Matta." })] }), _jsx("h2", { style: {
                                        fontSize: "40px",
                                        fontWeight: "500",
                                        marginBottom: "50px",
                                    }, children: "I'm a full-stack Web Developer." })] }), window.innerWidth > 767 ? (_jsxs("div", { children: [_jsx("p", { children: "Click to play" }), _jsxs("p", { style: { textAlign: "center", marginTop: "50px" }, children: ["Move: WASD", _jsx("br", {}), "Jump: SPACE", _jsx("br", {}), "Look: MOUSE", _jsx("br", {}), "Sprint: Left Shift", _jsx("br", {}), "Fly: F"] })] })) : (_jsxs("div", { children: [_jsx("p", { children: "Sorry!" }), _jsx("p", { children: "This website does not support mobile devices yet." })] }))] }) }), _jsxs(Canvas, { style: {
                    height: "95vh",
                    width: "100vw",
                    backgroundColor: "black",
                }, camera: { fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }, id: "canvas", children: [_jsx("fog", { attach: "fog", args: ["#0d1a26", 70, 120] }), _jsxs(Suspense, { fallback: null, children: [_jsx(Scene, {}), _jsx(Preload, { all: true })] }), _jsx(Stars, { radius: 160, depth: 50, count: 5000, factor: 4, saturation: 0, fade: true }), _jsx(Lights, {})] }), _jsxs("div", { className: "controls", children: [_jsx("span", { children: "WASD - Move" }), _jsx("span", { children: "Shift - Sprint" }), _jsx("span", { children: "Space - Jump" }), _jsx("span", { children: "F - Fly and Land" }), _jsx("span", { children: "Mouse - Look Around" })] }), _jsx(Loader, { containerStyles: {
                    background: "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
                }, innerStyles: {
                    backgroundColor: "salmon",
                    width: "50vw",
                }, barStyles: {
                    backgroundColor: "lightgreen",
                }, dataInterpolation: (p) => `Loading ${Math.round(p)}%`, initialState: (active) => active, dataStyles: {
                    color: "#fafafa",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "500",
                } })] }));
};
export default App;
