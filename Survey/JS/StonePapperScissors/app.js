let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const compChoicePara = document.querySelector("#comp-choice");

const genCompChoice = () => {
    const Options = ["rock","papper","scissors"];
    const randmidx = Math.floor(Math.random()* 3);
    return Options[randmidx];
}
const showWinner = (userWin) => {

    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win..");
        msg.innerText = "you Win.";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you Lose.");
        msg.innerText = "you lose."
        msg.style.backgroundColor = "red";
    }
}

const playGame = (ChoiceId) => {
    console.log("user choice = ",ChoiceId);
    //comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    compChoicePara.innerText = `computer choice is : ${compChoice}`;

    if (ChoiceId === compChoice) {
        console.log("draw");
        msg.innerText = "Game was Draw .Play again";
        msg.style.backgroundColor = "black";
    }
    else {
        let userWin = true;
        if (ChoiceId === "rock"){
            //sci , papper
          userWin = compChoice == "papper" ? false : true;
        }
        else if( ChoiceId === "papper"){
            //rock,sci
            userWin = compChoice === "scissors" ? false : true;
        }
        else{  
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const ChoiceId = choice.getAttribute("id");
        // console.log("choice was clicked",ChoiceId);
        playGame(ChoiceId);
    });
});

// const ScoreB = document.querySelectorAll(".score");
// ScoreB.forEach((score) => {
//     score.addEventListener("click", () => {
//         const Scoreid = score.querySelector("p").getAttribute("id");
//         console.log("score clicked",Scoreid);
//         NewG(Scoreid);
//     })
// })
// const NewG = (Scoreid) => {
//     console.log("new game",Scoreid);
// }