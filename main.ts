#!/usr/bin/env node

import inquirer from "inquirer"

let myBalance= 40000
let myPin=2004

let pinAnswer=await inquirer.prompt(
    {
        name:"pinNumber",
        message:"Enter your pin number: ",
        type:"number"
    }
)

if(pinAnswer.pinNumber === myPin)
{
    console.log("Correct pin code!")

   let operationAns= await inquirer.prompt({
        name:"operation",
        message:"Select an option",
        type:"list",
        choices: ["Check balance", "Withdraw"]
    })

if(operationAns.operation === "Withdraw")
{
    let withdrawlOptions = await inquirer.prompt({
        message: "Select an option:",
        type:"list",
        name: "options",
        choices: ["1000", "3000", "5000", "10000", "20000", "50000"]
    })
 
    if(withdrawlOptions.options <= myBalance)
    {
        myBalance -= withdrawlOptions.options
        console.log(`Your remaining balance is ${myBalance}`)
    }
    else
    {
        console.log("Insufficient balance!!!")
    }

}

if(operationAns.operation === "Check balance")
{
    console.log(myBalance)
}

}
else
{
    console.log("Incorrect pin number!")
}