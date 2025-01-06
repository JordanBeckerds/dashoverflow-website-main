document.getElementById('form-purchase').addEventListener('submit', function(event) {
  // Empêcher la soumission réelle du formulaire
  event.preventDefault();

  // Afficher le texte de confirmation
  document.getElementById('confirmationText').style.display = 'block';
  document.getElementById('form-purchase').style.display = 'none';

});