<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>indice de php</title>
</head>
<body>
    <?php 
    /*php es un lenguaje de programacion que es compilado por el apache que es su interprete o traductor */
    // esta orientado a objetos en otras palabras funciona por poo o oop

    echo "Holawas desde php <br>";
    
    echo "recuerda poner siempre ',' php si lo necesita"."\n";

    echo "re bien nota: solo sirve para el run code el <br>";

    // Variables en php
    $variable1 = "soy la primera variable en php";
    print($variable1);

    echo "<br>";
    //template string de php
    $templateString = "{$variable1} perros";
    echo $templateString;

    echo "<br>";
    //Operadores matematicos en php
    $suma = 1 + 2;
    $resta = 3 - 1;
    $multiplicacion = 2 * 3; 
    $division = 6 / 2;
    $modulo = 5 % 2; // modulo o residuo de la division
    $exponente = 2 ** 3; // 2 elevado a la 3

    //Operadores de comparacion en php 
    $mayor = 1 > 2; // mayor que
    $menor = 1 < 2; // menor que
    $mayorIgual = 1 >= 2; // mayor o igual que
    $menorIgual = 1 <= 2; // menor o igual que
    $igual = 1 == 2; // igual que
    $igualIdentico = 1 === 2; // igual que y del mismo tipo
    $diferente = 1 != 2; // diferente que
    $diferenteIdentico = 1 !== 2; // diferente que y del mismo tipo


    //Operadores logicos en php
    $and = true && false; // and
    $or = true || false; // or
    $not = !true; // not

    //funciones en php
    function saludar($nombre){
        return "hola $nombre";
    }
    echo saludar("Andre"); // para llamar a la funcion utilizas el nombre de la funcion
    echo "<br>";
    // funciones anonimas en php
    $funcionAnonima = function($nombre){
        return "hola $nombre desde una funcion anonima";
    };
    echo $funcionAnonima("Andre");// para llamar ala funcion utilizas el nombre de la variable
    echo "<br>";
    //funcion flecha en php
    $funcionFlecha = fn($nombre) => "hola $nombre desde una funcion flecha";
    echo $funcionFlecha("Andre");// es para llamados cortos que no se utilizaran mas de 1 vez por lo general

    //Arrays en php
    $array = ["perro","Gato"];// array vacio
    print_r($array);// imprime el array
    print_r($array[0]); // imprime el primer elemento del array
    //palabras claves de arrays
    
    $longitud = count($array); // cuenta la cantidad de elementos en el array
    echo $longitud; // 3
    echo "<br>";

    $arrayPush = array_push($array, "pez"); // agrega un elemento al final del array
    echo $arrayPush; // 4
    echo "<br>";

    $arrayPop = array_pop($array); // elimina el ultimo elemento del array
    echo $arrayPop; // pez
    echo "<br>";

   $arrayUnshift = array_unshift($array, "tortuga"); // agrega un elemento al principio del array
    echo $arrayUnshift; // 5
    echo "<br>";

    $arrayShift = array_shift($array); // elimina el primer elemento del array
    echo $arrayShift; // tortuga
    echo "<br>";

    //Arrays indexados
    $arrayIndexado = [1,2,3,4,5]; 
    print_r($arrayIndexado); // imprime el array
    echo "<br>";
    //Arrays asociativos
    $arrayAsociativo = [
        "nombre" => "andre",
        "apellido" => "gonzalez",
        "edad" => 23,
        "ciudad" => "medellin"
    ];
    print_r($arrayAsociativo); // imprime el array asociativo
    
    //clase y objetos en php
    class Persona{
        //propiedades
        public $nombre;

        //constructor
        public function __construct($nombre){
            $this->nombre = $nombre;
        }

        public function respirar(){
            return "soy $this->nombre y estoy respirando";
        }
        
    }

    $persona = new Persona("andre"); // crea un objeto de la clase Persona

    class Stack {
        public $stack = [];

        function add($element) {
            array_push($this->stack, $element);
        }

        function remove() {
            return array_pop($this->stack);
        }
    }

    ?>
</body>

</html>