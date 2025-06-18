<?php 

  /* 
    
    Clase abierta para EXTENSION
    Cerrada para MODIFICACION

  */

   class Vehiculo{
    protected $vel = 0;

    function aumentarVelocidad(){
        $this->vel += 3;
    }
   }

    class ConductorHumilde{
        function acelerar(Vehiculo $auto){
            $auto->aumentarVelocidad();
        }
    }

    class Mercedes extends Vehiculo {
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 10;
        }
    }

    class RollRoyce extends Vehiculo {
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 5;
        }
    }

    $jairo = new ConductorHumilde();
    $primerAutoHumilde = new Mercedes();
    $segundoAutoHumilde = new RollRoyce();

    $jairo->acelerar($primerAutoHumilde);
    $jairo->acelerar($segundoAutoHumilde);
?>