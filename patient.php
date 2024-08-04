<?php
include 'functions.php';
header('Content-Type: application/json');

$name = $_GET['name'];
$code = $_GET['code'];

$pdo = connectDb();
$stmt = $pdo->prepare('SELECT wait_time FROM patients WHERE name = :name AND code = :code');
$stmt->execute(['name' => $name, 'code' => $code]);
$patient = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($patient);
?>
