function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nom = document.getElementById("nom").value;
  let telephone = document.getElementById("telephone").value;
  let date = document.getElementById("date").value;
  let typeEvenement = document.getElementById("typeEvenement").value;
  let lieu = document.getElementById("lieu").value;
  let message = document.getElementById("message").value;

  let whatsappMessage =
    `Bonjour Christ Media,%0A%0A` +
    `Je souhaite faire une réservation.%0A%0A` +
    `Nom: ${nom}%0A` +
    `Téléphone: ${telephone}%0A` +
    `Date: ${date}%0A` +
    `Événement: ${typeEvenement}%0A` +
    `Lieu: ${lieu}%0A%0A` +
    `Détails: ${message}%0A%0A` +
    `Merci.`;

  let whatsappNumber = "22897217635";
  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});
