<?php 
class Libros {
    // Atributos
    private $titulo;
    private $autor;
    private $Genero;
    private $id_libro;

    // Constructor
    public function __construct($titulo, $autor, $Genero, $id_libro) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->Genero = $Genero;
        $this->id_libro = $id_libro;
    }

    // Métodos Getters y Setters
    public function getTitulo() {
        return $this->titulo;
    }
    public function setTitulo($titulo) {
        $this->titulo = $titulo;
    }
    public function getAutor() {
        return $this->autor;
    }
    public function setAutor($autor) {
        $this->autor = $autor;
    }
    public function getGenero() {
        return $this->Genero;
    }
    public function setGenero($Genero) {
        $this->Genero = $Genero;
    }
    public function getIdLibro() {
        return $this->id_libro;
    }
    public function setIdLibro($id_libro) {
        $this->id_libro = $id_libro;
    }
   
}


?>