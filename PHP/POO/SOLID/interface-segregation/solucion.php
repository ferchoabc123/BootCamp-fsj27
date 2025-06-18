<?php 

    interface AvionReal{
        function arrancarMotor();
        function acelerar();
        function guardarRuedas();
    }

    interface AvionJuguete{
        function volar();
        function aterrizar();
    }

    class Boeing implements Avion,AvionJuguete {
        function arrancarMotor(){}
        function volar(){}
        function acelerar(){}
        function aterrizar(){}
        function guardarRuedas(){}

    }

    class AvionPapel implements AvionJuguete {
        function volar(){}
        function aterrizar(){}

    }


?>