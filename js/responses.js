document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var anotherGif = document.getElementById('anotherGif');
    var elementsToHide = document.querySelectorAll('.hide-on-yes');
    var clickCount = 0;

    yesButton.addEventListener('click', function () {
        anotherGif.style.display = 'block';
        elementsToHide.forEach(function(element) {
            element.style.display = 'none';
        });
    });
    
    noButton.addEventListener('click', function () {
        clickCount++;
        var newWidth = yesButton.offsetWidth + 20;
        var newHeight = yesButton.offsetHeight + 5;
        yesButton.style.height = newHeight + 'px';
        yesButton.style.width = newWidth + 'px';
        if (clickCount === 1) {
            noButton.textContent = 'Dit oui!';
        } else if (clickCount === 2) {
            noButton.textContent = 'Tu es sure?';
        } else if (clickCount === 3) {
            noButton.textContent = 'Vraiment?';
        } else if (clickCount === 4) {
            noButton.textContent = 'S`il te plaiiit!';
        } else if (clickCount === 5) {
            noButton.textContent = 'Tu en es vraiment certaine ?';
        } else if (clickCount === 6) {
            noButton.textContent = 'Tu es absolument sûre ?';
        } else if (clickCount === 7) {
            noButton.textContent = 'Vraiment, vraiment ?';
        } else if (clickCount === 8) {
            noButton.textContent = 'Allez, fais un effort, sil-te-plaît !';
        } else if (clickCount === 9) {
            noButton.textContent = 'Tu ne veux pas reconsidérer ta décision ?';
        } else if (clickCount === 10) {
            noButton.textContent = 'Franchement, tu es certaine ?';
        } else if (clickCount === 11) {
            noButton.textContent = 'Je te implore, fais-moi ce plaisir !';
        } else if (clickCount === 12) {
            noButton.textContent = 'Allez, juste cette fois !';
        } else if (clickCount === 13) {
            noButton.textContent = 'Je te le demande du fond du cœur 🥺🥺';
        } else if (clickCount === 14) {
            noButton.textContent = 'Dernière chance!';
        } else if (clickCount >= 15) {
            noButton.textContent = "Oui";
        }
    });

});
