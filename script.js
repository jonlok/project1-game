
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
};

/*
 *  Room object
 */
var Room = function(roomNum, element){
  this.roomNumber = roomNum;
  this.numberOfPineapples = Math.ceil( Math.random() * maxPineapples );
  this.element = element;
};

/*
 *  Game object
 */
var Game = function() {

  var players = [];           // Array of players
  this.activePlayer = null;    // The current active player
  var rooms = [];             // Array of rooms
  var turn = 0;               // The current turn
  var that = this;

  /*
   *  Adds the score to the player
   */
  function addScore(e){

    var roomTarget = e.target;
    var roomTargetNum = $(roomTarget).data('num');

    var activeRoom = rooms.filter(function(room){
        if(room.roomNumber == roomTargetNum){
          return true;
        }
    });

    activePlayer.score += activeRoom[0].numberOfPineapples;
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

    $('#score1').text(players[0].score);
    $('#score2').text(players[1].score);
  };


  /*
   *  Init
   *  This function runs at the beginning of the game
   */
  this.init = function(){

    // Create player 1
    players.push( new Player() );

    // Create player 2
    players.push( new Player() );

    // Init rooms
    $('.room').each(function(index, element) {
        var roomNumber = $(element).data('num');
        rooms.push( new Room(roomNumber, element) );

        $(element).click(function(e){
          addScore(e);
          that.takeTurn();
        });
     });

    this.takeTurn();





    console.log('init');
   };

  this.init();
};


// Create new Game
var gameboard = new Game();


});