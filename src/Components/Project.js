import React, { useState, useEffect } from "react";
import Projects from "./Projects"; // Update the path accordingly
import "./Css/Projects.scss";

const Project = () => {
  const projectsData = [
    // Add your project details as objects in this array
    // Example:
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
      title: "POC MENDIX",
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
    // Add other projects similarly
  ];
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Closure</h1>
        <h2 className="Parallax__content__heading__caption">
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
    </>
  );

  return (
    // <div className="projects-list">
    //   {projectsData.map((project, index) => (
    //     <Projects key={index} {...project} />
    //   ))}

    // </div>
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
};

export default Project;
