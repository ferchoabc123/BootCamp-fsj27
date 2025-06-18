<?php 

    class Persona{
        function comer(){}

        function respirar(){}

        function dormir(){}

    }

    interface PersonaQueToma {

        function tomarAwa();
    }

    interface PersonaLaburadora{
        function trabajar();
    }

    class Programador extends Persona implements PersonaLaburadora, PersonaQueToma {  // OK
        function trabajar(){}
        function tomarAwa(){}

    }

    class Bebe extends Persona{

    }
?>