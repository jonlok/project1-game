
$(document).ready(function(){

var rooms = $('#grid');
var score = $('#score');
var outputPrompt = $('.outputPrompt')
var turnCounter = 0;
var numMoves = 0;
var whichRoom = "0";



var generateRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

var generatePineapples = function () {
   var numOfPineapples = generateRandomInt(9);
   return numOfPineapples;
};

// var checkRoom = function (e) {
//     var elem = $(this);

//     if (elem.text().length === 0){

//       if (turnCounter <= 6){

//         whichRoom.push(parseInt(elem.data("num")));
//         elem.text("Pineapple").addClass("Pineapple");
//         turnText.text("Pineapple");
//         turnCounter++;

//       }

//       if (turnCounter >= 6){
//          console.log("now more than 6 moves");
//       }

//       if(turnCounter >= 12){
//           alert("Game over, " + "?" + " wins!");
//           resetRooms();
//        }
//     };

// var resetRooms = function(){
// $(this).text("").attr("class", "");
//     });
//  turnCounter = 0;
//  numMoves = 0;
//  outputPrompt.text("It is Player One's Turn");
//  score.text("0");
// };

var checkRoom = function() {
   var elem = $(this);
   elem.text("Pineapple").addClass("Pineapple");
};

var clickOnRoomListener = function(){
  rooms.each(function() {
    $(this).on("click", checkRoom);
  });
 };

var resetListener = function () {
    $("#reset").on("click", resetRooms);
  };

  var start = function () {
    clickOnRoomListener();
    resetListener();
  };

start();

});
