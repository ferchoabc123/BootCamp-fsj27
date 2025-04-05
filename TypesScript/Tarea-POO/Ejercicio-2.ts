class Calculadora{
    private X:number;
    private Y:number;
    
    constructor(ParamX:number,ParamY:number){
        this.X = ParamX;
        this.Y = ParamY;
    }
    cambiar(X,Y){
        this.X = X;
        this.Y = Y;
    }

    Sumar(){
        let resultado = this.X + this.Y;
        console.log(resultado);
    }

    Resta(){
        let resultado = this.X - this.Y;
        console.log(resultado);
    }

    Multiplicar(){
        let resultado = this.X * this.Y;
        console.log(resultado);
    }

    Dividir(){
        let resultado = this.X / this.Y;
        console.log(resultado);
    }

    Potencia(){
        let resultado = this.X**this.Y;
        console.log(resultado);
    }

    Factorial(){
        let resultado = this.X;
        let X = this.X;
        let Y = this.Y;
        while (X > 1){
            X -= 1;
            resultado *= X;
        }
        console.log("X: "+resultado);
        resultado = Y;
        while (Y > 1){
            Y -= 1;
            resultado *= Y;
        }
        console.log("Y: "+resultado)
    }
}

let calcu = new Calculadora(5,2);
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

calcu.cambiar(10,3);

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