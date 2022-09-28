import React from "react";
import miName3 from "../img/MI_NOMBRE3.png";

const NavBar = () => {
  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark fixed-top"
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="/">
            <img src={miName3} width="50%" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse me-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <li className="navbar-brand">
                <a
                  style={{ fontSize: 30 }}
                  className="nav-link"
                  aria-current="page"
                  href="#projects"
                >
                  Proyectos
                </a>
              </li>
              <li className="navbar-brand">
                <a style={{ fontSize: 30 }} className="nav-link" href="#skills">
                  Tecnologias
                </a>
              </li>
              <li className="navbar-brand">
                <a
                  style={{ fontSize: 30 }}
                  className="nav-link"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
              <li className="navbar-brand">
                <a
                  style={{ fontSize: 30 }}
                  className="nav-link"
                  href="./XimenaSilvaCV.pdf"
                  download
                  target="_blank"
                >
                  CV
                </a>
              </li>
            </ul>
            {/* <div className="me-5">
              
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
