export class producto {
    private id: number;
    private nombre: string;
    private precio: number;
    private marca: string;
    private imagen: string;
    private descripcion: string;
    private calificacion: number;
    private cantidad: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getCalificacion(): number {
        return this.calificacion;
    }

    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }


    constructor(nombre: string, precio: number, marca: string, imagen: string, descripcion: string, calificacion: number, cantidad: number, id: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.calificacion = calificacion;
        this.cantidad = cantidad;
        this.id = id;
    }

}