import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import {Home } from './components/Home'
function App() {
  

  return (
    <>
    {/* BrowserRouter lo que hace es activar react router y poder enrutar*/}
      <BrowserRouter>
      {/*Routes va a contener todas las rutas */}
      <Routes>
        {/*Aca van las rutas individuales & les dira que componenetes  tiene que cargar cuando se vaya a la ruta. */}
        <Route path='/' element={<Home />} />


      </Routes>
      
      </BrowserRouter>
      
      
      
    </>
  )
}

export default App
