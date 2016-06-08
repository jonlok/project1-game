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
var turn = 1;
var player1Score = [];
var player2Score = [];
var player1TotalScore = 0;
var player2TotalScore = 0;

var winningScore = 50;

// start function
function start() {
  checkRoomListener();
  addResetListener();
}


// 'clicking on each room' function
function checkRoomListener () {
  for (var i = 0; i < rooms.length; i++) {
    rooms[i].addEventListener("click",checkRoom);
  }
}


function checkRoom (event) {

  console.log("p1:" + player1Score);
  console.log("p2:" + player2Score);
  console.log("turn:" + turn );

  var $room = $(event.target);

  if (turn % 2 === 0) {
    player2Score.push(numOfPineapples());
    $room.addClass('player2');
    // checkForWin(player2Score, 'player2');

  } else {
    player1Score.push(numOfPineapples());
    $room.addClass('player1');
    // checkForWin(player1Score, 'player1');
  }

  turn++;
}

// function of randomising the number of pineapples found when clicking on a room
function numOfPineapples () {
  return parseInt(Math.random() * 20);
}

//4) reset button
function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

function resetBoard(){
  for (var i = rooms.length - 1; i >= 0 ; i--) {

     // rooms[i].innerHTML="";
    // rooms[i].setAttribute("class","clear");
  }
  counter = 1;
  player1Score = [];
  player2Score = [];
  player1TotalScore = 0;
  player2TotalScore = 0;
  turnText.innerHTML = "It is player one's turn";
}

// set up for randomising a choice of music effects later on
function musicRandom() {
  document.getElementById('random').innerHTML = "music effect " + (1 + parseInt(Math.random()* 4));
}
// 4 choices of music effects for 4 different rooms
// (green:
//   light green:
//   yellow:
//   light yellow:
//   )




$(function() {
    console.log( "ready!" );
});