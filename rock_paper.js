let buttons = document.querySelectorAll(".choice button")
let youChoice = document.getElementById("userChoice")
let compChoice = document.getElementById("computerChoice")
let message = document.getElementsByClassName("message")
let usercounter = 0
let compcounter = 0

const choicesOfGame = ["Rock", "Paper", "scissor"]

//choice of computer
function getCompChoice() {
    const randomIndex = Math.floor(Math.random() * choicesOfGame.length)
    return choicesOfGame[randomIndex];
    console.log(choicesOfGame)
}
//find winner
function whoWon(userChoice, computerchoice) {
    if(userChoice === computerchoice){
        return ("It's a tie")
    }
    else if (userChoice === "Rock" && computerchoice === "scissor" ||
        userChoice === "Paper" && computerchoice === "Rock" ||
        userChoice === "scissor" && computerchoice === "Paper") {
            usercounter = usercounter + 1
           return(`You won ${usercounter}`)
    } else {
        compcounter = compcounter + 1
        return(`Computer won ${compcounter}`)
    }
}

buttons.forEach((elm) => {
    elm.addEventListener("click", () =>{
        const userChoice = elm.id
        // console.log(userChoice)
        const computerchoice = getCompChoice()
        // console.log(computerchoice)
        compChoice.textContent = whoWon(userChoice, computerchoice)
        let userscore = document.createElement("P")
        userscore.innerText = usercounter.value
        console.log(usercounter)
        console.log(compcounter)
        console.log(userscore)
        compChoice.appendChild(userscore)  
        // youChoice.textContent = `computer choice ${getCompChoice()}`
    })
    // console.log(userChoice)
})

//not so good

// buttons.forEach((elm, idnx) => {
//     // console.log("user choice is: ",getCompChoice())
//     elm.addEventListener("click", () => {
//         // console.log("event triggered")
//         // if (idnx === 0 && getCompChoice() === "scissor") {
//         //     console.log("computer choice is: ",getCompChoice())
//         //     console.log("You won")
//         // }
//         // else if (idnx === 1 && getCompChoice() === "rock") {
//         //     console.log("computer choice is: ",getCompChoice())
//         //     console.log("You won")
//         // }
//         // else if (idnx === 2 && getCompChoice() === "paper") {
//         //     console.log("computer choice is: ",getCompChoice())
//         //     console.log("you won")
//         // }else{
//         //     console.log("computer choice is: ",getCompChoice())
//         //     console.log("you lost")
//         // }
//         // whoWon(idnx, getCompChoice())
//         // whoWon(userChoice, getCompChoice)
//     })
// })