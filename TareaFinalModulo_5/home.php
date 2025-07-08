<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExtraVago</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<!-- -->
<body>
    <style>
  .carousel-control-prev,
  .carousel-control-next {
    background-color: #343a40; /* Un fondo oscuro */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
    <!--Navbar-->
<header class="sticky-top">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ExtraVago</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!--Form-->
<div class="bg-dark p-3">
  <div class="container-fluid">
    <form class="row g-2 align-items-end">
      
      <div class="col-lg-3 col-md-12">
        <label for="destination" class="form-label text-white">Destino</label>
        <div class="input-group">
          <div class="input-group-text">📍</div>
          <input type="text" class="form-control" id="destination" placeholder="Buscar un destino...">
        </div>
      </div>

      <div class="col-lg-2 col-md-6">
        <label for="checkin" class="form-label text-white">Check-in</label>
        <div class="input-group">
            <div class="input-group-text">In</div>
            <input type="date" class="form-control" id="checkin">
        </div>
      </div>

      <div class="col-lg-2 col-md-6">
        <label for="checkout" class="form-label text-white">Check-out</label>
        <div class="input-group">
            <div class="input-group-text">Out</div>
            <input type="date" class="form-control" id="checkout">
        </div>
      </div>

      <div class="col-lg-4 col-md-12">
          <div class="row g-2">
              <div class="col-6">
                  <label for="adults" class="form-label text-white">Adultos</label>
                  <div class="input-group">
                      <div class="input-group-text">👥</div>
                      <input type="number" class="form-control" id="adults" min="1" value="2">
                  </div>
              </div>
              <div class="col-6">
                  <label for="children" class="form-label text-white">Niños</label>
                  <div class="input-group">
                      <div class="input-group-text">👶</div>
                      <input type="number" class="form-control" id="children" min="0" value="0">
                  </div>
              </div>
          </div>
      </div>

      <div class="col-lg-1 col-md-12 d-grid">
        <button type="submit" class="btn btn-primary">Buscar</button>
      </div>

    </form>
  </div>
</div>
</header>
<!--Tabla de opciones-->
<!--al dar click mostrara los resultados con la categoria mostrada-->
<!--carrucel de boostrap personalizado & con un script de funcionamiento abajo que proviene de boostrap-->
<div class="container py-4">
  <h2 class="mb-3">Explora nuestras categorías</h2>

  <div id="opcionesCarousel" class="carousel slide" data-bs-interval="false">
    
    <div class="carousel-inner">
      
      <div class="carousel-item active">
        <div class="d-flex justify-content-center gap-3">
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Playas</h5><p class="card-text">🌴</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Montañas</h5><p class="card-text">⛰️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Ciudades</h5><p class="card-text">🏙️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Lagos</h5><p class="card-text">🏞️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Desiertos</h5><p class="card-text">🏜️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="d-flex justify-content-center gap-3">
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Nevado</h5><p class="card-text">❄️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Cabañas</h5><p class="card-text">🏡</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Camping</h5><p class="card-text">⛺</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Tours</h5><p class="card-text">🗺️</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
          <div class="card text-center" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Rural</h5><p class="card-text">🚜</p><a href="#" class="btn btn-sm btn-outline-primary">Ver más</a></div></div>
        </div>
      </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#opcionesCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#opcionesCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>


<!--Contenedor en el que se podra ver el resultado de la busqueda // trae una plantilla de ejemplo-->

<!--No se deberia de ver hasta que se pase la informacion entonces alli lo modifican para que
hasta que no se precione el boton con info no se vea.-->
<main class="container py-4">
<div class="container py-4">

  <h2 class="mb-4">Resultados de tu Búsqueda</h2>

  <ul class="list-unstyled row g-4">

    <li class="col-lg-4 col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/400x250" class="card-img-top" alt="Imagen del destino">
        
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Título de la Propiedad</h5>
          
          <hr>

          <p class="card-text"><strong>Precio:</strong> $120.00 / noche</p>
          
          <p class="card-text"><strong>Personas:</strong> 4</p>
          
          <div class="d-flex justify-content-between align-items-center">
            <p class="card-text mb-0"><strong>Calificación:</strong></p>
            <span class="badge bg-primary fs-6">4.5 ⭐</span>
          </div>
          
          <div class="mt-auto pt-3">
            <!--<a href="#" class="btn btn-dark w-100">Ver Detalles</a>-->
          </div>
        </div>
      </div>
    </li>
    <li class="col-lg-4 col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/400x250/000/fff" class="card-img-top" alt="Imagen del destino">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Villa Frente al Mar</h5>
          <hr>
          <p class="card-text"><strong>Precio:</strong> $250.00 / noche</p>
          <p class="card-text"><strong>Personas:</strong> 8</p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="card-text mb-0"><strong>Calificación:</strong></p>
            <span class="badge bg-primary fs-6">4.5 ⭐</span>
          </div>
          <div class="mt-auto pt-3">
            <!--<a href="#" class="btn btn-dark w-100">Ver Detalles</a>-->
          </div>
        </div>
      </div>
    </li>

    <li class="col-lg-4 col-md-6">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/400x250/eee/333" class="card-img-top" alt="Imagen del destino">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Cabaña en la Montaña</h5>
            <hr>
            <p class="card-text"><strong>Precio:</strong> $95.00 / noche</p>
            <p class="card-text"><strong>Personas:</strong> 2</p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text mb-0"><strong>Calificación:</strong></p>
              <span class="badge bg-primary fs-6">4.5 ⭐</span>
            </div>
            <div class="mt-auto pt-3">
            <!--<a href="#" class="btn btn-dark w-100">Ver Detalles</a>-->
            </div>
          </div>
        </div>
      </li>

  </ul>
</div>
</main>
    
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>