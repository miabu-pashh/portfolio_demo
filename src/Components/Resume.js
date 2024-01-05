import React from "react";
import Resume1 from "./Css/Resume-MMP1.pdf";
import "./Css/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h2>GET THE RESUME</h2>
      <a href={Resume1} className="button1" download="Resume.pdf">
        DOWNLOAD
      </a>
    </div>
  );
}

export default Resume;
