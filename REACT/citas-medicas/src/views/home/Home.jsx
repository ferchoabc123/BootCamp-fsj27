import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Image with text to the right */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img 
            src="https://www.centromedicoescalon.com/wp-content/uploads/2024/12/banner-nuevo.jpg" 
            alt="Placeholder" 
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p style={{ color: 'black', fontWeight: 'bold' }}>ATENCIÓN INTEGRAL 24/7</p>
          <h2 style={{ fontSize: '2.5rem', color: '#0056b3' }}>Bienvenido a Citas Médicas</h2>
          <p style={{ color: '#87CEEB' }}>¡Cuida de ti y tu bebé con nuestro plan Mom&Baby!</p>
          <p>
            -Diferentes formas de pago incluyendo Tasa Cero con tarjeta de crédito.
          </p>
          <p>
            -Cuidado a la madre y recién nacido con personal especializado.
          </p>
          <Link to="/registrar">
            <button 
              style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                fontWeight: 'bold', 
                border: 'none', 
                padding: '10px 60px', 
                borderRadius: '5px' 
              }}
            >
              Reservar
            </button>
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="text-center py-4" style={{ backgroundColor: '#0056b3', color: '#ffffff' }}>
        <input 
          type="text" 
          placeholder="Buscar médico..." 
          style={{
            width: '80%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            backgroundColor: '#87CEEB',
            color: '#000',
          }}
        />
        <p className="mt-2" style={{ color: '#ffffff', fontWeight: 'bold' }}>
          Busca un médico por su nombre, apellido o especialidad
        </p>
      </div>
    </div>
  );
};

export default Home;
