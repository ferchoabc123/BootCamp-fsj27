<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 
//Ejercicio 1
class Node1 {
        public $value;
        public $next;

        function __construct($value) {
            $this->value = $value;
            $this->next = null;
        }
    }

    class Imprimir {
        public $head; // cabeza de la lista
        
        function __construct() {
            $this->head = null;
        }

        function add($value){
            $newNode = new Node1($value);
            if ($this->head === null) {
                $this->head = $newNode;
            } else {
                
                $current = $this->head;
                while ($current->next !== null) {
                    $current = $current->next;
                }
                $current->next = $newNode;
            }
        }
        // va recorriendo el arbol y siempre y cuando el nodo no sea nulo lo añadira a la lista
        function imprimirDatos(){
            $ayudante = $this->head;
            $datos = [];
            if($ayudante === null){
                return "la lista esta vacia";
            }else{
                while($ayudante !== null){
                     array_push($datos,$ayudante->value);
                     $ayudante = $ayudante->next;
                }
            }
            return $datos;
        }
    }

    $lista = new Imprimir();
    $lista->add(10);
    $lista->add(6);
    $lista->add(5);
    $lista->add(3);
    $lista->add(9);
    $lista->add(8);
    $lista->add(2);
    $lista->add(4);
    $lista->add(1);
    $lista->add(7);
    print_r($lista->imprimirDatos());

    //Ejercicio 2
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
        // Si no se pasa un nodo, se usa la raíz
        // si no existe raiz se retorna un mensaje
        if($Nodo === null){
            $Nodo = $this->root;
            if($Nodo === null) return "este arbol esta vacio";
        }
        // si el nodo derecho del nodo actual es diferente a nulo y el valor del nodo derecho del nodo actual
        // no se encuentra en el array resultado, se llama a la funcion preOrden con el nodo derecho
        if($Nodo->right !== null && !in_array($Nodo->right->value,$this->resultado)){
            
                $this->preOrden($Nodo->right);
        // si el nodo izquierdo del nodo actual es diferente a nulo y el valor del nodo izquierdo del nodo actual
        // no se encuentra en el array resultado, se llama a la funcion preOrden con el nodo izquierdo
        }else if($Nodo->left !== null && !in_array($Nodo->left->value,$this->resultado)){
            
                $this->preOrden($Nodo->left);
        // si el nodo no tiene mas hijos y su valor no esta en el array resultado, se agrega el valor del nodo.
        }else{
            array_push($this->resultado, $Nodo->value);  

            // si el valor de la raiz no esta en la lista(ya que sera el ultimo valor al agregarse)
            // se llama la funcion preOrden nuevamaente para recorrer el arbol
            // para iterar y agregar todos los valores del arbol
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

//Ejercicio 3
class Node3 {
        public $value;
        public $next;

        function __construct($value) {
            $this->value = $value;
            $this->next = null;
        }
    }

    class Contador {
        public $head; // cabeza de la lista
        
        function __construct() {
            $this->head = null;
        }

        function add($value){
            $newNode = new Node3($value);
            if ($this->head === null) {
                $this->head = $newNode;
            } else {
                
                $current = $this->head;
                while ($current->next !== null) {
                    $current = $current->next;
                }
                $current->next = $newNode;
            }
        }

        // va recorriendo el arbol y siempre y cuando el nodo no sea nullo ira sumando 1 al contador
        // y al final retornara el contador
        function contador(){
            $ayudante = $this->head;
            $contador = 0;
            if($ayudante === null){
                return "La lista esta vacia, no hay nada que recorrer";
            }else{
                
                while($ayudante !== null){
                    $ayudante = $ayudante->next;
                    $contador += 1;
                }
            }
            return $contador;
        }

        
    }

    $lista = new Contador();
    $lista->add(10);
    $lista->add(6);
    $lista->add(5);
    $lista->add(3);
    $lista->add(9);
    $lista->add(8);
    $lista->add(2);
    $lista->add(4);
    $lista->add(1);
    $lista->add(7);
    print_r($lista->contador());


//Ejercicio 4

class Node4 {
        public $value;
        public $next;

        function __construct($value) {
            $this->value = $value;
            $this->next = null;
        }
    }

    class CambiarValorLista {
        public $head; // cabeza de la lista
        
        function __construct() {
            $this->head = null;
        }

        function add($value){
            $newNode = new Node4($value);
            if ($this->head === null) {
                $this->head = $newNode;
            } else {
                
                $current = $this->head;
                while ($current->next !== null) {
                    $current = $current->next;
                }
                $current->next = $newNode;
            }
        }

        function cambiarValor($valor, $nuevoValor){
            $ayudante = $this->head;

            if($ayudante === null){
                return "La lista esta vacia, no hay nada que recorrer";
            }else{
                // recorre la lista hasta encontrar el nodo cuyo valor sea igual al $valor 
                //y cambia el valor de ese nodo por $nuevoValor
                while($ayudante !== null){
                    if($ayudante->value == $valor){
                        $ayudante->value = $nuevoValor;
                    }
                    $ayudante = $ayudante->next;
                }
            }
            return "El valor fue cambiado a 0";
        }
        
    }

$lista = new CambiarValorLista();
    $lista->add(6);
    $lista->add(8);
    $lista->add(5);
    $lista->add(3);
    $lista->add(9);
    $lista->add(2);
    $lista->add(4);
    $lista->add(1);
    $lista->add(7);
print_r($lista);
print_r($lista->cambiarValor(1, 0));
print_r($lista);

//Ejercicio 4
class Node6 {
    public $value;
    public $right;
    public $left;

    public function __construct($valor) {
        $this->value = $valor;
        $this->left = null;
        $this->right = null;
    }
}

class CambiarValorArbol{
    public $root;

    function __construct(){
        $this->root = null;
    }

    function insertar($value){
        $NuevoNodo = new Node6($value);
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
    function CambiarValor($valorActual, $nuevoValor){
        // Buscar el nodo con el valor actual y remplazarlo
        $nodo = $this->buscarNodo($this->root, $valorActual);
        if ($nodo !== null) {
            $nodo->value = $nuevoValor;
            return true;
        }
        // Si no se encuentra el nodo, retornar false
        return false;
    }
// recorre el arbol comparando el valor que se le traspasa en el parametro 
// al encontrar el nodo cuyo valor sea igual a $valor lo devuelve 
    function buscarNodo($nodo, $valor){
        if ($nodo === null) {
            return null;
        }
        if ($nodo->value == $valor) {
            return $nodo;
        }
        // para buscar a ambos lados
        // primero busca en el lado izquierdo y si no lo encuentra busca en el lado derecho
        $encontrado = $this->buscarNodo($nodo->left, $valor);
        if ($encontrado !== null) return $encontrado;
        return $this->buscarNodo($nodo->right, $valor);
    }
}

   


$Arbol = new CambiarValorArbol();
$Arbol->insertar(6);
$Arbol->insertar(5);
$Arbol->insertar(9);
$Arbol->insertar(3);
$Arbol->insertar(7);
$Arbol->insertar(10);
$Arbol->insertar(2);
$Arbol->insertar(4);
$Arbol->insertar(1);
print_r($Arbol);
$Arbol->CambiarValor(5, 8);
print_r($Arbol);



?>
    

</body>
</html>