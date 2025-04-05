var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var persona = /** @class */ (function () {
    function persona(paramN, paramA, paramD, paramT, paramE) {
        this.nombre = paramN;
        this.apellido = paramA;
        this.direccion = paramD;
        this.telefono = paramT;
        this.edad = paramE;
    }
    persona.prototype.Edad = function () {
        if (this.edad >= 18) {
            console.log("Usted es mayor de edad");
        }
        else {
            console.log("Usted es menor de edad");
        }
    };
    return persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad) {
        return _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log(this.sueldo);
    };
    Empleado.prototype.mostrar = function () {
        var info = "Nombre: ".concat(this.nombre, " \nApellido: ").concat(this.apellido, " \nEdad: ").concat(this.edad, " \nDirecci\u00F3n: ").concat(this.direccion, " \nTelefono: ").concat(this.telefono);
        console.log(info);
    };
    return Empleado;
}(persona));
var Juan = new Empleado("juan", "melarda", "septimacalle-bis poniente residencial colonias de san marco", 71381071, 22);
Juan.cargarSueldo(1750);
Juan.imprimirSueldo();
Juan.mostrar();
//en esta linea se puede ver que no se puede crear un objeto directamente de la clase.
//let pedro = new persona("juan","melarda","septimacalle-bis poniente residencial colonias de san marco",71381071,22);
