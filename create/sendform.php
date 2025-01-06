<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les valeurs du formulaire
        $nom = $_POST['nom_complet'];
        $telephone = $_POST['telephone'];
        $email = $_POST['adresse_mail'];
        $delai = $_POST['delai'];
        $projet = $_POST['description_projet'];

        // Construire le message
        $subject = "📝 Fiche projet - DashOverflow";
        $message = "\n\n🧔🏻: $nom\n\n";
        $message .= "☎️: $telephone\n";
        $message .= "✉️: $email\n";
        $message .= "⏱️: $delai\n\n";
        $message .= "Description du projet: \n\n$projet\n";

        // Adresse e-mail de destination
        $to = "mateo@dashoverflow.fr, jordan@dashoverflow.fr";

        // Le header Content-type doit être défini lors de l'envoi d'un e-mail texte brut
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

        // Expéditeur avec le nom affiché
        $from_email = "hello@dashoverflow.fr";
        $from_name = "DashOverflow";
        $headers .= "From: " . mb_encode_mimeheader($from_name) . " <" . $from_email . ">" . "\r\n";
        // Envoyer l'e-mail
        if (mail($to, $subject, $message, $headers)) {
            echo "<h1>Redirection dans quelques secondes...</h1>";
            echo "<script>window.location.replace('https://dashoverflow.fr');</script>";
        } else {
            echo "<h1>Une erreur s'est produite lors de l'envoi du message.</h1>";
        }
    } else {
        echo "<h1>Une erreur s'est produite.</h1>";
    }
?>