<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

class Node5 {
    public $value;
    public $right;
    public $left;
    public function __construct($valor) {
        $this->value = $valor;
        $this->left = null;
        $this->right = null;
    }
}

class RecorrerArborl{
    public $root;
    public $resultado; 

    function __construct(){
        $this->root = null;
        $this->resultado = []; 
    }

    function insertar($value){
        $NuevoNodo = new Node5($value);
        if($this->root === null){
            $this->root = $NuevoNodo;
            return $this->root;
        }

        $current = $this->root;

        while(true){

        if($NuevoNodo->value < $current->value){
            if($current->right === null){
                $current->right = $NuevoNodo;
                return $NuevoNodo;
            }else{
                $current = $current->right;
            }
        }else{
            if($current->left === null){
                $current->left = $NuevoNodo;
                return $NuevoNodo;
            }else{
                $current = $current->left;
            }
        }
      }
    }
   

    function preOrden($nodo = null){
        $Nodo = $nodo;
        if($Nodo === null){
            $Nodo = $this->root;
            if($Nodo === null) return "este arbol esta vacio";
        }
        
        if($Nodo->right !== null && !in_array($Nodo->right->value,$this->resultado)){
            
                $this->preOrden($Nodo->right);
            
        }else if($Nodo->left !== null && !in_array($Nodo->left->value,$this->resultado)){
            
                $this->preOrden($Nodo->left);
            
        }else{
            array_push($this->resultado, $Nodo->value);  

            if($this->root !== null){
            if(!in_array($this->root->value, $this->resultado)){
                $this->preOrden();
            }
           }  
        }
    }
}

   


$Arbol = new RecorrerArborl();
$Arbol->insertar(6);
$Arbol->insertar(3);
$Arbol->insertar(8);
$Arbol->insertar(1);
$Arbol->insertar(5);
$Arbol->insertar(9);
$Arbol->insertar(4);
$Arbol->insertar(7);
$Arbol->insertar(2);
$Arbol->preOrden();
print_r($Arbol->resultado);

?>
    
</body>
</html>


