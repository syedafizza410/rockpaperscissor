import inquirer from 'inquirer';
import chalk from 'chalk';

let Condition = true
let userScore = 0
let compScore = 0

console.log(chalk.yellow.bold("******Welcome To My Rock Papers Scissors Game******"));

while (Condition = true) 
{
    let Start = await inquirer.prompt([
        {
            name: "Options",
            type: "list",
            choices: ["Start The Game" , "View Score" , "Exit"],
            message: (chalk.greenBright.bold("Select Your Option")),
        }])
        if(Start.Options === "Start The Game") {
    let userChoice = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            choices: ["Rock" , "Papers" , "Scissor"],
            message: (chalk.cyanBright.bold("Select your choice")),
        }])

        let comp = () =>{
            let options = ["Rock" , "Papers" , "Scissor"]
            let random = Math.floor(Math.random()*3);
            return options[random];
        }

        let compChoice: string = comp();

        console.log(compChoice);
        let showWinner = (userwin: boolean)=> {
            if(userwin){
                console.log(chalk.magenta.bold(`Congratulation! You win, your ${userChoice.choice} beats ${compChoice}`));
                userScore++
            }
            else{
                console.log(chalk.redBright.bold(`You lost, ${compChoice} beats your ${userChoice.choice}`))
                compScore++
            }
        }
        if(userChoice.choice === compChoice) {
            console.log("Draw");
        }
        else{
        let userwin = true;
        if(userChoice.choice === "Rock"){
            userwin = compChoice == "Papers" ? false : true ; 
        }
        else{
            if(userChoice.choice === "Papers"){
                userwin = compChoice == "Scissors" ? false : true ;
            }
        else{
            if(userChoice.choice === "Scissors"){
                userwin = compChoice == "Rock" ? false : true ;
            }
        }
        }
    showWinner (userwin);
        }
    }
    if(Start.Options === "View Score"){
            console.log(chalk.yellowBright.bold("View Score"))
            console.log(chalk.blueBright.bold(`UserScore:`) + chalk.redBright.bold(userScore) + chalk.blueBright.bold(`CompScore:`) + chalk.redBright.bold(compScore));
        }
    if(Start.Options === "Exit"){
            console.log(chalk.redBright.bold("Thank you for playing the game"))
            Condition = false;
        }
    }