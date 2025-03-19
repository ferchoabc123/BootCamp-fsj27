let OpcPiedra = document.getElementById("btnPiedra");
let OpcPapel = document.getElementById("btnPapel");
let OpcTijera = document.getElementById("btnTijera");
let resultado;

console.log(OpcPiedra);
console.log(OpcPapel);
console.log(OpcTijera);

function OpcionElegida(opcionU){
    const opciones =["Piedra","Papel","Tijera"];
    console.log("El usuario eligio")
    console.log(opcionU)
    console.log("la opcion elegida de la maquina es:");
    let EleccionDelaPC = opciones[Math.floor(Math.random()*3)];
    console.log(EleccionDelaPC);

    if(opcionU === EleccionDelaPC){
        resultado = "Empate";
        console.log(resultado);
    }else if(
    (opcionU === "Piedra" && EleccionDelaPC === "Tijera") ||
    (opcionU === "Papel" && EleccionDelaPC === "Piedra") ||
    (opcionU === "Tijera" && EleccionDelaPC === "Papel")
    ){
        resultado = "Ganaste!";
        console.log("Ganaste!");
    }else
    {
        resultado = "Perdiste!!";
        console.log("Perdiste!!");0
    }

    document.getElementById("resultado").innerText = `Elegiste: ${opcionU} - la pc eligio: ${EleccionDelaPC} \n ${resultado}` ;
}

    

