document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let resultMessage;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/newsLetter.php', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var checkIcon = document.querySelector(".has-icons-right .fa-check");
            var subscribeButton = document.getElementById("subscribe-button");

            checkIcon.classList.add("has-text-success");
            subscribeButton.style.display = "none";
            resultMessage = "Email registered!";
        } else {
            console.error('Error on AJAX request');
            resultMessage = "Error on the registration";
        }
        document.getElementById("emailMessage").innerHTML = resultMessage;
    };


    xhr.send(new FormData(this));
});
/*
document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/mail.php', true);

    
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log("here");
        } else {
            console.error('Errore nella richiesta AJAX');
        }
    };

    xhr.send(new FormData(this));
});
*/