
$(document).ready(function(){
/*
 *  Game variables
 */
var maxPineapples = 20;


/*
 *  Player object
 */
var Player = function(){
  this.score = 0;
  var name = '';
};

/*
 *  Room object
 */
var Room = function(roomNum){
  this.roomNumber = roomNum;
  this.numberOfPineapples = Math.ceil( Math.random() * maxPineapples );
};




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
    activePlayer.score = rooms[].numberOfPineapples
  }


  /*
   *  Adds the score to the player and:
   1) update scoreboard
   2) i) element room disappears and appears again
     ii )fade the element room's color opacity to 0.15
   4) update Output Prompt

   */
  function updateGUI(){

   $(this).slideUp(2000).slideDown(2000).fadeTo(3000, 0.15);
   $('.outputPrompt').text("It is player two's turn");
   $('.score').text('new score');


  }

  /*
   *  Take turn
   *  This function runs by the end of each turn
   */
  this.takeTurn = function(){
    turn++;
    activePlayer = players[turn%2];
  };

  /*
   *  Init
   *  This function runs at the beginning of the game
   */
  this.init = function(){

    // Create player 1
    players.push( new player() );

    // Create player 2
    players.push( new player() );



    // Create rooms
    $('.room').each(function(index, element) {
        var roomNumber = $(element).data('num');
        rooms.push( new Room(roomNumber) );
     });
    console.log(rooms);
    console.log("room number: " + rooms[0].roomNumber);
    console.log("number of pineapples: " + rooms[0].numberOfPineapples);


        // Add click event


     var clickOnRoomListener = function(){
       $('.room').each(function() {
           $(this).on("click", addScore);
          });
       $('.room').each(function() {
          $(this).on('click', updateGUI);
       });

      } ;

     clickOnRoomListener();





       console.log('init');
   };



  this.init();


};


// Create new Game
var gameboard = new Game();






});