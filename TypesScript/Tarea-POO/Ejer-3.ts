class Canción{
    public titulo:string;
    public genero:string;
    private autor:string;

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }


    constructor(ParamT:string, ParamG:string){
        this.titulo = ParamT;
        this.genero = ParamG;
    }

    mostrar(){
        let info = `Titulo: ${this.titulo} \n Color: ${this.genero} \n Autor: ${this.autor}`;
        console.log(info);
    }


}

let cancion = new Canción("Ex´s & Oh´s","Rock-Pop");
cancion.setAutor("Ellen King");
let autor = cancion.getAutor();
cancion.mostrar();
console.log("/-------------/")
console.log(autor);