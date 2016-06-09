
$(document).ready(function(){
/*
 *  Game variables
 */
var maxPineapples = 20;


/*
 *  Player object
 */
var player = function(){
  var score = 0;
  var name = '';
}

/*
 *  Room object
 */
var Room = function(roomNum){
  this.roomNumber = roomNum;
  this.numberOfPineapples = Math.ceil( Math.random() * maxPineapples );
}




/*
 *  Game object
 */
var Game = function() {

  var players = [];           // Array of players
  var activePlayer = null;    // The current active player
  var rooms = [];             // Array of rooms
  var turn = 0;               // The current turn

  /*
   *  Adds the score to the player
   */
  function addScore(){

  }

  /*
   *  Adds the score to the player
   */
  function updateGUI(){

  }

  /*
   *  Take turn
   *  This function runs by the end of each turn
   */
  this.takeTurn = function(){
    turn++;
    activePlayer = players[turn%2];
  }

  /*
   *  Init
   *  This function runs at the beginning of the game
   */
  this.init = function(){

    // Create player 1
    players.push( new player() );

    // Create player 2
    players.push( new player() );
    console.log(players);

    // Create rooms
    $('.room').each(function(index, element) {
        var roomNumber = $(element).data('num');
        rooms.push( new Room(roomNumber) );
     });
    console.log(rooms)


        // Add click event


     var clickOnRoomListener = function(){
       $('.room').each(function() {
           $(this).on("click", addScore);
          });
      } ;

     clickOnRoomListener();





       console.log('init')
   }



  this.init();


}


// Create new Game
var gameboard = new Game();




});