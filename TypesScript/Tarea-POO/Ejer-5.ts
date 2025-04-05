abstract class persona{
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: number;
    edad: number;

    constructor(paramN:string,paramA:string,paramD:string,paramT:number,paramE:number){
        this.nombre = paramN;
        this.apellido = paramA;
        this.direccion = paramD;
        this.telefono = paramT;
        this.edad = paramE;
    }

    Edad(){
        if(this.edad >= 18){
            console.log("Usted es mayor de edad");
        }else{
            console.log("Usted es menor de edad");
        }
    }

    abstract mostrar():void;

}

class Empleado extends persona{
    sueldo:number;

    constructor(nombre:string,apellido:string,direccion:string,telefono:number,edad:number){
       super(nombre,apellido,direccion,telefono, edad);
    }

    cargarSueldo(sueldo:number){
        this.sueldo = sueldo;
    }

    imprimirSueldo(){
        console.log(this.sueldo);
    }

    mostrar(){
        let info = `Nombre: ${this.nombre} \nApellido: ${this.apellido} \nEdad: ${this.edad} \nDirección: ${this.direccion} \nTelefono: ${this.telefono}`
        console.log(info);
    }
}

let Juan = new Empleado("juan","melarda","septimacalle-bis poniente residencial colonias de san marco",71381071,22);
Juan.cargarSueldo(1750);
Juan.imprimirSueldo();
Juan.mostrar();

//en esta linea se puede ver que no se puede crear un objeto directamente de la clase.
//let pedro = new persona("juan","melarda","septimacalle-bis poniente residencial colonias de san marco",71381071,22);