
var player1
var player2

var currentPlayer = 'red'

const button = document.getElementById("upperLeft");

button.addEventListener("click", function() {

    let color = currentPlayer;

    if( color === "red" ){
        button.className = "blue";
    }
    else{
        button.className = "red";
    }
    // change the currentPlayer
});
/*var currentPlayer = 'blue'

const button = document.getElementById("middleLeft");

button.addEventListener("click", function() {

    let color = currentPlayer;

    if( color === "red" ){
        button.className = "dos";
    }
    else{
        button.className = "red";
    }
    // change the currentPlayer
});*/
