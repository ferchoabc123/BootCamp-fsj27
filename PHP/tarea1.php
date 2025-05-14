<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    /*Problema de la serie Fibonacci:
Escribe una función llamada generar Fibonacci que reciba un número n como parámetro y genere los primeros n términos de la serie Fibonacci. La serie comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores. */
    function generarfibonacci($n){
        $fibonacci = [0,1];
        for ($i = 2; $i < $n; $i++) {
            $fibonacci[$i] = $fibonacci[$i-1] + $fibonacci[$i - 2];
        }
        return $fibonacci;
    }
    $array = generarfibonacci(10);
    print_r($array);

    /*Problema de números Primos:
Crea una función llamada esPrimo que determine si un número dado es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. */
    function esPrimo($numero){
        if ($numero < 2) {
            return false;
        }
        for ($i = 2; $i < $numero; $i++) {
            if ($numero % $i == 0) {
                return "no es primo";
            }
        }
        return "es primo";
    }
    $resultado = esprimo(33);
    print_r($resultado);

    /*Problema de Palíndromos:
Implementa una función llamada esPalindromo que determine si una cadena de texto dada es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual en ambas direcciones. */
    function esPalindromo($texto){ 
        $texto = strtolower($texto); // para que el texto sea todo en minuscula y no de problemas las mayusculas
        $textoSinEspacios = str_replace(" ", "", $texto);// eliminar los espacios
        $longitud = strlen($textoSinEspacios);
        for ($i = 0; $i < $longitud / 2; $i++) {
            if ($textoSinEspacios[$i] != $textoSinEspacios[$longitud - $i - 1]) {
                return "no es palindromo";
            }
        }
        return "es palindromo";
    }
    ?>
    
</body>
</html>