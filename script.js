const dzisiaj = new Date();
const rok = dzisiaj.getFullYear();
const swieta = new Date(rok, 11, 24);
const roznicaCzasu = swieta - dzisiaj;
const dni = Math.ceil(roznicaCzasu / (1000 * 60 * 60 * 24));
document.getElementById("licznik").textContent = `Zostało ${dni} dni do Świąt 🎄`;
document.getElementById("przycisk").addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=jMrzkn4vIAQ", "_blank");
});