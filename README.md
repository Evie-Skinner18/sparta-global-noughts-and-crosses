# Noughts and Crosses

## Brief
JQuery Selectors and Events - TicTacToe

You challenge is build the game TicTacToe in the browser using JQuery. We will give you the html layout for the game. We will need you to use what you have learnt so far with selecting things with JQuery and creating event listeners with JQuery to create this game.

Your deliverables:-
* Git repo with Dev and Master branches
* Finished README.md with brief, what went well, the challenges and list of what you delivered
* pull-request submitted by 9:00am tomorrow
* The game should display the correct 'X' or 'Y' for each button pressed in the browser
* Once a tile has been clicked it should not be able to be clicked again
* The clear button should clear the board
* When a winning condition is present you should display and winner, wither X or Y
* The program should use functions, loops, JQuery selectors and JQuery events

## Features delivered:

* When the user clicks a square, a prompt box appears asking for a nought or cross. Some user input is printed onto a square.
* I used jQuery instead of the onclick() attribute to try and make the reset button reset the board.
* I have input from two players: the user and the computer. I used Math.floor with Math.random to make the computer's random moves.
* I turned the squares of the board into items in an array, so that I could target their indices instead of making an id for each one and targeting that.


## What Went Well

* I've had several goes at using JQuery and I've managed to manipulate the DOM to print something to one of the squares.


## Challenges

* It would be better if I'd used a DOM manipulation technique to print a nought or cross to the specific box that the user clicks, but I didn't know where to start!
* Half of my conditional statement and the whole of my switch statement are not working. I am finding it very diffcult to implement these advanced JavaScript concepts!
* I have no idea why my reset button isn't working!
* It would be better if I had included a loop. I had this idea:
  * Create a for loop that travels around
the indices of all the squares on the board each time someone makes a move, and checks if there are three of the same O or X in a row anywhere on the board.

 ``` JavaScript
var boardSquares =
 function (checkScore){
   for(i = 0; i < 9; i++){
     if (boardSquares[i] == ["X"],["X"],["X"]);{
       document.write("We have a winner!");
   }
   else if (boardSquares[i] == ["O"],["O"],["O"]);{
     document.write("We have a winner!");
   }
 }```
