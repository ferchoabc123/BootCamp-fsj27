var Cabezera_Pagina = /** @class */ (function () {
    function Cabezera_Pagina() {
    }
    Cabezera_Pagina.prototype.Estilo = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    Cabezera_Pagina.prototype.Centrado = function (posicion) {
        this.posicion = posicion;
    };
    Cabezera_Pagina.prototype.mostrar = function () {
        var info = "Titulo: " + this.titulo + "\nColor: " + this.color + "\nfuente: " + this.fuente + "\nPosición: " + this.posicion;
        console.log(info);
    };
    return Cabezera_Pagina;
}());
var pagina = new Cabezera_Pagina;
pagina.Estilo("Estoico el Heroe", "Rojo", "Comic-Sans");
pagina.Centrado("centrado");
pagina.mostrar();
