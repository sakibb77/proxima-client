import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ProjectContextProvider } from "./context/ProjectContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProjectContextProvider>
        <App />
      </ProjectContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
