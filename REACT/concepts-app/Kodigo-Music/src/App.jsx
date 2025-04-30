import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';
import Registrar from './components/Registrar'; // Import Registrar component
import Login from './components/Login'; // Import Login component

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cuerpo />} /> {/* Replace Home with Cuerpo */}
          <Route path="/register" element={<Registrar />} /> {/* Add Registrar route */}
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
