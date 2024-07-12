let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const messageBox=document.querySelector("#messageBox")

let compScoreShow=document.querySelector("#comp-score")
let userScoreShow=document.querySelector("#user-score")

// Generate computer's random choice
const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    const randIndex=Math.floor(Math.random()*3)
    return options[randIndex]
}
// Display the reseult whether user win or computer win
const showResult=(userWin)=>{
    if(userWin){
        userScore++
        userScoreShow.innerText=userScore
        messageBox.innerText=`You win. You beat the computer.`
        messageBox.style.backgroundColor="green"
    }else{
        compScore++
        compScoreShow.innerText=compScore
        messageBox.innerText="You lose. Computer beats you."
        messageBox.style.backgroundColor="red"
    }
}

// Show result when game draw
const gameDraw=()=>{
    messageBox.innerText="Game drawn. Try again."
    messageBox.style.backgroundColor="rgb(10,10,10)"
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice()
    let userWin=true
    if(compChoice===userChoice){
        gameDraw()
    }
    else{
        //  Check all the conditions
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"?false:true
        }else{
            userWin= compChoice==="rock"?false:true
        }
        showResult(userWin)
    }
}
choices.forEach(choice =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})