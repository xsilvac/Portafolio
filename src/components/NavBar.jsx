import React from 'react';
import {NavLink}  from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">About me</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar