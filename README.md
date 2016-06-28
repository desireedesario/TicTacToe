This is a basic tic tac toe game

creating TicTacToe from scratch
Set MVP:
	- we are making tic tac TicTacToe
	- 2 players
	- keep score
	- and then reset the board
		- MVP+ turn into ninjas vs pirates

STEPS
- create a basic file structure
- add a readme.md
- make a git and github repo
- render the board
  -minimum styling with CSS
- grab each cell, add a click handler
  - aka we need to click on these things, therefore we should make sure each one has a click function by looping through each cell!
- make a click modify cell
  - aka changing the cell from nothing to display an x or an o
- create concept of player turn

    1) when making players, we want to figure out our players.
    2) var currentPlayer = "x"
    3) player1(x)clicks
    4) x shows up
    5) and then we need to switch player
    6) if cp is x, switch to o. else switch cp to x.

- link player turn with modify cell

  aka make a variable with a current player

- make all clickable only clickable once

  this will be  conditional code that explains that if a space is empty, fill with HTML, else do not.

- win logic

      with this we need to create 8 winning arrays within an array

      we must check all possibilities
      then we need to irerate over the winners with a for() loop

      EX: one winning combination:
        check if cell0 == cell1 && cell0 == cell2
        winner = cell0
        else no winner

- ties
- keep score

The first thing that we should do is open a terminal and
create our external file sheet
  - remember to add a README.md to explain your game
