// JavaScript Document

// Dit is de eevee
var eevee = document.querySelector(".eevee");

// Klik op deze variable om het te veranderen
var duskstone = document.querySelector(".duskstone");

duskstone.addEventListener("click", verander);

function verander() {
  eevee.src = "../images/Eevees/Flareon.png";
}