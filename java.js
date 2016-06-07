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

// declaring variables
var rooms = document.getElementsByClassName("room");
var turnText = document.querySelector(".outputPrompt");
var counter = 1;
var player1Score = [];
var player2Score = [];

var winningScore = 50;

// start function
function start() {
  checkRoomListener();
  addResetListener();
}

// 'clicking on each room' function
function checkRoomListener () {
  for (var i = rooms.length - 1; i >= 0; i--) {
rooms[i].addEventListener("click",checkRoom);
  }
}


function checkRoom (event) {
 if (event.target.innerHTML.length === 0) {
   if (counter % 2 === 0) {
    player2Score.push(numOfPineapples);
    event.target.innerHTML = 'chosen';
    event.target.setAttribute('class','player2');
    turnText.innerHTML = "It is player 2's turn";
    counter++;
    checkForWin(player2Score, 'player2');

   } else {
    player1Score.push(numOfPineapples);
    event.target.innerHTML = 'chosen';
    event.target.setAttribute('class','player1');
    turnText.innerHTML = "It is player 1's turn";
    counter++;
    checkForWin(player2Score, 'player1');

  }

 }

}

// function of randomising the number of pineapples found when clicking on a room
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
