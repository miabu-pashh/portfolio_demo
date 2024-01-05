import React, { useState, useEffect } from "react";

import "./Css/projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Health Web Application",
      client: "Saint Louis University",
      duration: "Aug-Dec 2022",
      overview:
        "The project involves developing a Health web Application website using React and Spring boot",
      technologies: "React, Spring boot, MySQL",
      responsibilities:
        "Responsible for the complete development of application.",
    },
    {
      title: "E-COMMERCE WEBSITE",
      client: "SIEMENS, Nagarro Internal",
      duration: "JAN-MAY 2022",
      overview:
        "The project involves developing an eCommerce website using Mendix low code platform",
      technologies: "Mendix",
      responsibilities:
        "Responsible for the complete development of application.",
    },
    {
      title: "ChatBOT & Dynamic Chat Assisting Application",
      client: "mount Bank, Nagarro Internal",
      duration: "Jun-Sept 2022",
      overview:
        "The project involves developing a chatbot and chat application system",
      technologies: "React, Spring boot, MySQL",
      responsibilities:
        "Responsible for the frontend and integration of backend development of application.",
    },
    {
      title: "E-Commerce website",
      client: "Nagarro Fresher Training",
      duration: "Nov-Dec 2021",
      overview:
        "A product catalog website where a customer can visit, register themselves, browse products, search products, view product details",
      technologies: "Frontend end-Angular and backend java",
      responsibilities:
        "Responsible for the complete development of application.",
    },
    {
      title: "Temperature Sensong & Hand Sanitizing Robot",
      client: "GRIET",
      duration: "Dec-June 2021",
      overview:
        "The project involves developing a robot which could sense the temperature and also helps in assisting and sanitizing the users",
      technologies: "Ardino UNO",
      responsibilities:
        "Responsible for the complete development of project with a group of 3 members",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(null);
  // const [showDetails, setShowDetails] = React.useState(false);

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <div>
      <div className="project1" id="p1">
        {/* <h3>HEALTH</h3> */}
        <h3>
          HEALTH <br></br>WEB APPLICATION
        </h3>
        <h2>
          The website allows users to find the related issues and post to doctor
          and doctor can reply back
        </h2>
        <h2>Tech Stack: React, Spring-Boot, MySQL</h2>
        {/* <img src="./healthcare.png" className="project1-image" /> */}
      </div>
      <div className="project1" id="p2">
        <h3>
          ChatBot & Dynamic <br></br>Chat Assisting System
        </h3>
        <h2>
          The user can interact with the chat bot and also it turn to Dynmaic
          Chat
        </h2>
        <h2>Tech Stack: React, Spring-Boot, MySQL</h2>

        {/* <img src="./add-to-cart.png" className="project1-image" /> */}
      </div>
      <div className="project1" id="p3">
        <h3>
          E-COMMERCE <br></br>WEB APPLICATION
        </h3>
        <h2>
          E-Commerse Website where user can navigate,buy and also add to cart
        </h2>
        <h2>TechStack: React, Spring-Boot, MySQL</h2>

        {/* <img src="./add-to-cart.png" className="project1-image" /> */}
      </div>
      <div className="project1" id="p4">
        <h3>
          Shopping Website <br></br>with LOW-CODE
        </h3>
        <h2>The Website is build using Low code: Mendix</h2>
        <h2>TechStack: Mendix, Spring-Boot, MySQL</h2>
        {/* <img src="./add-to-cart.png" className="project1-image" /> */}
      </div>
      <div className="project1" id="p5">
        <h3>
          Temperature<br></br>Sensing ROBOT
        </h3>
        <h2>
          This is the MAJOR Project, Robot checks the Temperature and also
          Sanitizes the hand automatically
        </h2>
        <h2>Tech Stack: Solidworks, Polyethelene, Aurdino UNO, Sensors</h2>
        {/* <img src="./add-to-cart.png" className="project1-image" /> */}
      </div>
      <div className="project1" id="p6">
        <h3>
          IPG <br></br>CAR MAKER
        </h3>
        <h2>
          This is a Car Simulation software where A Car has been designed and
          tested in Off-Road conditions which reduses the Cost of Real vehicle
          testing
        </h2>
        <h2>Tech Stack: IPG Car maker, Solidworks</h2>
      </div>
      <div className="project1" id="p7">
        <h3>
          Alzheimer's <br></br>disease detection
        </h3>
        <h2>
          The Alzheimer Disease detection has been done by using Image
          Recognization, Machine learning
        </h2>
        <h2>Tech Stack: Machine Learning, Image Recognization</h2>
      </div>

      <div className="project1" id="p8">
        <h3>
          SAE <br></br>BAJA BUGGY
        </h3>
        <h2>
          The Buggy has been designed, Fabricated and tested from scrath. The
          design has won National Award as the Best Vechicle{" "}
        </h2>
        <h2>Tech Stack: Solidworks, Fabrication</h2>

        {/* <img src="./add-to-cart.png" className="project1-image" /> */}
      </div>
    </div>
  );
};

export default Projects;
