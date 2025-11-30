import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact/Contact";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/contact"
          element={
            <Suspense
              fallback={
                <Loader
                  containerStyles={{
                    background:
                      "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
                  }} // Flex layout styles
                  innerStyles={{
                    backgroundColor: "salmon",
                    width: "50vw",
                  }} // Inner container styles
                  barStyles={{
                    backgroundColor: "lightgreen",
                  }} // Loading-bar styles
                  dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
                  initialState={(active) => active}
                  dataStyles={{
                    color: "#fafafa",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "500",
                  }}
                />
              }
            >
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default Routing;
