import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact/Contact";
const Routing = () => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/contact", element: _jsx(Suspense, { fallback: _jsx(Loader, { containerStyles: {
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
                            } }), children: _jsx(Contact, {}) }) }), _jsx(Route, { path: "*", element: _jsx(App, {}) })] }) }));
};
export default Routing;
