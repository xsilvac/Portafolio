import React from 'react';
import {NavLink, Link}  from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">About me</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navbar-brand">
                <NavLink className="nav-link active"  aria-current="page" to="/">Proyectos</NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink className="nav-link" to="/">Tecnologias</NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink className="nav-link" to="/">Contacto</NavLink>
              </li>
            </ul>
            <div className="me-5">
              <NavLink className="btnCV" to="./XimenaSilvaCV.pdf" download target="_blank">CV</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar