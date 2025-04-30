
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './views/home/Home';
import {Login} from './views/session/components/Login';
import {Register} from './views/session/components/Register';
import Navbar from './components/Navbar'; // Import Navbar component
import { Session } from './views/session/Session';
import { UserDataProvider } from './context/UserDataContext';

function App() {
  return (
    <>
      <UserDataProvider> 

      {/* BrowserRouter lo que hace es activar react router y poder enrutar */}
      <BrowserRouter>
     
      {/* Add Navbar component */}
      <Navbar /> 

        {/* Routes va a contener todas las rutas */}
        <Routes>
          {/* Aca van las rutas individualmente y le va decir que componente tiene que cargar CUANDO SE VAYA A ESA RUTA */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
          <Route path="/session" element={<Session />}/>
        </Routes>
      
      
      </BrowserRouter>
      </UserDataProvider>
    </>
  );
}

export default App;



