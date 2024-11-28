let playGame = () => {
    do {
        if (confirm("Let's Start The Game")) {
            function getRandomChoice() {
                const choices = ["stone", "paper", "scissor"];
                const randomIndex = Math.floor(Math.random() * choices.length);
                return choices[randomIndex];
            }
            let computer = getRandomChoice();
            const validChoices = ["stone", "paper", "scissor"];
            let player=prompt("Let's start! Enter your choice: stone, paper, or scissor");
            do {
                if(player === null) {
                    alert("Choice cannot be empty. Please enter stone, paper, or scissor.");
                    return;
                }
                player = player.trim().toLowerCase();
                if(!validChoices.includes(player)) {
                    alert("Invalid choice. Please enter stone, paper, or scissor.");
                    return;
                }

            } while (player === null);
            let result;
            if (player === computer) {
                result = "Match Tie";
            } else if ((player === "stone" && computer === "scissor") ||
                       (player === "paper" && computer === "stone") ||
                       (player === "scissor" && computer === "paper")) {
                result = "You won!!";
            } else {
                result = "Computer wins";
            }
            alert(`Player Chose: ${player}\nComputer Chose: ${computer}\nResult: ${result}`);
        } else {
            alert("Thank you, see you next time");
            return; 
        }
    } while (confirm("Do you want to play again?"));
}
