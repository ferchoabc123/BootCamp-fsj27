<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="card shadow">
                    <div class="card-body">
                        <h4 class="card-title mb-4 text-center">Agregar Libro</h4>
                        <!-- el onsubmit hace que despues de ser enviado el form nos devuelva a la vista de index.php -->
                        <form action="/PHP/POO/Proyecto_Aerolinea/Tarea1/index.php" method="post">
                            <div class="mb-3">
                                <label for="titulo" class="form-label">Titulo</label>
                                <input type="text" class="form-control" id="titulo" name="titulo" required>
                            </div>
                            <div class="mb-3">
                                <label for="autor" class="form-label">Autor</label>
                                <input type="text" class="form-control" id="autor" name="autor" required>
                            </div>
                            <div class="mb-3">
                                <label for="genero" class="form-label">Genero</label>
                                <input type="text" class="form-control" id="genero" name="genero" required>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>