<?php 
    //Los modulos de alto nivel no deben depender de los de bajo nivel
    //Sino que ambos deben depender de abstracciones 


    interface IAdaptadorBD{
        function connect();
    }

    class ConexionBD{
        //Representacion de una base de datos

        private $adaptador;


        function __construct(IAdaptadorBD $adaptador)
        {
            $this->adaptador = $adaptador;
            
        }

        function conectarBD(){
            $this->adaptador->connect();
            
        }
    }

    class MySQL implements IAdaptadorBD{
        //credenciales 
        function connect(){
            //Metodo para conectar a la base con las credenciales
        }
    }

    class Firebase implements IAdaptadorBD{
        //credenciales 
         function connect(){
            //Metodo para conectar a la base con las credenciales
        }
    }
?>