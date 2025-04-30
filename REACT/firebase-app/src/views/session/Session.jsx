import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { auth } from "../../services/firebase/config"

export const Session = () => {
  const [typeForm, setTypeForm] = useState("");

  console.log(auth);
  
  return (
    <div className="container mt-4">
        <section className="row justify-content-center">
        <h1 className="text-center">Manejate la session pa</h1>
        <button className="btn btn-primary col-2 m-2 p-2" onClick={() => {setTypeForm("login")} }>Login</button>
        <button className="btn btn-success col-2 m-2 p-2" onClick={() => {setTypeForm("register")} }>Register</button>

        {/* Renderizado Condicional: Si se cumple la condicion 
        Mostramos un componente Login, SINO
        Se muestra el componente Register */}


        { typeForm === "login" ?  <Login /> : <Register /> }
        
        </section>
    </div>
  )
}