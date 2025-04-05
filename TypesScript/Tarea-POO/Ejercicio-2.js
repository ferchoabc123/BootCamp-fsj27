var Calculadora = /** @class */ (function () {
    function Calculadora(ParamX, ParamY) {
        this.X = ParamX;
        this.Y = ParamY;
    }
    Calculadora.prototype.cambiar = function (X, Y) {
        this.X = X;
        this.Y = Y;
    };
    Calculadora.prototype.Sumar = function () {
        var resultado = this.X + this.Y;
        console.log(resultado);
    };
    Calculadora.prototype.Resta = function () {
        var resultado = this.X - this.Y;
        console.log(resultado);
    };
    Calculadora.prototype.Multiplicar = function () {
        var resultado = this.X * this.Y;
        console.log(resultado);
    };
    Calculadora.prototype.Dividir = function () {
        var resultado = this.X / this.Y;
        console.log(resultado);
    };
    Calculadora.prototype.Potencia = function () {
        var resultado = Math.pow(this.X, this.Y);
        console.log(resultado);
    };
    Calculadora.prototype.Factorial = function () {
        var resultado = this.X;
        var X = this.X;
        var Y = this.Y;
        while (X > 1) {
            X -= 1;
            resultado *= X;
        }
        console.log("X: " + resultado);
        resultado = Y;
        while (Y > 1) {
            Y -= 1;
            resultado *= Y;
        }
        console.log("Y: " + resultado);
    };
    return Calculadora;
}());
var calcu = new Calculadora(5, 2);
calcu.Sumar();
console.log("/--------------------/");
calcu.Resta();
console.log("/--------------------/");
calcu.Multiplicar();
console.log("/--------------------/");
calcu.Dividir();
console.log("/--------------------/");
calcu.Potencia();
console.log("/--------------------/");
calcu.Factorial();
console.log("/--------------------/");
calcu.cambiar(10, 3);
calcu.Sumar();
console.log("/--------------------/");
calcu.Resta();
console.log("/--------------------/");
calcu.Multiplicar();
console.log("/--------------------/");
calcu.Dividir();
console.log("/--------------------/");
calcu.Potencia();
console.log("/--------------------/");
calcu.Factorial();
console.log("/--------------------/");
