import './style.css'
import { producto } from "./clases/producto";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> hola </h1>

    <h2>Agregar un nuevo producto </h2>
    <form id="form-add-product">
      <label>Id del producto:</label>
      <input type="text" id="inp-id"/>
      <label>Nombre del producto:</label>
      <input type="text" id="inp-nombre"/>
      <label> Precio del producto:</label>
      <input type="text" id="inp-precio" />
      <label>Marca:</label>
      <input type="text" id="inp-marca"  />
      <label>Imagen:</label>
      <input type="text" id="inp-imagen" />
      <label>Descripcion:</label>
      <input type="text" id="inp-descripcion" />
      <label>Calificacion:</label>
      <input type="text" id="inp-calificacion" />
      <label>Cantidad:</label>
      <input type="text" id="inp-cantidad" />

      <button type="submit">Agregar producto </button>
    </form>
    <ul id="lista_productos">

    </ul>

  </div>
`

//agregar un nuevo producto

let form = document.getElementById("form-add-product") as HTMLFormElement;
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = (document.getElementById("inp-id") as HTMLInputElement).value;
  let nombre = (document.getElementById("inp-nombre") as HTMLInputElement).value;
  let precio = (document.getElementById("inp-precio") as HTMLInputElement).value;
  let marca = (document.getElementById("inp-marca") as HTMLInputElement).value;
  let imagen = (document.getElementById("inp-imagen") as HTMLInputElement).value;
  let descripcion = (document.getElementById("inp-descripcion") as HTMLInputElement).value;
  let calificacion = (document.getElementById("inp-calificacion") as HTMLInputElement).value;
  let cantidad = (document.getElementById("inp-cantidad") as HTMLInputElement).value;

let Producto = new producto(nombre, parseFloat(precio),marca,imagen,descripcion,parseFloat(calificacion),parseFloat(cantidad),parseInt(id));
console.log(Producto)

let lista_productos = document.getElementById("lista_productos") as HTMLUListElement;
let li = document.createElement("li");

li.innerHTML = `
<h3>${Producto.getNombre()}</h3>

<p>Precio: ${Producto.getPrecio()}</p>

<p>Marca: ${Producto.getMarca()}</p>

<img src="${Producto.getImagen()}" alt="${Producto.getNombre()}" />

<p>Descripcion: ${Producto.getDescripcion()}</p>

<p>Calificacion: ${Producto.getCalificacion()}</p>

<p>Cantidad: ${Producto.getCantidad()}</p>

<button id="Btn-${Producto.getId()}" >Eliminar</button>
`
lista_productos.append(li);


let btnEliminar = document.getElementById(`Btn-${Producto.getId()}`) as HTMLButtonElement;
btnEliminar.onclick = () => { li.remove()};

}) 