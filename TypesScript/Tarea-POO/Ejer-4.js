var Cuenta = /** @class */ (function () {
    function Cuenta(paramNombre, paramCantidad, paramTipo, paramNumero) {
        this.nombre = paramNombre;
        this.tipo_de_cuenta = paramTipo;
        this.número_de_cuenta = paramNumero;
        this.cantidad = paramCantidad;
    }
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5.00) {
            console.log("el valor a depositar debe ser mayor a $5.00");
        }
        else {
            console.log("se ha depositado correctamente y la cantidad depositada es: ".concat(this.cantidad));
        }
    };
    Cuenta.prototype.retirar = function (cantidad) {
        if (cantidad >= 5.00) {
            if (this.cantidad >= cantidad) {
                this.cantidad = this.cantidad - cantidad;
                console.log("se ah retirado: ".concat(cantidad, ", el saldo restante es: ").concat(this.cantidad));
            }
            else {
                console.log("Saldo insuficiente");
            }
        }
        else {
            console.log("El saldo minimo a retirar son 5 dolares");
        }
    };
    Cuenta.prototype.mostrar = function () {
        var info = "Nombre: ".concat(this.nombre, " \nTipo de cuenta: ").concat(this.tipo_de_cuenta, " \nN\u00FAmero de la cuenta: ").concat(this.número_de_cuenta);
        console.log(info);
    };
    return Cuenta;
}());
var cuenta = new Cuenta("Fernando", 2.50, "ahorro", 303013111235);
cuenta.depositar();
cuenta.retirar(2.50);
cuenta.mostrar();
console.log("/-------------------/");
var cuenta2 = new Cuenta("Andre", 10, "ahorro", 30301314355566);
cuenta2.depositar();
cuenta2.retirar(5);
cuenta2.mostrar();
