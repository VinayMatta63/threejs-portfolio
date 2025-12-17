import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "@react-three/drei";
import App from "./App";
import { LOADER_CONFIG } from "./constants/loaderConfig";

const Contact = lazy(() => import("./components/contact/Contact"));

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<App />} />
      </Routes>
      <Loader {...LOADER_CONFIG} />
    </Router>
  );
};

export default Routing;
