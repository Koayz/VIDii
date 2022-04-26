// JavaScript Document

// Dit is de eevee
var eevee = document.querySelector("article:nth-of-type(2) img");
var eeveeNaam = document.querySelector("article:nth-of-type(2) h4");

// Klik op deze variable om het te veranderen
var duskstone = document.querySelector(".duskstone");

var eeveeName = document.querySelector("h4")

duskstone.addEventListener("click", verander);

function verander() {
  eevee.src = "../images/Eevees/Flareon.png";
  eeveeNaam.innerHTML = "Flareon";
}


