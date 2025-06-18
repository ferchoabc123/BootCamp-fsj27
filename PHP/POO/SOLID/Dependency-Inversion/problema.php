<?php 
    //Los modulos de alto nivel no deben depender de los de bajo nivel
    //Sino que ambos deben depender de abstracciones 

    class ConexionBD{
        //Representacion de una base de datos

        private $adaptador;
        private $adaptador2;

        function __construct()
        {
            $this->adaptador = new MySQL();
            $this->adaptador2 = new Firebase();
        }

        function conectarBD(){
            $this->adaptador->connect();
            $this->adaptador2->connect();
        }
    }

    class MySQL{
        //credenciales 
        function connect(){
            //Metodo para conectar a la base con las credenciales
        }
    }

    class Firebase{
        //credenciales 
         function connect(){
            //Metodo para conectar a la base con las credenciales
        }
    }
?>