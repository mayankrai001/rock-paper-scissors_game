 let userScore =0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScoreParagraph = document.querySelector("#user-score");
 const compScoreParagraph = document.querySelector("#computer-score");

 const genComputerChoices = () =>{
    let options = ["rock" , "paper" , "scissors"];
    const optionsIndex = Math.floor(Math.random()*3);
    return options[optionsIndex];
    // rock,paper,scissor
 }

 const drawGame = () =>{
    console.log("Game was Drawn")
    msg.innerText = "Game was Drawn";
    msg.style.backgroundColor = "grey"
 }

 const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScoreParagraph.innerText = userScore;
        console.log("You won")
        msg.innerText = `You Won Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScoreParagraph.innerText = compScore;
        console.log("you lost")
        msg.innerText = `You Lost ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

 }

 const playGame = (userChoice) =>{
    console.log("user-choice" , userChoice);
    // generate computer choices
    const compChoice = genComputerChoices();
    console.log("compChoice" , compChoice);

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            // rock , scissors 
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // user choice is scissors
            compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
 }

 choices.forEach((choice) => {
    // console.log(choices)
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () =>{
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
 })