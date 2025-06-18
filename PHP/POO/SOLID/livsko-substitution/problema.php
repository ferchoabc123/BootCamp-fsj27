<?php 

    class Persona{
        function comer(){}

        function respirar(){}

        function dormir(){}

        function tomarAwa(){}
    }

    class Programador extends Persona{  // OK

    }

    class Bebe extends Persona{
        function tomarAwa(){
            return new Exception("Un bebe no TOMA ACWA");
        }
    }
?>