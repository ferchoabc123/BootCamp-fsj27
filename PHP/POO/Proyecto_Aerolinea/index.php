<?php 
require_once 'Aerolinea.php';
session_start();

// Iniciar la sesión
if(!isset($_SESSION['aerolineas'])){
   $_SESSION['aerolineas'] = [];
}
$aerolineas = $_SESSION['aerolineas'];

//Crear una aerolinea
if(isset($_POST['nombre'],$_POST['cantidad_aviones'],$_POST['tipo_aerolinea'])){

$nombre = $_POST['nombre'];
$cantidad_aviones = $_POST['cantidad_aviones'];
$tipo_aerolinea = $_POST['tipo_aerolinea'];
$id_aerolinea = rand(0,1000); // Generar un ID único para la aerolinea

//Instanciar la clase Aerolinea
$aerolinea = new Aerolinea($nombre, $cantidad_aviones, $tipo_aerolinea,$id_aerolinea);

array_push($aerolineas, $aerolinea);
// Mostrar la aerolinea creada
$_SESSION['aerolineas'] = $aerolineas;

header("Location: /PHP/POO/Proyecto_Aerolinea/index.php");
}
print_r($_GET);
// Eliminar una aerolinea

if(isset($_GET['delete'])){
    // Verificar si se ha enviado el ID de la aerolinea a eliminar
    $id_aerolinea = $_GET['delete'];
    // Buscar la aerolinea por su ID y eliminarla
    foreach($aerolineas as $key => $aerolinea){
        if($aerolinea->getIdAerolinea() == $id_aerolinea){
            unset($aerolineas[$key]);
            break;
        }
    }
    // Actualizar la sesión con las aerolineas restantes
    $_SESSION['aerolineas'] = $aerolineas;
    header("Location: /PHP/POO/Proyecto_Aerolinea/index.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aerolinea tatamulko</title>
</head>
<body>
    <h1>Bienvenidos a Aerolineas Tatamulko</h1>
    
    <form action="" method="post">

        <label for="nombre">Nombre_Aerolinea:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br><br>

        <label >Cantidad de aviones</label>
        <input type="number" id="cantidad_aviones" name="cantidad_aviones" required>
        <br><br>

        <label >Tipo de aerolinea</label>
        <select id="tipo_aerolinea" name="tipo_aerolinea" required>
            <option value="Cormecial">Nacional</option>
            <option value="Privado">Internacional</option>
            <option value="Carga">Carga</option>
        </select>
        <br><br>
        <button type="submit">Enviar</button>
    </form>

    <!-- Mostrar las aerolineas creadas -->
    <h2>Aerolineas creadas:</h2>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Nombre Aerolinea</th>
                    <th>Cantidad de Aviones</th>
                    <th>Tipo de Aerolinea</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($aerolineas as $aerolinea){ 
                    echo"
                    <tr>
                    <td>{$aerolinea->getNombreAerolinea()}</td>
                    <td>{$aerolinea->getCantidadAviones()}</td>
                    <td>{$aerolinea->getTipoAerolinea()}</td>
                    <td>{$aerolinea->getIdAerolinea()}</td>
                    <td>
                    <a href= '?editar={$aerolinea->getIdAerolinea()}'>Editar</a>
                    <a href='?delete={$aerolinea->getIdAerolinea()}'>Eliminar</a>
                    </td>
                    
                    </tr>
                    ";
                }?>
            </tbody>
        </table>
    </main>
</body>
</html>