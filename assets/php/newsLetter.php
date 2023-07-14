<?php

require_once '../../config/config.php';

if (isset($_POST['email']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

    $response = array('message' => 'Email inviata correttamente');

    header('Content-Type: application/json');

    $dbHost = DB_HOST;
    $dbName = DB_NAME;
    $dbUser = DB_USER;
    $dbPassword = DB_PASSWORD;

    try {
        $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);

        $pdo->exec("SET time_zone = IFNULL((SELECT CONVERT_TZ(NOW(), 'UTC', 'America/New_York')), @@global.time_zone)");

        $stmt = $pdo->prepare("INSERT INTO newsletter (encrypted_email, subscription_datetime) VALUES (?, NOW())");
        $stmt->bindValue(1, $email);

        if (!$stmt->execute()) {
            echo "Errore durante l'inserimento dei dati nel database";
        } else {
            //Handle this
        }
    } catch (PDOException $e) {
        echo "Connessione al database fallita: " . $e->getMessage();
    }
}
?>