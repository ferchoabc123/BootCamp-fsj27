class Animal{

    nombre: string;
    edad: number;
    especie: string;
    tamaño: string;
    color: string;

    constructor(nombreparam:string, edadParam:number, especieParam:string, tamañoParam:string, colorParam:string){
        this.nombre = nombreparam;
        this.edad = edadParam;
        this.especie = especieParam;
        this.tamaño = tamañoParam;
        this.color = colorParam;
    }
}

let puflito =new Animal("puflito",2,"perro","pequeño","blanco");
console.log(puflito);

puflito.nombre = "max";
puflito.color = "negro";
puflito.tamaño = "mediano";
console.log(puflito);



class Persona {
    protected nombre:string;
    public edad:number;
    private dui?: string;

    constructor(nombreParam:string, edadParam:number, duiParam?:string){
        this.nombre = nombreParam;
        this.edad = edadParam;
        this.dui = duiParam;
    }

    mostrarDatos(){
        console.log("Nombre"+this.nombre+" Edad:"+this.edad);
    }

    get getDuit():string|undefined{
        return this.dui;
    }

        set setAge(edadParam:number){
            if(edadParam < this.edad){
                throw new console.error("HEY! no podes cumplir años negativos");
            }
            this.edad = edadParam;
        }
} 


class Programador extends Persona{

    lenguajeDeProgramacion: string[];

    constructor(nombreParam:string, edadParam:number, duiParam?:string){

        super(nombreParam,edadParam,duiParam);
        this.lenguajeDeProgramacion = ["javascript","typescript","PHP"];
    }


}

let programador = new Programador("Juan",22,"00445426-7");

let personita = new Persona("katia",23,"12345678-0");
console.log(personita);

personita.mostrarDatos();