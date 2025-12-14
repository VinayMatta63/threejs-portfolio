import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "@react-three/drei";
import Contact from "./components/contact/Contact";
import App from "./App";
import { LOADER_CONFIG } from "./constants/loaderConfig";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader {...LOADER_CONFIG} />}>
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
