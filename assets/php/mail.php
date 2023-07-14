<?php
require_once '../../config/config.php';

require '../../vendor/autoload.php';
require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['email']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    try {

        $mail = new PHPMailer(true);
        $mail->IsSMTP();
        $mail->Host = MAIL_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = MAIL_USERNAME;
        $mail->Password = MAIL_PASSWORD;
        $mail->Port = MAIL_PORT;
        $mail->SMTPSecure = 'tls';

        $mail->setFrom(MAIL_USERNAME);
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'Maestrale Contact Info';
        $mail->Body = $message;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

/*if (!$mail->send()) {
            throw new Exception('Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        }*/
    } catch (Exception $e) {
        header("Location: ../view/errors/genericErrorPage.php?error=" . urlencode($e->getMessage()));
        die();
    }
} else {
    var_dump("here");
}
?>
