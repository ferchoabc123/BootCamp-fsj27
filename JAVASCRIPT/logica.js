let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
let resultado = sumar(numero1,numero2)
alert(resultado);
console.log(resultado)

function sumar(a,b){
    a = parseInt(a)
    b = parseInt(b)
    return a + b
}