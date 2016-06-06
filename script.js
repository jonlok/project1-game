// pseudo code
// reset board
// setting where the pineapples are
$(document).ready(function(){
var generateRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};
var generatePineapples = function () {
   var numOfPineapples = generateRandomInt(9);
   return numOfPineapples;
};
var $score = $('#score');


var clearBoard = function(){
 $('#reset').on("click",function(){
  $('#grid').
 });
};

clearBoard();

});
