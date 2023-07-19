<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/reservation.css">
    <link rel="stylesheet" href="assets/css/gmap.css">
    <link rel="stylesheet" href="assets/css/newsletter.css">
    <link rel="stylesheet" href="assets/css/gallery.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link rel="stylesheet" href="assets/css/navbar.css">
    <link rel="stylesheet" href="assets/css/hero.css">
    <link rel="stylesheet" href="assets/css/animation.css">
    <link rel="stylesheet" href="assets/css/hero.css">
    <link rel="stylesheet" href="assets/css/animation.css">
    <link rel="stylesheet" href="assets/css/menu.css">
    <link rel="stylesheet" href="assets/css/events.css">
    <link rel="stylesheet" href="assets/css/style.css">


    <script defer src="./assets/js/script.js"></script>
    <script defer src="assets/js/animation.js"></script>
    <script src="https://kit.fontawesome.com/128ecbb3e8.js" crossorigin="anonymous"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maestrale's Restaurant</title>
</head>

<body>
    <!-- Preloader Start -->

    <div class="preload" data-preaload>
        <div class="circle"></div>
        <p class="text">Maestrale</p>
    </div>

    <!-- Preloader end -->

    <?php
    if (isset($_GET['page'])) {
        $page = $_GET['page'];

        if (file_exists($page . ".html")) {
            include "$page.html";
        } else {
            include "404.html";
        }
    } else {
        $newURL = $_SERVER['REQUEST_URI'] . '?page=home#home';

        header("Location: $newURL");
        exit;
    }
    ?>

    <!-- Navbar start -->
    <?php include 'navbar.html'; ?>
    <!-- Navbar end -->

    <!-- Footer start -->
    <?php  include 'footer.html'; ?>
    <!-- Footer end -->

</body>

</html>