
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar /> {/* Add Navbar component */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
