<?php
include_once "cors.php";
$persona = json_decode(file_get_contents("php://input"));
$mensaje = "El nuevo nombre de la persona es: " . $persona->nombre;
echo json_encode($mensaje);
