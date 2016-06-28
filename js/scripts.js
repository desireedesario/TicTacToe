console.log("Ready!")

//first grab all of our tile pieces
var tiles = document.getElementsByClassName('tile')
//console.log(tiles)

//current player
var currentPlayer = "X";
var clicked;

for (var i = 0; i < tiles.length; i++){
  //prints out each tile individually
    //console.log(tiles[i])
  // this will show that each element on the dom is being clicked
  tiles[i].addEventListener('click', function(){
    //console.log("You clicked: " + this);
  //if we used this.id = 'clicked', it will change each event you clicked and turn the id into clicked
    //this.id = 'clicked';

    //NOW we need to figure out how to switch players
    //AND we need to make that cell un clickable
    if (this.innerHTML == "") { //if it is not empty
      //when a user clicks, we want to show that an x or o is placed there
        this.innerHTML = currentPlayer
        //sweet! made an x! but these are small x sizes. change the find size on your tile class to bump up that size!
        checkWin();
      switchPlayer();
    } else {
      //change this not to be an alert. maybe have a message div or append a message div.
      alert("Hey! Listen! You need to click an empty cell!");
    }
  })
}

//SWITCHING A PLAYER FUNCTION
function switchPlayer(){
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

//WINNING

// with this we need to create 8 winning arrays within an array

var winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

//because there is not a winner yet it is false
var winner = "";

function checkWin(){
  for (var i = 0; i < winningCombos.length; i++){
    // var a = document.getElementById("cell"+ winningCombos[i][0])
    // var b = document.getElementById("cell"+ winningCombos[i][1])
    // var c = document.getElementById("cell"+ winningCombos[i][2])
    var currentArray = winningCombos[i];
    var a = document.getElementById("cell"+ currentArray[0]).innerHTML;
    var b = document.getElementById("cell"+ currentArray[1]).innerHTML;
    var c = document.getElementById("cell"+ currentArray[2]).innerHTML;
    //if a and c match, and a an b won, AND SPACES ARE NOT EMPTY, SOMEONE WON
    if (a == b && a == c && a!=""){
      // winner = a;
      console.log("someone won!", a);
    }

  }
}
