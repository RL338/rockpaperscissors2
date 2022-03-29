//Simple game of rock paper scissors

function computerPlay(){

let RND = [Math.floor(Math.random() * 3)]
    if (RND == 0){
        let rockChoice="rock";
        return rockChoice;
    }
    else if (RND ==1){
        let paperChoice="paper";
        return paperChoice;
    
    }   
    else if (RND ==2){
        let scissorsChoice="scissors";
        return scissorsChoice;    
    }
}


function playRound (playerSelection, computerSelection){

    playerSelection= prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    let win = [];
    computerSelection=computerPlay();


    if (playerSelection=="rock" && computerSelection == "scissors"){
        ++win;
        console.log("You chose rock and PC chose Scissors. You win");
    }
    if (playerSelection=="rock" && computerSelection == "rock"){
        console.log("You chose rock and PC chose Rock. Tie");
    }
    if (playerSelection=="rock" && computerSelection == "paper"){
        --win;
        console.log(win)
        console.log("You chose rock and PC chose paper. You lose");
    }
    if (playerSelection=="paper" && computerSelection == "rock"){
        ++win;
        console.log(win)
        console.log("You chose paper and PC chose rock. You win");
    }
    if (playerSelection=="paper" && computerSelection == "paper"){
        console.log("You chose paper and PC chose paper. Tie");
    }
    if (playerSelection=="paper" && computerSelection == "scissors"){
        --win;
        console.log(win)
        console.log("You chose paper and PC chose scissors. You lose");
    }
    if (playerSelection=="scissors" && computerSelection == "paper"){
        ++win;
        console.log(win)
        console.log("You chose scissors and PC chose paper. You win");
    }
    if (playerSelection=="scissors" && computerSelection == "scissors"){
        
        console.log("You chose scissors and PC chose scissors. Tie");
    }
    if (playerSelection=="scissors" && computerSelection == "rock"){
        --win;
        console.log(win)
        console.log("You chose scissors and PC chose paper. You lose");
    }
}
playRound();


// Play up to 5 rounds

function game(){
    for(let i=1; i<5; i++){
        playRound(i);
    }
}
game();
