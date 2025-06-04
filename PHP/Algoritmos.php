<?php
/*algoritmo para hagarrar un celular

paso1: Tener un celular
paso2: Saber donde esta el celular
paso3: abrir la mano 
paso4: Agarrar por los lados el celular con 4 dedos en un lado y el pulgar en el otro lado
paso5: cerrar la mano haciendo que el celular quede encima de los cuatros dedos y el pulgar como soporte 
paso6: posicionar el dedo indice por la parte inferior del celular para evitar caida
paso 7 separar un poco los 3 dedos que quedan atras del celular que deberian de ser anular corazon e indice 
paso8: Asegurarse que la punta de los dedo anular y corazon sostengan el celular por el lado en donde esta el pulgar 
y mover el indice mas arriba de la parte de atras
paso9:liberar el pulgar y dejarlo enfrente de la pantalla para usarlo en el celular
paso10: levantarlo a una altura correspondiente a los ojos y que no de molestia en el cuello
*/
// algoritmo de ordenamiento burbuja
function burbuja($arr){
    if(count($arr) <= 1){
        return "no se puede ordenar un arreglo de 1 o menos elementos";
    }
    $largo = count($arr);

    for($i = 0; $i < $largo; $i++){
        for($j = 0; $j < $largo - 1;$j++){
            if($arr[$j] > $arr[$j + 1]){
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
            
        }
    }
    return $arr;
}

$arreglo = [5, 4, 3, 2, 1];

print_r(burbuja($arreglo));

function InsertionSort($arr){
    if(count($arr) <= 1){
        return "necesito un arreglo de 2 o mas elementos";
    }
    
        for($i = 1; $i < count($arr); $i++){
            $aux = $arr[$i];
            $j = $i - 1;


            while($j >= 0 && $arr[$j] > $aux){
                $arr[$j + 1] = $arr[$j];
                $j--;
            }
            $arr[$j + 1] = $aux;
        }
        return $arr;
    }
    

$arreglo = [6,5,3,1,8,7,2,4];
print_r(InsertionSort($arreglo));

function mergeSort($arr){
    if(count($arr) <= 1){
        return $arr;
    }
    //obtener cuando es la mitad 
    $mid = floor(count($arr) / 2);
    //dividir el arreglo en dos mitades
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    $left = mergeSort($left);
    $right = mergeSort($right);

    return merge($left, $right);
}

function merge($left, $right){
    $result = [];
    
    while(count($left) > 0 && count($right) > 0){
        if($left[0] <= $right[0]){
            array_push($result, array_shift($left));
        } else {
            array_push($result, array_shift($right));
        }
    }

    while(count($left) > 0){
        array_push($result, array_shift($left));
    }

    while(count($right) > 0){
        array_push($result, array_shift($right));
    }

    return $result;
}
$array = [6,5,3,1,8,7,2,4];
print_r(mergeSort($array));
?>