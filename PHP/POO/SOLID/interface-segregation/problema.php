<?php 

    interface Avion{
        function arrancarMotor();
        function volar();
        function acelerar();
        function aterrizar();
        function guardarRuedas();
    }

    class Boeing implements Avion {
        function arrancarMotor(){}
        function volar(){}
        function acelerar(){}
        function aterrizar(){}
        function guardarRuedas(){}

    }

    class AvionPapel implements Avion {
        function arrancarMotor(){}
        function volar(){}
        function acelerar(){}
        function aterrizar(){}
        function guardarRuedas(){}
    }

    class AvionJugete implements Avion{
        function arrancarMotor(){}
        function volar(){}
        function acelerar(){}
        function aterrizar(){}
        function guardarRuedas(){}
    }
?>