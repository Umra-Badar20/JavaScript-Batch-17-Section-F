// const display = document.getElementById("display");

// let num1 = "";
// let num2 = "";
// let operator = "";
// let isSecondNumber = false;

// function addToDisplay(input) {
//     if (!isSecondNumber && (input !== "+" && input !== "-" && input !== "*" && input !== "/" && input !== "%")) {
//         num1 += input;
//     } else if (!isSecondNumber && (input === "+" || input === "-" || input === "*" || input === "/" || input === "%")) {
//         operator = input;
//         isSecondNumber = true; 
//     } else if (isSecondNumber) {
//         num2 += input;
//     }

//     display.value += input;
// }

// function calculate() {
//     num1 = Number(num1);
//     num2 = Number(num2);

//     let result = "";

//     if (operator === "+") {
// result = num1 + num2;
//     } 
//     else if (operator === "-") {
// result = num1 - num2;
//     } 
//     else if (operator === "*") {
// result = num1 * num2;
//     } 
//     else if (operator === "/") {
//         if (num2 === 0) result = "Error";
//         else result = num1 / num2;
//     }

//     display.value = result;

//     num1 = result;
    
//     // reset
//     num1 = ""
//     num2 = ""
//     operator = ""
//     isSecondNumber = false;
// }/// muheera's code

var firstnum 
var secondnum 
var firstnumarray = []
var secondnumarray = []
var operator 
var result = 0
var Display = document.getElementById("display")
var step = 0

function getNumber(num){
    // Display.value = num
    if(step === 0 || step ===1){
        firstnumarray.push(num);
        firstnum = Number(firstnumarray.join(""));
        step = 1
        Display.value = firstnum
    }else if(step ===2){
        secondnumarray.push(num);
        secondnum = Number(secondnumarray.join(""));
        Display.value = secondnum
    }
}

function getOperator(op){
    step =2
    secondnumarray = [];
    operator = op
}

function calculateEquals(){
    if(secondnumarray.length === 0){
        secondnum = Number(Display.value) || 0;
    }

    if(operator === "+"){
        result = firstnum + secondnum
        Display.value = result
    }else if(operator === "-"){
        result = firstnum - secondnum
        Display.value = result
    }else if(operator === "/"){
        result = firstnum / secondnum
        Display.value = result
    }else if(operator === "*"){
        result = firstnum * secondnum
        Display.value = result
    }
    secondnumarray = []
    firstnum = result
    step = 1 

}
function clearDisplay(){
    firstnum = null;
    secondnum = null ;
    firstnumarray = [];
    secondnumarray = [];
    operator = null ;
    step = 0;
    Display.value = 0 ;
}

var day = prompt("Enter the day of week")
switch(day){
    case "sat":
    console.log("Its weekend");
    break;

    case "sun":
    console.log("Its a holiday");
    break;

    case "fri":
    console.log("Its a HALFDAY");
    break;
    
    default:
    console.log("Its a week day");
    
        
}