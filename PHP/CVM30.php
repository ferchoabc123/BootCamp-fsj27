<?php 
// algoritmo de busqueda binaria
function binarySearch($arr,$target){
    //se recorre el array comparando hasta encontrar un elemento que coincida con el target
    // y una vez encontrado se retorna el indice del elemento
    // si no se encuentra el elemento, se retorna un mensaje indicando que no existe
    for($i = 0; $i < count($arr); $i++){
        if($arr[$i] == $target){
            return "el {$target} existe en el array & esta en la posicion {$i}"; // Retorna el índice del elemento encontrado
        }
    }
}

$arr = [1,7,6,10,5,3,2,4,8,9];
$target = 10;
$result = binarySearch($arr, $target);
print_r($result);



// Happy Number
function happyNumber($numero){
    $vistos = [];
    $n = $numero;
    //funcionara mientras el numero no sea 1 y este no se haya visto en el array $vistos
    // !isset($vistos[$numero]) ayuda a evitar ciclos infinitos, si el numero ya ah salido antes
    //y vuelve a salir entonces se entendera que este en un ciclo inifinto
    while ($n != 1 && !isset($vistos[$n])) {
        $vistos[$n] = true;
        $suma = 0;
        //str_split retorna un array con cada caracter de la cadena
        //ejemplo 100 -> [1,0,0]
        $cadena = str_split((string)$n);
        //para cadada cifra de la cadena lo hace numero y lo va elevando al cuadrado y sumando
        foreach ($cadena as $digito) {
            //ejemplo 100 -> 1^2 + 0^2 + 0^2 = 1
            //ejemplo 1 9 -> 1^2 + 9^2 = 82
            $suma += pow((int)$digito, 2);
            $n = $suma;
        }
       
    }
    //se verifica si el numero es feliz o no
    if ($n == 1) {
        return "El {$numero} es un número feliz";
    } else {
        return " El {$numero} no es un número feliz";
    }
}

$numero = 2;
$resultado = happyNumber($numero);
print_r($resultado);

// FizzBuzz
function FizzBuzz ($number){

$result =[];

    if ($number<=1){

        echo "Ingrese un numero mayor a 1";

        return;

    }else if($number >1 && $number <= 100){ // aplico si numero es mayor a uno y le pongo el limite de 100;

        for($i=1; $i <= $number; $i++){ // declaro i, y si i es menor a mi numero ingresado que se incremente

            if($i % 3 == 0 && $i % 5 == 0){ // si i es dvisible entre 3 y 5

                $result[] = "FizzBuzz";

            } else if($i % 3 == 0){ // si i es dvisible entre 3

                $result[] = "Fizz";

            } else if ($i % 5 == 0){ // si i es dvisible entre 5

                $result[] = "Buzz";

            } else{

                $result [] = (string)$i; //si no cumplen ninguno de los casoas anteriores, que $result sea igual a i pero en string, para imprimir solo el numero

            }

        }

    }

    return $result; // retorno la variable result ya con su nuevo valor

}

print_r (FizzBuzz(15));

//insertion sort
function insertionSort1($n, $arr) {

    $key = $arr[$n - 1];

    $i = $n - 2;

    while ($i >= 0 && $arr[$i] > $key) {

        $arr[$i + 1] = $arr[$i]; // Movemos a la derecha

        printArray($arr);

        $i--;

    }

    $arr[$i + 1] = $key; // Insertamos el número donde corresponde

    printArray($arr);

}

function printArray($arr) {

    echo implode(" ", $arr) . "\n";

}

// Ejemplo:

$n = 7;

$arr = [1, 2, 4, 5, 7, 8, 6];

 

insertionSort1($n, $arr);
?>