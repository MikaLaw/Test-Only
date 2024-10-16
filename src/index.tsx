import { createRoot } from "react-dom/client";
import App from "./components/app/app";

const rootElement = document.getElementById("root");

// New as of React18
const root = createRoot(rootElement!);

root.render(
    <App />
);
