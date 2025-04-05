import {Chauchis} from "./Chauchis"
import {useState} from "react"
let nombre = "jesus"
export function Saludos(){
    //estado
    const[nombre, setNombre]=useState("Jesus");

   
    return <>
    <h2>como andas? {nombre}</h2>
    <h3>Soy el componenete</h3>

    <button onClick={() => {setNombre("Hector")}}>Magia</button>

    <Chauchis nombre = {nombre} />
   </>
}