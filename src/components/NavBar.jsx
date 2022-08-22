import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import miName from "../img/miName.png";
import miName2 from "../img/MI_NOMBRE2.png";
import miName3 from "../img/MI_NOMBRE3.png";
import Projects from "./Projects";

const NavBar = () => {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miName3} width="50%" alt="" />
          </NavLink>
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
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="navbar-brand">
                <NavLink
                  style={{ fontSize: 30 }}
                  className="nav-link"
                  aria-current="page"
                  to={<Projects />}
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink style={{ fontSize: 30 }} className="nav-link" to="/">
                  Tecnologias
                </NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink style={{ fontSize: 30 }} className="nav-link" to="/">
                  Contacto
                </NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink
                  style={{ fontSize: 30 }}
                  className="nav-link"
                  to="./XimenaSilvaCV.pdf"
                  download
                  target="_blank"
                >
                  CV
                </NavLink>
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
