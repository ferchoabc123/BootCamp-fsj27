<?php
require_once 'Libros.php';
session_start();

// Iniciar la sesión
if (!isset($_SESSION['libros'])) {
    $_SESSION['libros'] = [];
}
$libros = $_SESSION['libros'];

// Crear un libro
if (isset($_POST['titulo'], $_POST['autor'], $_POST['genero'])) {
    $titulo = $_POST['titulo'];
    $autor = $_POST['autor'];
    $genero = $_POST['genero'];
    $id_libro = rand(0, 1000); // Generar un ID único para el libro

    // Instanciar la clase Libros
    $libro = new Libros($titulo, $autor, $genero, $id_libro);

    array_push($libros, $libro);
    // Mostrar el libro creado
    $_SESSION['libros'] = $libros;

    header("Location: /PHP/POO/Proyecto_Aerolinea/Tarea1/index.php");
}

// Eliminar un libro
if (isset($_GET['delete'])) {
    // Verificar si se ha enviado el ID del libro a eliminar
    $id_libro = $_GET['delete'];
    // Buscar el libro por su ID y eliminarlo
    foreach ($libros as $key => $libro) {
        if ($libro->getIdLibro() == $id_libro) {
            unset($libros[$key]);
            break;
        }
    }
    // Actualizar la sesión con los libros restantes
    $_SESSION['libros'] = $libros;
    header("Location: /PHP/POO/Proyecto_Aerolinea/Tarea1/index.php");
}

//Editar un libro
$editando = false;
$libroEditar = null;
$editKey = null;

// Detectar si se va a editar un libro
if (isset($_GET['edit'])) {
    $id_libro = $_GET['edit'];
    foreach ($libros as $key => $libro) {
        if ($libro->getIdLibro() == $id_libro) {
            $editando = true;
            $libroEditar = $libro;
            $editKey = $key;
            break;
        }
    }
}

// Guardar cambios de edición
if (isset($_POST['editar_libro']) && isset($_POST['titulo'], $_POST['autor'], $_POST['genero'], $_POST['id_libro'])) {
    foreach ($libros as $key => $libro) {
        if ($libro->getIdLibro() == $_POST['id_libro']) {
            $libros[$key] = new Libros($_POST['titulo'], $_POST['autor'], $_POST['genero'], $_POST['id_libro']);
            $_SESSION['libros'] = $libros;
            header("Location: /PHP/POO/Proyecto_Aerolinea/Tarea1/index.php");
            exit;
        }
    }
}
// Eliminar el libro anterior si se está editando para evitar duplicados
if ($editando && $libroEditar !== null && isset($editKey)) {
    unset($libros[$editKey]);
    $_SESSION['libros'] = $libros;
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libreria</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar inicio -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#">BibloTex</a>
            <div class="mx-auto">
                <form class="d-flex" action="#" method="get" onsubmit="return false;">
                    <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar">
                    <button class="btn btn-outline-primary" type="submit">Buscar</button>
                </form>
            </div>
            <div>
                <a class="nav-link fw-bold" href="/PHP/POO/Proyecto_Aerolinea/Tarea1/componentes/Agregar.php">Agregar</a>
            </div>
        </div>
    </nav>
    <!-- Navbar fin -->

    <div class="container my-4">
        <!--Si las variables editando y libro no estan vacias se mostrara un form para proporcionar la nueva info
        se utiliza endif porque no estoy escribiendolo dentro de PHP solamente y sirve como un limite para saber
        hasta adonde aplica el if-->
        <?php if ($editando && $libroEditar): ?>
            <div class="mb-4">
                <h4>Editar libro</h4>
                <form method="post" class="row g-3">
                    <input type="hidden" name="id_libro" value="<?php echo ($libroEditar->getIdLibro()); ?>">
                    <div class="col-md-4">
                        <label class="form-label">Título</label>
                        <input type="text" class="form-control" name="titulo" value="<?php echo ($libroEditar->getTitulo()); ?>" required>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Autor</label>
                        <input type="text" class="form-control" name="autor" value="<?php echo ($libroEditar->getAutor()); ?>" required>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Género</label>
                        <input type="text" class="form-control" name="genero" value="<?php echo ($libroEditar->getGenero()); ?>" required>
                    </div>
                    <div class="col-12 mt-3">
                        <button type="submit" name="editar_libro" class="btn btn-success">Guardar cambios</button>
                        <a href="index.php" class="btn btn-secondary">Cancelar</a>
                    </div>
                </form>
            </div>
        <?php endif; ?>
        <div class="border border-dark p-4">
            <!-- Contenido del contenedor aquí -->
            <ul class="list-unstyled d-flex flex-row flex-wrap justify-content-center gap-3 m-0 p-0">
                <?php if (!empty($libros)): ?>
                    <!-- Si hay libros, se muestran en tarjetas 
                     endforeach como estoy escribiendo principalmente con html necesito delimitar
                     hasta adonde llega el foreach que se hace con PHP-->
                    <?php foreach ($libros as $libro): ?>
                        <li class="flex-fill" style="min-width: 220px; max-width: 250px;">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title"><?php echo ($libro->getTitulo()); ?></h5>
                                    <h6 class="card-subtitle mb-2 text-muted"><?php echo ($libro->getGenero()); ?></h6>
                                    <p class="card-text"><?php echo ($libro->getAutor()); ?></p>
                                    <p class="card-text"><small class="text-muted"><?php echo ($libro->getIdLibro()); ?></small></p>
                                    <div class="d-flex justify-content-between">
                                        <!-- se ven diferente al de la clase porque no estoy utilizando php directo para crearlas sino que solo lo utilizo en la parte especifica-->
                                         <!--El otro esta dentro de un echo este no, esta hecho principalmente de html -->
                                        <a href="?edit=<?php echo($libro->getIdLibro()); ?>" class="btn btn-sm btn-warning">Editar</a>
                                        <!--el onclick retorna un mensaje solo de seguridad por si en verdad se quiere eliminar-->
                                        <a href="?delete=<?php echo ($libro->getIdLibro()); ?>" class="btn btn-sm btn-danger" onclick="return confirm('¿Seguro que deseas eliminar este libro?');">Eliminar</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    <?php endforeach; ?>
                <?php else: ?>
                    <li class="flex-fill text-center text-muted">No hay libros registrados.</li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
     
</body>
</html>