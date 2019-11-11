<?php
include_once "cors.php";
$idPersona = $_GET["id"];
$mensaje = "Ok se elimina a la persona con id $idPersona";
echo json_encode($mensaje);