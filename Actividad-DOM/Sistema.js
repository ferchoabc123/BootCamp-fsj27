const lista = document.getElementById("lista-palabra");
const listaP = ["manzana","pera","tomate","limon","aguacate","kiwi","sandia","banana","fresa","mora","baya","pitahaya","mango","melon","cereza"];
let intentos = 1;
let cantaciertos = 0;
function ElegirPalabra(){
    let palabra = listaP[Math.floor(Math.random()*15)];
    console.log(palabra);
    return palabra;
}
let palabraelegida = ElegirPalabra();
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
cifrar(palabraelegida);

function checkear(){
    const LetraElegida = document.getElementById("letra");
    let nuevoL;
    let img;
    let letra; 
    let aciertos;
    let adivino = false;
    
    if(LetraElegida.value.includes(" ") || LetraElegida.value == ""){
        alert("No se permiten espacios");
    }else{
        if(LetraElegida.value.length >= 1){
            LetraElegida.value = LetraElegida.value.slice(0,1);
            letra = LetraElegida.value.toLowerCase();
        }
        let palabra = palabraelegida.split("");
        let incognitas = palabra.length;
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
    LetraElegida.value = null;
   
    
}
