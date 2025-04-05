var Animal = /** @class */ (function () {
    function Animal(nombreparam, edadParam, especieParam, tamañoParam, colorParam) {
        this.nombre = nombreparam;
        this.edad = edadParam;
        this.especie = especieParam;
        this.tamaño = tamañoParam;
        this.color = colorParam;
    }
    return Animal;
}());
var puflito = new Animal("puflito", 2, "perro", "pequeño", "blanco");
console.log(puflito);
puflito.nombre = "max";
puflito.color = "negro";
puflito.tamaño = "mediano";
console.log(puflito);
var persona = /** @class */ (function () {
    function persona(nombreParam, edadParam) {
        this.nombre = nombreParam;
        this.edad = edadParam;
    }
    persona.prototype.mostrarDatos = function () {
        console.log("Nombre" + this.nombre + " Edad:" + this.edad);
    };
    return persona;
}());
var personita = new persona("katia", 23);
console.log(personita);
