const lista = document.getElementById("lista-palabra");
const listaP = ["manzana","pera","tomate","limon","aguacate","kiwi","sandia","banana","fresa","mora","baya","pitahaya","mango","melon","cereza"];
let intentos = 1;
let cantaciertos = 0;
//Determinar la palabra a adivinar.
function ElegirPalabra(){
    let palabra = listaP[Math.floor(Math.random()*15)];
    console.log(palabra);
    return palabra;
}
let palabraelegida = ElegirPalabra();
//Trasladar la palabra a la vista, guardar y cifrarla.
function cifrar(Palabra){
    let letra = Palabra.split("");
    let x;
    for(let i = 0; i < letra.length; i++){
        x = letra[i];
        const li = document.createElement("li");
        li.setAttribute("id" , i)
        li.textContent = "_____";
        li.style.color = "white";
        lista.append(li)
    }
}
//se define la cantidad de letras que se debe adivinar
let incognitas = palabraelegida.length;
cifrar(palabraelegida);
//Cada vez que se presione el boton checkeara si la letra seleccionada esta dentro de la palabra o no.
function checkear(){
    const LetraElegida = document.getElementById("letra");
    let nuevoL;
    let img;
    let letra; 
    let aciertos;
    let adivino = false;
    //Elimina cualquier espacio que se llegue a ingresar en el input.
    if(LetraElegida.value.includes(" ") || LetraElegida.value == ""){
        alert("No se permiten espacios");
    }else{
        //Evita que lo ingresado en el input tengas más de 1 caracter.
        if(LetraElegida.value.length >= 1){
            LetraElegida.value = LetraElegida.value.slice(0,1);
            letra = LetraElegida.value.toLowerCase();
        }
        //Se divide la cadena de texto para evaluar si la letra ingresada esta dentro de la palabra y en cual posicion.
        //Evalua si adivino la palabra o si le faltan incognitas aun.
        let palabra = palabraelegida.split("");
        for(let i = 0; i < palabra.length; i++){
            if(letra === palabra[i]){
                aciertos = document.getElementById(i);
                aciertos.textContent = letra.toUpperCase();
                adivino = true;
                cantaciertos = cantaciertos + 1;
            }
            if(cantaciertos === incognitas){
                alert("ADIVINASTE LA PALABRA!!!")
                setTimeout(function(){
                    location.reload();
                },5000);
                break;
            }
        }
        //cada vez que presione el boton si no llega a adininar ninguna se le sumaran intentos hasta llegar a 6.
        if(!adivino){
            img = document.getElementById("img");
            intentos = intentos + 1;
            nuevoL = "imagenes/"+intentos+".png";
            img.src = nuevoL;
            
            if(intentos >= 6){
                alert("Más suerte a la proxima");
                setTimeout(function(){
                    location.reload();
                },1500);
                
            } 
        } 
    }
    //dejar vacio el input para recibir la siguiente letra.
    LetraElegida.value = null;
   
    
}
