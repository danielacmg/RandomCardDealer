/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/deal.png";
import "./assets/img/timer.png";
import "./assets/img/gear.png";
import "./assets/img/paper-plane.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  dealCard();
};

/*to select the appropiate card color by symbol ♥ ♦ ♠ ♣*/

function setCardColor(cardSymbol) {
  if (cardSymbol == "♥" || cardSymbol == "♦") {
    document.getElementById("symbolLeft").style.color = "red";
    document.getElementById("symbolRight").style.color = "red";
  } else {
    document.getElementById("symbolLeft").style.color = "black";
    document.getElementById("symbolRight").style.color = "black";
  }
}

/*to select a random number*/
function setCardNumber() {
  let arrCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  /*return arrCards[Math.floor(Math.random() * 13)];*/
  let aux = Math.floor(Math.random() * 13);
  document.getElementById("cardNbr").innerHTML = arrCards[aux];
  console.log(aux);
}

/*to select a random symbol*/
function setCarSymbol() {
  let arrSymbol = ["♥", "♦", "♠", "♣"];
  /*let arrSymbol = ["clubs", "diamonds", "hearts", "spades"]; */
  /*(♣) (♦) (♥) (♠) '♥', '♦', '♠', '♣'*/

  let auxSymbol = arrSymbol[Math.floor(Math.random() * 4)];
  document.getElementById("symbolLeft").innerHTML = auxSymbol;
  document.getElementById("symbolRight").innerHTML = auxSymbol;
  return auxSymbol;
}

/**Shows the random card */
function dealCard() {
  setCardNumber();
  setCardColor(setCarSymbol());
}

/***************** Deal with button ***********************/
let btnDeal = document.getElementById("btnDeal");
btnDeal.addEventListener("click", dealCard);

/***************** Timer function***********************/

let btnTimer = document.getElementById("btnTimer");
let auxTimer = "";
btnTimer.addEventListener("click", Start);

function Start() {
  console.log("Started");
  btnTimer.removeEventListener("click", Start);
  btnTimer.addEventListener("click", Stop);
  btnTimer.value = "Stop";

  auxTimer = setInterval(
    dealCard,
    10000
  ); /*To start dealing cards every 10secs*/
}

function Stop() {
  console.log("Stopped");
  btnTimer.removeEventListener("click", Stop);
  btnTimer.addEventListener("click", Start);
  btnTimer.value = "Start";
  clearInterval(auxTimer); /*To stop dealing cards */
}

/*****************Changing Card size***********************/
let btnResize = document.getElementById("btnResize");
btnResize.addEventListener("click", resizeCard);

function resizeCard() {
  let newH = document.getElementById("cardHeight").value;
  console.log(newH);
  document.getElementById("card").style.height = newH + "rem";
  document.getElementById("card-body").style.height = newH + "rem";

  let newW = document.getElementById("cardWidth").value;
  console.log(newW);
  document.getElementById("card").style.width = newW + "rem";
  document.getElementById("card-body").style.width = newW + "rem";

  /*to resize symbols and number*/
  if (parseInt(newH) > parseInt(newW)) {
    document.getElementById("card-body").style.fontSize =
      parseInt(newW) / 3 + "rem";
    document.getElementById("symbolLeft").style.fontSize =
      parseInt(newW) / 4 + "rem";
    document.getElementById("symbolRight").style.fontSize =
      parseInt(newW) / 4 + "rem";
  } else {
    document.getElementById("card-body").style.fontSize =
      parseInt(newH) / 3 + "rem";
    document.getElementById("symbolLeft").style.fontSize =
      parseInt(newH) / 4 + "rem";
    document.getElementById("symbolRight").style.fontSize =
      parseInt(newH) / 4 + "rem";
  }

  document.getElementById("resizeForm").reset();
}
