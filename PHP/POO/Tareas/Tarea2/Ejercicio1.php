<?php 

//metodo Factory

interface Enemigo {
    function atacar();
    function velocidad();
}

class Eskeleto implements Enemigo {
    public function atacar() {
        return "El esqueleto ataca con su espada. Inflige 5 puntos de daño.";
    }
    

    public function velocidad() {
        return "La velocidad del esqueleto es de 5 puntos. A menos que corras como usain bolt, te recomiendo prepararte.";
    }
}

class Zombie implements Enemigo {
    public function atacar() {
        return "El zombie muerde con fuerza. Inflige 20 puntos de daño.";
    }

    public function velocidad() {
        return "La velocidad del zombie es de 2 puntos. Creo que correr seria una excelente idea.";
    }
}

abstract class GenerarEnemigo {
    abstract public function crearEnemigo($dificultad): Enemigo;

    public function IniciarJuego($default = "fácil") {
        $enemigo = $this->crearEnemigo($default);
        echo $enemigo->atacar() . "\n";
        echo $enemigo->velocidad() . "\n";
    }

}

class Juego extends GenerarEnemigo {
    public function crearEnemigo($dificultad): Enemigo {
        if($dificultad == "fácil") {
            return new Eskeleto();
        } elseif ($dificultad == "difícil") {
            return new Zombie();
        } else {
            throw new Exception("Dificultad no válida. Debe ser 'fácil' o 'difícil'.");
        }
    }
}

$partida = new Juego();
$partida->IniciarJuego("difícil"); // dejar en blanco para probar la opcion facil

?>