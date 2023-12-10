import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./Routing";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<Routing />);
