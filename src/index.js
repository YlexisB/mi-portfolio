import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="project/:id" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
