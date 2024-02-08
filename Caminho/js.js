let card = document.querySelector(".card");
let popup = document.querySelector(".popup");
let popupText = document.querySelector(".text");

let resultado;

function botao(event) {

  if(event.innerHTML == "Caralho"){
    popupText.innerHTML = "Tens de visitar Deus!!!"
  } else {
    popupText.innerHTML = "As vezes um Caralho é a solução.";
  }
  
  popup.style.visibility = "visible";
  card.style.visibility = "hidden";
}
