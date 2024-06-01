var menuIsOpen = false;

function menuChanges() {
    var menuBurger = document.getElementById('menu-burger');

    if (!menuIsOpen) {
        menuBurger.classList.add('open');
        menuBurger.classList.remove('closed');
        menuIsOpen = true;
    } else {
        menuBurger.classList.add('closed');
        menuBurger.classList.remove('open');
        menuIsOpen = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Cachez toutes les popups au chargement de la page
    var popups = document.querySelectorAll('.popup-realisation-background');
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Fonction pour ouvrir une popup spécifique
    function openPopup(popupId) {
        var popup = document.getElementById(popupId);
        popup.style.display = 'block';
        document.body.classList.add('no-scroll');
    }

    // Fonction pour fermer les popups
    function closePopup() {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        document.body.classList.remove('no-scroll');
    }

    document.getElementById('close-popup-one').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-two').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-three').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-four').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-five').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-six').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-seven').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-eight').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-nine').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-ten').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-eleven').addEventListener('click', function() {
        closePopup();
    });

    document.getElementById('close-popup-twelve').addEventListener('click', function() {
        closePopup();
    });
    /*
    document.getElementById('close-popup-three').addEventListener('click', function() {
        closePopup();
    });
    */
    // Ajoute des écouteurs d'événements aux sections
    document.querySelector('.one').addEventListener('click', function() {
        openPopup('popup-one');
    });

    document.querySelector('.two').addEventListener('click', function() {
        openPopup('popup-two');
    });

    document.querySelector('.three').addEventListener('click', function() {
        openPopup('popup-three');
    });
    
    document.querySelector('.four').addEventListener('click', function() {
        openPopup('popup-four');
    });

    document.querySelector('.five').addEventListener('click', function() {
        openPopup('popup-five');
    });

    document.querySelector('.six').addEventListener('click', function() {
        openPopup('popup-six');
    });

    document.querySelector('.seven').addEventListener('click', function() {
        openPopup('popup-seven');
    });

    document.querySelector('.eight').addEventListener('click', function() {
        openPopup('popup-eight');
    });

    document.querySelector('.nine').addEventListener('click', function() {
        openPopup('popup-nine');
    });

    document.querySelector('.ten').addEventListener('click', function() {
        openPopup('popup-ten');
    });

    document.querySelector('.eleven').addEventListener('click', function() {
        openPopup('popup-eleven');
    });

    document.querySelector('.twelve').addEventListener('click', function() {
        openPopup('popup-twelve');
    });
    /*
    document.querySelector('.three').addEventListener('click', function() {
        openPopup('popup-three');
    });
    */
    // Fermer la popup lors du clic sur l'arrière-plan de la popup
    popups.forEach(function(popup) {
        popup.addEventListener('click', function(event) {
            if (event.target === popup) {
                closePopup();
            }
        });
    });

});