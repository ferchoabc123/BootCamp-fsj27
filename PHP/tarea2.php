<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 
class Node {
        public $value;
        public $next;

        function __construct($value) {
            $this->value = $value;
            $this->next = null;
        }
    }

    class LinkedList {
        public $head; // cabeza de la lista
        
        function __construct() {
            $this->head = null;
        }

        function add($value){
            $newNode = new Node($value);
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

        function contador(){
            $ayudante = $this->head;
            $contador = 0;
            if($ayudante === null){
                return "La lista esta vacia, no hay nada que recorrer";
            }else{
                $contador +=1;
                while($ayudante->next !== null){
                    $ayudante = $ayudante->next;
                    $contador += 1;
                }
            }
            return $contador;
        }

        
    }

    $lista = new LinkedList();
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

?>
    

</body>
</html>