//Simple game of Rock, Paper, Scissors
const rock= ["rock"]
const paper = ["paper"]
const scissor = ["scissors"]



//Computer at Random chooses a number from 0-2
let computerChoice=([Math.floor(Math.random() * 3)]);
    console.log(computerChoice);    


//Assign a choice for random number for computer
function computerPlay(){
    if (computerChoice==0){
        console.log("Computer chose Rock")
    }
    else if (computerChoice==1){
        console.log("Computer chose Paper")
    }
    else if (computerChoice==2){
        console.log("Computer chose Scissors")
    }
          
}
computerPlay();


function game(){
        

}
game();






function playerChoice(){
    let playerChoose = prompt("Choose Rock, Paper, or Scissors")
        console.log(playerChoose)
     if (playerChoose==rock){
        console.log("Player chose rock")
     }
     else if (playerChoose == paper){
         console.log("player chose paper")
     }
     else if (playerChoose == scissor){
         console.log("player chose scissors")
     }
     while (playerChoose!==rock || paper || scissor){
        console.log("Please try again") 
        if (playerChoose == rock || paper || scissor)
        break;
    }

}
playerChoice();
