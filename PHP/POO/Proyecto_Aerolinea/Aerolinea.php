<?php 

class Aerolinea {
    //encapsulamiento de atributos
    private $nombre_aerolinea;
    private $cantidad_aviones;
    private $tipo_aerolinea;
    private $id_aerolinea;
    //constructor
    public function __construct($nombre_aerolinea, $cantidad_aviones, $tipo_aerolinea,$id_aerolinea) {
        $this->nombre_aerolinea = $nombre_aerolinea;
        $this->cantidad_aviones = $cantidad_aviones;
        $this->tipo_aerolinea = $tipo_aerolinea;
        $this->id_aerolinea = $id_aerolinea;
    }
    //metodos get y set
    public function getIdAerolinea() {
        return $this->id_aerolinea;
    }
    public function setIdAerolinea($id_aerolinea) {
        $this->id_aerolinea = $id_aerolinea;
    }
    public function getNombreAerolinea() {
        return $this->nombre_aerolinea;
    }
    public function setNombreAerolinea($nombre_aerolinea) {
        $this->nombre_aerolinea = $nombre_aerolinea;
    }
    public function getCantidadAviones() {
        return $this->cantidad_aviones;
    }
    public function setCantidadAviones($cantidad_aviones) {
        $this->cantidad_aviones = $cantidad_aviones;
    }
    public function getTipoAerolinea() {
        return $this->tipo_aerolinea;
    }
    public function setTipoAerolinea($tipo_aerolinea) {
        $this->tipo_aerolinea = $tipo_aerolinea;
    }
}
?>