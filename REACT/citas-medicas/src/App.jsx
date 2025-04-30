import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registrar from './views/registrar/registrar';
import Login from './views/citas/login';
import { UserDataProvider } from './context/UserDataContext';
function App() {
  return (
    <UserDataProvider>
      {/* BrowserRouter lo que hace es activar react router y poder enrutar */}
    <Router>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
        {/* Footer */}
        <Footer />
    </Router>
    </UserDataProvider>
  );
}

export default App;
