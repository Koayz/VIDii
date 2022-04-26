// JavaScript Document

// Dit is de eevee
var eevee = document.querySelector("article:nth-of-type(2) > img");
var eeveeNaam = document.querySelector("article:nth-of-type(2) > h4");

// Klik op deze variable om het te veranderen
// Alle stenen
var duskStone = document.querySelector("article > ul > li > ul > li:last-of-type > button");
var dawnStone = document.querySelector("article > ul > li:nth-of-type(2) > ul > li:last-of-type > button");
var fireStone  = document.querySelector("article > ul > li:nth-of-type(3) > ul > li:last-of-type > button");
var thunderStone  = document.querySelector("article > ul > li:nth-of-type(4) > ul > li:last-of-type > button");
var leafStone  = document.querySelector("article > ul > li:nth-of-type(5) > ul > li:last-of-type > button");
var shinyStone  = document.querySelector("article > ul > li:nth-of-type(6) > ul > li:last-of-type > button");
var waterStone = document.querySelector("article > ul > li:nth-of-type(7) > ul > li:last-of-type > button");
var sunStone  = document.querySelector("article > ul > li:nth-of-type(8) > ul > li:last-of-type > button");

// verandering naam
var eeveeName = document.querySelector("h4")


// click functies
duskStone.addEventListener("click", veranderDusk);
dawnStone.addEventListener("click", veranderDawn);
fireStone.addEventListener("click", veranderFire);
thunderStone.addEventListener("click", veranderThunder);
leafStone.addEventListener("click", veranderLeaf);
shinyStone.addEventListener("click", veranderShiny);
waterStone.addEventListener("click", veranderWater);
sunStone.addEventListener("click", veranderSun);

// verander naam + image 
function veranderDusk() {
  eevee.src = "..images/eevees/umbreon.png";
  eeveeNaam.innerHTML = "Umbreon";
}

function veranderDawn() {
  eevee.src = "..images/eevees/espeon.png";
  eeveeNaam.innerHTML = "Espeon";
}

function veranderFire() {
  eevee.src = "../images/eevees/flareon.png";
  eeveeNaam.innerHTML = "Flareon";
}

function veranderThunder() {
  eevee.src = "../images/eevees/jolteon.png";
  eeveeNaam.innerHTML = "Jolteon";
}

function veranderLeaf() {
  eevee.src = "../images/eevees/leafeon.png";
  eeveeNaam.innerHTML = "Leafeon";
}

function veranderShiny() {
  eevee.src = "../images/eevees/glaceon.png";
  eeveeNaam.innerHTML = "Glaceon";
}

function veranderWater() {
  eevee.src = "../images/eevees/vaporeon.png";
  eeveeNaam.innerHTML = "vaporeon";
}

function veranderSun() {
  eevee.src = "../images/eevees/sylveon.png";
  eeveeNaam.innerHTML = "Sylveon";
}



