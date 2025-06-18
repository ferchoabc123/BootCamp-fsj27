<?php 

//no respeta el single-Responsability
//no respeta el dependency-inversion (X)
//no respeta el open-closed 
interface Pedido{
    
    function MostrarTotal();
    
}

class ProcesadorPedidos{

    function procesar( Pedido $tipoOrden){
        $tipoOrden->MostrarTotal();
    }
}

class Digital implements Pedido{

     protected $total;

    function __construct($total)
    {
        $this->total = $total;
    }

    function MostrarTotal(){
        echo "El total del pedido digital es: " . $this->total . "\n";
    }
}

class Local implements Pedido{

     protected $total;

    

    function __construct($total)
    {
        $this->total = $total;
    }

    function MostrarTotal(){
        echo "El total del pedido digital es: " . $this->total . "\n";
    }

}

class Membresia implements Pedido{

     protected $total;

    function __construct($total)
    {
        $this->total = $total;
    }

    function MostrarTotal(){
        echo "El total del pedido digital es: " . $this->total . "\n";
    }

}

$PedidoDigital = new Digital(100);
$PedidoLocal = new Local(200);
$PedidoMembresia = new Membresia(300);
$procesador = new ProcesadorPedidos();
$procesador->procesar($PedidoDigital);
$procesador->procesar($PedidoLocal);
$procesador->procesar($PedidoMembresia);







?>