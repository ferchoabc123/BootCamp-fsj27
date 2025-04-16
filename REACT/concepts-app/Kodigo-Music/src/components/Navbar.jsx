import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
           <Link className='nav-link' to="/"> <i class="bi bi-boombox text-light me-4 fs-3 "></i></Link> {/* Added bi-boombox icon */}
            <form className="d-flex ">
                <input className="form-control me-1 " type="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-success " type="submit">Buscar</button>
            </form>
            <div className="ms-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/register">Registrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/login">Iniciar Sesión</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
