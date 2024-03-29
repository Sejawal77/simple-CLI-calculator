import inquirer from "inquirer";

console.log("WELCOME SIMPLE CLI CALCULATOR ")

let input = await inquirer.prompt([{
    type:"number",
    name:"firstName",
    message:"enter first number"
},{
    name:"operator",
    message:" select one operator",
    type:"list",
    choices: ["Addition","Subtraction","Multiplication","Division"]
},{
type:"number",
name: "secondNumber",
message:"inter second number"

}]);


if(input.operator ==="Addition"){
    let result = input.firstName + input.secondNumber;
    console.log(result)
}

if(input.operator ==="Subtraction"){
    let result = input.firstName - input.secondNumber;
    console.log(result)
}


if(input.operator ==="Multiplication"){
    let result = input.firstName * input.secondNumber;
    console.log(result)
}


if(input.operator ==="Division"){
    let result = input.firstName / input.secondNumber;
    console.log(result)
}

