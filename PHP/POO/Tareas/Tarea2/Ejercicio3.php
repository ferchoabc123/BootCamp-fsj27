<?php 
//metodo Decorator

interface Arma {
    function nombre();
    function Daño();
}

class Espada implements Arma {
    public function nombre() {
        return "Espada";
    }

    public function Daño() {
        return 10;
    }
}

class Arco implements Arma {
    public function nombre() {
        return "Arco";
    }

    public function Daño() {
        return 8;
    }
}

class ArmaDecorator implements Arma {
    protected $arma;

    public function __construct(Arma $arma) {
        $this->arma = $arma;
    }

    public function nombre() {
        return $this->arma->nombre();
    }

    public function Daño() {
        return $this->arma->Daño();
    }
}

class personaje {
    private $arma;

    public function __construct(Arma $arma) {
        $this->arma = $arma;
    }

    public function atacar() {
        return "Atacas con " . $this->arma->nombre() . " infligiendo " . $this->arma->Daño() . " puntos de daño.";
    }

    public function EquiparArma(Arma $nuevaArma) {
        $this->arma = $nuevaArma;
    }
}

$espada = new Espada();
$arco = new Arco();
$personaje = new personaje($espada);
echo $personaje->atacar() . "\n"; // Atacas con Espada infligiendo 10 puntos de daño.
$personaje->EquiparArma($arco);
echo $personaje->atacar() . "\n"; // Atacas con Arco infligiendo 8 puntos de daño.
?>