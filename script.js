

// scissors paper and rock game / 



function playGame(player1, player2) {
    // Display the players' choices
    console.log("Player 1 chooses: " + player1);
    console.log("Player 2 chooses: " + player2);
    
    // Determine the winner
    if (player1 === player2) {
      console.log("It's a tie!");
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock")
    ) {
      console.log("Player 1 wins!");
    } else {
      console.log("Player 2 lose");
    }
 }
  

playGame(("player2"))
  




// grade evalutation



let grade = 100;
if(grade >90){
  console.log("A")

}
else if (grade < 90 && grade >= 75 ){
  console.log("B")
}

else if (grade < 75 && grade >= 60 ){
  console.log("c")
}
else{console.log("failed")}