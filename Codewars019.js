/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */



const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!"; // if both players picked the same its a draw
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};// setting up what option wins
    if (p2 === rules[p1]) { // checking the value of p1 entry to the rule set entered byh p2 
      return "Player 1 won!";// returning that p1 wins due to ruleset
    }
    else { // p2 wins 
      return "Player 2 won!";
    }
  };