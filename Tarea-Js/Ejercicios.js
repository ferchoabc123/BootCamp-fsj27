// Ejercicio-1 //
let respuesta;
while(respuesta != "0"){
   respuesta = prompt("Que ejercicio del 1 al 10 quiere revisar? [en caso de querer finalizar escriba '0'.");

   let Ejercicio = respuesta;
   switch(Ejercicio){

      case "1":
         //ejercicio-1//
         let edad = prompt("Cual es la edad a verificar?");

         function evaluar_edad(ed){
            ed = parseInt(edad);
    
            if(ed >= 18){
               alert("la persona es mayor de edad.")
            }
            else
               alert("la persona es menor de edad.")
         }
         evaluar_edad(edad);
      break;
      
      case "2":
         //ejercicio-2//
         let total = 0;
         let num;
         let evaluados =["Examen","tareas","Asistencias","Investigación"];
         let nota;
         let infoAlumno =[]
         let ponderacion = {
            "Examen":0.2,// 20%
            "tareas":0.4,// 40%
            "Asistencias":0.1,// 10%
            "Investigación":0.3// 30%
         };
         let datoAlumno = prompt("Escriba el nombre del alumno.");
         infoAlumno.push(datoAlumno);
         dato = prompt("Escriba el carnet del Alumno.");
         infoAlumno.push(datoAlumno);

         for ( let i = 0 ; i < evaluados.length; i++){
            nota = prompt("introduzca la nota de " + evaluados[i])
            num = parseInt(nota);

            total += num * ponderacion[evaluados[i]];

         }
         infoAlumno.push(total);
         alert("Nombre: "+ infoAlumno[0]+ " Carnet: " + infoAlumno[1]+ " Nota final: " + infoAlumno[2]);
      break;
      
      case "3":
         //ejercicio-3//
         let DatosEmpleado = [];
         let AumentoSalarial = 0;
         let nombre = prompt("Nombre del trabajador?");
         let salario = parseInt(prompt ("Salario del trabajador?"));
         let categoria = prompt("cual es la categoria del trabajador?");
         let Aumentos = {
            "A": 0.15, // 15%
            "B": 0.3,  // 30%
            "C": 0.1,  // 10%
            "D": 0.2   // 20%
         };
         
         AumentoSalarial =  salario * Aumentos[categoria.toUpperCase()];
         DatosEmpleado.push(nombre);
         DatosEmpleado.push(salario);
         DatosEmpleado.push(categoria.toUpperCase());
         DatosEmpleado.push(AumentoSalarial);

         alert("nombre: "+ DatosEmpleado[0]+ " Salario: " + DatosEmpleado[1] + " Categoria: "+ DatosEmpleado[2]+ " AumentoSalarial: "+ DatosEmpleado[3])

      break;

      case "4":
         let num1 = parseInt(prompt("Digite el primer numero..."))
         let num2 = parseInt(prompt("Digite el segundo numero..."))
         let resultado;
         function EvaluarMayor( num1, num2){
            
           if(num1 > num2){
            return num1
           }
           else
            return num2
         }
         resultado = EvaluarMayor(num1,num2);
         alert("el numero mayor es: "+ resultado)
      break;

      case "5":

      break;

      case "6":
         let origen = prompt("Cual es el origen?");
         let destino = prompt("Cual es el destino?");
         let precio = parseInt(prompt("Cual es el precio?"));
         let resultados;
         function calcularDescuento(origen, destino, precio){
         
            
            origen = origen.toLowerCase();
            destino = destino.toLowerCase();
          
            let descuento = 0;
          
            if (origen === "la ciudad de palma") {
              if (destino === "costa del sol") {
                descuento = 0.05; // 5%
              } else if (destino === "panchimalco") {
                descuento = 0.10; // 10%
              } else if (destino === "puerto el triunfo") {
                descuento = 0.15; // 15%
              }
            }
          
            let precioFinal = precio - (precio * descuento);
            
            return precioFinal;
         }
        resultados = calcularDescuento(origen, destino,precio);
        alert(resultados)

      break;

      case "7":
         function analizarNumeros() {
            let negativos = 0;
            let positivos = 0;
            let multiplos15 = 0;
            let sumaPares = 0;
            let n;
          
            for (let i = 0; i < 10; i++) {
               n = i + 1
              let numero = parseInt(prompt("Ingrese el número: "+ n));
          
              if (numero < 0) {
                negativos++;
              } else if (numero > 0) {
                positivos++;
              }
          
              if (numero % 15 === 0) {
                multiplos15++;
              }
          
              if (numero % 2 === 0) {
                sumaPares += numero;
              }
            }
            alert("Resultados:\nNegativos: "+negativos+"\nPositivos: "+positivos+"\nMúltiplos de 15: "+multiplos15+"\nSuma de pares: "+sumaPares)
         } 
         analizarNumeros()
      break;
      
      case "8":
         let numero = prompt("digite el numero...");
         let x;
         let multiplos = [];
         
         for(let i= 1; i <= 10;i++){
            x = numero * i;        
            multiplos.push(x);
         }
         alert(multiplos)
      break;

      case "9":
         function convertirTemperatura() {
            
            let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
            
            let fahrenheit = (celsius * 9/5) + 32;
          
            
            let mensaje = "";
          
            if (fahrenheit >= 14 && fahrenheit < 32) {
              mensaje = "Temperatura baja";
            } else if (fahrenheit >= 32 && fahrenheit < 68) {
              mensaje = "Temperatura adecuada";
            } else if (fahrenheit >= 68 && fahrenheit < 96) {
              mensaje = "Temperatura alta";
            } else {
              mensaje = "Temperatura desconocida";
            }

            alert("Temperatura en Fahrenheit: "+ fahrenheit + "°F\n"+mensaje)
         }
         convertirTemperatura()
      break;

      case "10":
         function calcularPromedios() {
            
            function obtenerEdades(cantidad, turno) {
              let edades = [];
              let y;
              for (let i = 0; i < cantidad; i++) {
                y = i + 1;
                let edad = parseInt(prompt("Ingrese la edad del estudiante "+ y +"del turno: "+ turno));
                edades.push(edad);
              }
              return edades;
            }
          
            
            let edadesManana = obtenerEdades(5, "mañana");
            let edadesTarde = obtenerEdades(6, "tarde");
            let edadesNoche = obtenerEdades(11, "noche");
          
            // Función para calcular el promedio de un arreglo de edades
            function calcularPromedio(edades) {
              let suma = edades.reduce((total, edad) => total + edad, 0);
              return suma / edades.length;
            }
          
            
            let promedioManana = calcularPromedio(edadesManana);
            let promedioTarde = calcularPromedio(edadesTarde);
            let promedioNoche = calcularPromedio(edadesNoche);
            
            let turnoMayorPromedio = "";
            let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
          
            if (mayorPromedio === promedioManana) {
              turnoMayorPromedio = "mañana";
            } else if (mayorPromedio === promedioTarde) {
              turnoMayorPromedio = "tarde";
            } else {
              turnoMayorPromedio = "noche";
            }
            alert("El turno con mayor promedio de edades es: "+ turnoMayorPromedio)
          }
          calcularPromedios()
      break;



         

         

   }
}  

