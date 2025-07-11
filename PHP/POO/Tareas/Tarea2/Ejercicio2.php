<?php 
//metodo Adapter

interface Api {
    public function Actualizar($archivo);
}

interface ProcesarArchivo {
    public function analizar($archivo);
}

class Window10Api implements Api {
    public function Actualizar($archivo) {
        echo "Actualizando archivo para Windows 10: $archivo \n";
        $archivo = str_replace(".txt", ".W10", $archivo);
        return $archivo;
    }
  
}

class Adapter implements ProcesarArchivo {
    private $api;

    public function __construct(Api $api) {
        $this->api = $api;
    }

    public function analizar($archivo) {
       return $this->api->Actualizar($archivo);
    }
}

class ActualizadorArchivos{
    public function actualizar(ProcesarArchivo $adaptador, $archivo) {
         $archivo = $adaptador->analizar($archivo);
         return "Archivo actualizado correctamente a: $archivo \n";
        
    }

}

$api = new Window10Api();
$adaptador = new Adapter($api);
$Programa = new ActualizadorArchivos();
echo $Programa->actualizar($adaptador, "documento.txt");





?>