<?php 
//Variables reservadas de PHP
// $_FILES
//$_GET
//$_POST
// $_SESSION
// $_COOKIE

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>practica de variables</title>
</head>
<body>
    <h1> Practica de variable superglobales</h1>

    <form action="procesamientodedatos.php" method ="POST">
        <label for="nombre">Nombre:</label>dda
        <input type="text" name="nombre" id="nombre" required>
        <br>
        <label for="edad">Edad:</label>
        <input type="number" name="edad" id="edad" required>
        <br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>