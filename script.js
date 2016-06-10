
$(document).ready(function(){
/*
* sounds
*/
var mySound = new buzz.sound( "css/sound.wav",
   { preload: true, loop: false });
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
   var turn = 0;               // The current  turn
   var that = this;

   /*
    * 1) Adds the score to the player
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

    $(roomTarget).fadeTo(3000, 0.15);
    console.log('score added');
    mySound.play();
    console.log('sound');

    }

     /*
     *   2) Determining who wins
     */




     // function updateGUI(e){

     //  $('.outputPrompt').text("It is player two's turn");

     //  }

     /*
      *  4)  Take turn
      *  This function runs by the end of each  turn
      */

     this.takeTurn = function(){
        turn++;
        activePlayer = players[turn%2];
        console.log(activePlayer)
        $('#score1').slideUp(300).slideDown(700).text(players[0].score);
        $('#score2').slideUp(300).slideDown(700).text(players[1].score);

      };


     /*
      *  5) Init
      *  This function runs at the beginning of the game
      */
      this.init = function(){

        // Clean up
        players = [];           // Array of players
        activePlayer = null;    // The current active player
        rooms = [];             // Array of rooms
        turn = 0;
        $('#score1').text('0');
        $('#score2').text('0');


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

        $('#reset').click(function(){
          that.init();
        });


       /*
       * 6) run the takeTurn function
       */

       this.takeTurn();


       console.log('init');

     };

    this.init();
 };


// Create new Game
var gameboard = new Game();


});