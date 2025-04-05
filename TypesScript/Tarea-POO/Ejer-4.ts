class Cuenta{
    private nombre:string;
    private cantidad:number;
    private tipo_de_cuenta:string;
    private número_de_cuenta:number;

    constructor(paramNombre:string,paramCantidad:number,paramTipo:string,paramNumero:number){
        this.nombre = paramNombre;
        this.tipo_de_cuenta = paramTipo;
        this.número_de_cuenta = paramNumero;
        this.cantidad = paramCantidad;
    }

    depositar(){
        if (this.cantidad < 5.00){
            console.log("el valor a depositar debe ser mayor a $5.00");
        }else{
            console.log(`se ha depositado correctamente y la cantidad depositada es: ${this.cantidad}`);
        }
    }

    retirar(cantidad:number){
        if(cantidad >= 5.00){
            if (this.cantidad >= cantidad ){
                this.cantidad = this.cantidad - cantidad;
                console.log(`se ah retirado: ${cantidad}, el saldo restante es: ${this.cantidad}`)
                }else{
                    console.log("Saldo insuficiente");
                }

            }else{
                console.log("El saldo minimo a retirar son 5 dolares");
            }


        }

        mostrar(){
            let info = `Nombre: ${this.nombre} \nTipo de cuenta: ${this.tipo_de_cuenta} \nNúmero de la cuenta: ${this.número_de_cuenta}`;
            console.log(info);
        }
}

let cuenta = new Cuenta("Fernando", 2.50,"ahorro",303013111235);
cuenta.depositar();
cuenta.retirar(2.50);
cuenta.mostrar();
console.log("/-------------------/")
let cuenta2 = new Cuenta("Andre", 10,"ahorro",30301314355566);
cuenta2.depositar();
cuenta2.retirar(5);
cuenta2.mostrar();