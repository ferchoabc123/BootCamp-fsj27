import React from 'react';
import { Link } from 'react-router-dom';

const Registrar = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Registrar</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input type="text" className="form-control" id="username" placeholder="Ingresa tu nombre de usuario" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu número de teléfono" />
                </div>
                <Link to="/login" className="btn btn-primary w-100">Confirmar</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
