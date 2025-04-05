class Cabezera_Pagina {

    private titulo:string;
    private color:string;
    private fuente:string;
    private posicion:string;

    Estilo(titulo:string,color:string,fuente:string) {
        this.titulo = titulo;
        this.color = color
        this.fuente = fuente
    }

    Centrado(posicion:string){
        this.posicion = posicion
    }

    mostrar(){
        let info = "Titulo: " + this.titulo + "\nColor: " + this.color + "\nfuente: " + this.fuente + "\nPosición: " + this.posicion 
        console.log(info);
    }
}

let pagina = new Cabezera_Pagina;
pagina.Estilo("Estoico el Heroe","Rojo","Comic-Sans");
pagina.Centrado("centrado")
pagina.mostrar();