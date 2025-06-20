<?php

// Interfaz Arma
interface Arma {
    public function usar(): string;
}

// Implementaciones concretas de armas
class Espada implements Arma {
    public function usar(): string {
        return "Ataca con una espada (10 puntos)";
    }
}

class Arco implements Arma {
    public function usar(): string {
        return "Dispara una flecha con el arco (15 puntos)";
    }
}

// Decorador base
abstract class ArmaDecorator implements Arma {
    protected $arma;

    public function __construct(Arma $arma) {
        $this->arma = $arma;
    }

    public function usar(): string {
        return $this->arma->usar();
    }
}

// Clase Personaje que puede cambiar de arma
class Personaje {
    private $arma;

    public function __construct(Arma $arma) {
        $this->arma = $arma;
    }

    public function atacar(): string {
        return $this->arma->usar();
    }

    public function cambiarArma(Arma $nuevaArma) {
        $this->arma = $nuevaArma;
    }
}

// Ejemplo de uso
$personaje = new Personaje(new Espada());
echo $personaje->atacar();
print("\n");
$personaje->cambiarArma(new Arco());
echo $personaje->atacar() ;
