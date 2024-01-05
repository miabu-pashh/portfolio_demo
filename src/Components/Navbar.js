import React from "react";
import "./Css/Navbar.css";
const NavBar = () => {
  // You can replace these links with your own
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Resume", path: "/resume" },
    // { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="nav">
      <div className="name">
        <h2>MOHAMMAD MAHABOOB PASHA</h2>
      </div>
      <ul>
        <div className="links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className={link.title === "Home" ? "active" : ""}>
                {link.title}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
