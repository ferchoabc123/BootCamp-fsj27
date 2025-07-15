<?php 
    require_once './controller/AlojamientoController.php';
    $controller = new AlumnoController();

    $action = isset($_GET['action']) ? $_GET['action']  : 'read';
    $id = isset($_GET['id']) ? $_GET['id']: '';
    

    switch($action){
        case 'read':
            
            $controller->read();
            break;
        case 'search':
            $controller->search();
            break;
        case 'update':
           
            break;
        case 'delete':
            
            break;
    }

?>
