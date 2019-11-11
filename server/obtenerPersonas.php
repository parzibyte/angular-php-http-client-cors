<?php
include_once "cors.php";
$personas = [
	[
		"nombre"=>"Luis",
		"edad" => 22
	],
	[
		"nombre"=>"Fernando",
		"edad" => 50
	],
];
echo json_encode($personas);
