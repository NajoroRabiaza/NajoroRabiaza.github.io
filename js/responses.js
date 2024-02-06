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
            noButton.textContent = 'Dernière chance!';
        } else if (clickCount >= 6) {
            noButton.textContent = "Oui";
        }
    });

});
