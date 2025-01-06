const cookieBox = document.querySelector(".cookiesbanner"),
    acceptBtn = cookieBox.querySelector("#consentbtn");

// Fonction pour définir les cookies, y compris pour Google Analytics
const setCookies = () => {
    // Setting cookie for 1 month, after one month it'll be expired automatically
    document.cookie = "CookieBy=DashOverflow; max-age="+60*60*24*30;

    // Exemple pour définir un cookie de consentement pour Google Analytics
    // Vous devrez adapter cela en fonction de votre configuration Google Analytics
    document.cookie = "GAConsent=true; max-age="+60*60*24*30;
    cookieBox.classList.add("hide-banner");


}

// Ajouter un gestionnaire d'événements au bouton d'acceptation
acceptBtn.addEventListener('click', () => {
    // Appeler la fonction pour définir les cookies une fois que l'utilisateur a accepté
    setCookies();
});

// Vérifier si le cookie est déjà présent
let checkCookie = document.cookie.indexOf("CookieBy=DashOverflow");

// Si le cookie est déjà présent, masquer la bannière de cookies
checkCookie !== -1 ? cookieBox.classList.add("hide-banner") : cookieBox.classList.remove("hide-banner");

// Vérifier également si le consentement pour Google Analytics est déjà présent
let checkGAConsent = document.cookie.indexOf("GAConsent=true");
