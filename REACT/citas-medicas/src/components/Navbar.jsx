import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0056b3', color: '#ffffff' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Citas Médicas</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Login">Citas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/directorio-medico">Directorio Médico</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contactenos">Contáctenos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tramites-en-linea">Trámites en Línea</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
