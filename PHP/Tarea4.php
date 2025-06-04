<?php 

// Ejercicio-1 
//bubble sort
function burbuja($arr){
    if(count($arr) <= 1){
        return "no se puede ordenar un arreglo de 1 o menos elementos";
    }
    $largo = count($arr);

    for($i = 0; $i < $largo; $i++){
        for($j = 0; $j < $largo - 1;$j++){
            if($arr[$j] < $arr[$j + 1]){
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
            
        }
    }
    return $arr;
}

$arreglo = [5, 4, 3, 2, 1,5,4,-1,-2,7,10];
print_r(burbuja($arreglo));

//Ejercicio-2
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
$arregloLetra = ['d', 'a', 'c', 'b', 'e'];
print_r($arregloLetra);
print_r(mergeSort($arregloLetra));

// Ejercicio-3
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
$listaDeNombres = ['Juan', 'Pedro', 'Ana', 'Maria', 'Luis'];
print_r($listaDeNombres);
print_r(InsertionSort($listaDeNombres));
?>