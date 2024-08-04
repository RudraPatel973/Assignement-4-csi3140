<?php
function connectDb() {
    $host = 'localhost';
    $db = 'emergency_waitlist';
    $user = 'your_db_username';
    $pass = 'your_db_password';
    $dsn = "pgsql:host=$host;port=5432;dbname=$db;";
    try {
        $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        return $pdo;
    } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }
}
?>
