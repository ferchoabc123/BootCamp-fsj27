import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: '#007bff' }}>
          FirebaseApp
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: '#007bff' }}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register" style={{ color: '#007bff' }}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/session" style={{ color: '#007bff' }}>
                Session
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
