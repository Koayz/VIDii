// JavaScript Document


var eevee = document.querySelector("article:nth-of-type(2) > img ");

eevee.addEventListener("click", veranderEevee);

function veranderEevee(){
  eevee.classList.toggle("flareon");
}

