import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ProjectContextProvider } from "./context/ProjectContext";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProjectContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProjectContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
