// Pseudo code

//-- 1) checkRoom function :
// player click on different rooms to 'make a move'


// ---2) every click alternate between 1   and 2

//section--3)

// upon marking the room, do:
  // a) room cannot be checked again

//   b) change color of room and

// add variable "how many pineapples found in this room"

 // c) check for this: each player allowed 3 moves so total maximum moves is 6

// section--4) reset button function

// reset function:
   // a) setting room's innerHTML as empty
   // b) clearing any classes in the room

window.onload = start;
var rooms = document.getElementsByClassName("room");
var turnText = document.querySelector(".outputPrompt");
var counter = 1;

function start() {
  checkRoomListener();
  addResetListener();
}

function checkRoomListener () {
  for (var i = rooms.length - 1; i >= 0; i--) {
rooms[i].addEventListener("click",checkRoom);
  }
}

function checkRoom (event) {
 if (event.target.innerHTML.length === 0) {



 }

}

function numOfPineapples () {
  return parseInt(Math.random * 9);
}

//4) reset button
function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

function resetBoard(){
  for (var i = rooms.length - 1; i >= 0 ; i--) {
    rooms[i].innerHTML="";
    rooms[i].setAttribute("class","clear");
  }
  turnText.innerHTML = "It is player one's turn";
}
