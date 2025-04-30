import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 mt-5" style={{ backgroundColor: '#0056b3', color: '#ffffff' }}>
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item mx-3">
            <Link to="/" className="text-white text-decoration-none fw-bold">Explorar</Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/sobre-nosotros" className="text-white text-decoration-none fw-bold">Sobre Nosotros</Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/directorio-medico" className="text-white text-decoration-none fw-bold">Directorio Médico</Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/tramites-en-linea" className="text-white text-decoration-none fw-bold">Trámites en Línea</Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/contacto" className="text-white text-decoration-none fw-bold">Contacto</Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/bolsa-de-trabajo" className="text-white text-decoration-none fw-bold">Bolsa de Trabajo</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
