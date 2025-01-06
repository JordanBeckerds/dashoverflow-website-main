// Variable pour stocker l'ID de l'option sélectionnée
var selectedWebsite = null;

// Sélectionnez tous les éléments avec la classe "dc-option"
var options = document.querySelectorAll('.dc-option');

// Parcourez chaque élément et ajoutez un gestionnaire d'événement de clic
options.forEach(function(option) {
    option.addEventListener('click', function() {
        // Récupérez l'ID de l'option sélectionnée
        var optionId = option.id;

        // Stockez l'ID de l'option sélectionnée dans la variable
        selectedWebsite = optionId;

        // Réinitialisez les styles des icônes pour toutes les options
        options.forEach(function(otherOption) {
            var regularIcon = otherOption.querySelector('.fa-regular');
            var solidIcon = otherOption.querySelector('.fa-solid');

            regularIcon.style.display = 'inline';
            solidIcon.style.display = 'none';
        });

        // Sélectionnez l'icône régulière et l'icône solide dans cette option
        var regularIcon = option.querySelector('.fa-regular');
        var solidIcon = option.querySelector('.fa-solid');

        // Afficher l'icône solide pour cette option et cacher l'icône régulière
        regularIcon.style.display = 'none';
        solidIcon.style.display = 'inline';
    });
});

// Fonction pour obtenir l'ID de l'option sélectionnée
function getSelectedWebsite() {
    return selectedWebsite;
}
