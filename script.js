// GLOBAL VARIABLES THAT I WANT ALL THE FUNCTIONS TO SEE

var playerPoint = 0;
var computerPoint = 0;
var boardSquares = $("td"); //Turning the board squares into items in an array using JQ


document.addEventListener('DOMContentLoaded', function(event){
});


  var resetButton = document.getElementById("reset");
  var board = document.getElementsByTagName("table");


  // COMPUTER'S RANDOM move
  function computerMove(){
    debugger
  var computerMove = Math.floor(Math.random() * 9 + 1);
  console.log(computerMove);

  switch (computerMove) {
    case computerMove == 1:
      $(boardSquares[1]).innerHTML = ("X");
      break;
    case computerMove == 2:
    $(boardSquares[2]).innerHTML = ("X");
      break;
    case computerMove == 3:
    $(boardSquares[3]).innerHTML = ("X");
      break;
    case computerMove == 4:
    $(boardSquares[4]).innerHTML = ("X");
      break;
    case computerMove == 5:
    $(boardSquares[5]).innerHTML = ("X");
      break;
    case computerMove == 6:
    $(boardSquares[6]).innerHTML = ("O");
      break;
    case computerMove == 7:
    $(boardSquares[7]).innerHTML = ("O");
      break;
    case computerMove == 8:
    $(boardSquares[8]).innerHTML = ("O");
      break;
    default: $(boardSquares[10]).innerHTML = ("O");
    }//END OF SWITCH STATEMENT
  }

// PLAYER CLICKING A SQUARE AND CHOOSING O OR X
function playerMove(){
  $(boardSquares).on("click", function(event){
    var playerInput = prompt("Type O or X to play!");
    if(playerInput = "O"){
      boardSquares[0].innerHTML = ("O"); //Tried to use JQ to print the nought/cross to the board but it wouldn't run
    }
    else {
      boardSquares[3].innerHTML = ("X");
    }

  })
  }

  playerMove(computerMove);



  $("#reset").on("click", function(){  //Making the reset button insert empty space into the whole board
    board.innerHTML = ("");
})
