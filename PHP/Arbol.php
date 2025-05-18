<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 

class Node{
    public $value;
    public $left;
    public $right;
    public function __construct($value){
        $this->value = $value;
        $this->left = null;
        $this->right = null;
    }
}

class ArbolBinario{
    public $root;

    function __construct(){
        $this->root = null;
    }

    function insertar($value){
        $NuevoNodo = new Node($value);
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

    function remover($dato){
        $this->root = $this->borrarNodo($dato , $this->root);
    }

    function borrarNodo($dato, $nodo){

        if($nodo === null){
            return null;
        }

        if($dato > $nodo->value){
            $nodo->left = $this->borrarNodo($dato, $nodo->left);
        }else if($dato < $nodo->value){
            $nodo->right = $this->borrarNodo($dato, $nodo->right);
        }else{

            if($nodo->left === null){
                return $nodo->right;
            }else if($nodo->right === null){
                return $nodo->left;
            }

            
        }
        return $nodo;

    }
}

$Arbolito = new ArbolBinario();
$Arbolito->insertar(5);
$Arbolito->insertar(3);
$Arbolito->insertar(2);
$Arbolito->insertar(8);
$Arbolito->insertar(10);
print_r($Arbolito);
$Arbolito->remover(2);
$Arbolito->remover(8);
print_r($Arbolito);
?>
    
</body>
</html>