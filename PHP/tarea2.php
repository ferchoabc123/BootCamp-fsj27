<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php
   /* 1.Problema de Lista Invertida:
Escribe un programa que tome un array de números y devuelva una nueva lista que contenga los mismos elementos en orden inverso.*/

$Array = [1, 2, 3, 4, 5];
$ArrayInvertido = array_reverse($Array);
print_r("El array invertido es:");
print_r($ArrayInvertido);
echo "<br>";

/*2.Problema de Suma de Números Pares:
Crea un script que sume todos los números pares en un array de números enteros. */
// [ as ]: sirve para iterar sobre arrays y objetos. Toma el valor del elemento actual.
    $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
    $sumaPares = 0; 
    foreach ($numeros as $numero) {
        if ($numero % 2 == 0) {
            $sumaPares += $numero;
        }
    }
    echo "La suma de los números pares es: $sumaPares";
    echo "<br>";

    /*3.Problema de Frecuencia de Caracteres:
Implementa una función que tome una cadena de texto y devuelva un array asociativo que muestre la frecuencia de cada carácter en la cadena. */

$ArrayAsociativo = [];
$cadena = "un dia vi una vaca sin cola vestida de uniforme";
$clave = "";
$contador = 0;
$cadenaSinEspacios = str_replace(" ", "", $cadena);
$longitud = strlen($cadenaSinEspacios);
for ($i = 0; $i < $longitud; $i++) {
    $clave = $cadenaSinEspacios[$i];
    for ($j = 0; $j < $longitud; $j++) {
        if ($clave == $cadenaSinEspacios[$j]) {
            $contador++;
        }
    }
    $ArrayAsociativo[$clave] = $contador;
    $contador = 0;                                                          
   }
print_r("La frecuencia de cada caracter es:");
print_r($ArrayAsociativo);





    ?>
    
</body>
</html>