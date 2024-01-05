import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/resume" element={<Resume />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
