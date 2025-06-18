<?php 

  /* 
    
    Clase abierta para EXTENSION
    Cerrada para MODIFICACION

  */


    class ConductorHumilde{
        function acelerar(RollRoyce $auto){
            $auto->aumentarVelocidad();
        }
    }

    class Mercedes{
        protected $vel = 0;

        function aumentarVelocidad(){
            $this->vel += 10;
        }
    }

    class RollRoyce{
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