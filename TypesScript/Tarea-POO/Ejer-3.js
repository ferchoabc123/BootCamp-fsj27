var Canción = /** @class */ (function () {
    function Canción(ParamT, ParamG) {
        this.titulo = ParamT;
        this.genero = ParamG;
    }
    Canción.prototype.getAutor = function () {
        return this.autor;
    };
    Canción.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Canción.prototype.mostrar = function () {
        var info = "Titulo: ".concat(this.titulo, " \n Color: ").concat(this.genero, " \n Autor: ").concat(this.autor);
        console.log(info);
    };
    return Canción;
}());
var cancion = new Canción("Ex´s & Oh´s", "Rock-Pop");
cancion.setAutor("Ellen King");
var autor = cancion.getAutor();
cancion.mostrar();
console.log("/-------------/");
console.log(autor);
