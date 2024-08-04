<?php
include 'functions.php';
header('Content-Type: application/json');

$pdo = connectDb();
$stmt = $pdo->query('SELECT * FROM patients ORDER BY severity DESC, wait_time ASC');
$patients = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($patients);
?>
