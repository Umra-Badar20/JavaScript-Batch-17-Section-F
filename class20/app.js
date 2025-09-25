// function greetUser(){
//     console.log("Welcome to SMIT!")
//     document.write("Welcome to SMIT!")
// }
// alert("Hello")
// greetUser()
// greetUser()

// function greetByUserName(userName, edu){
//     console.log("Welcome "+userName +" ! Your education is "+edu);
    
// }
// var myName = prompt("Enter your name")
// greetByUserName("Umra",12)
// greetByUserName(myName, "Inter")
           //Parameters
// function sum(num1,num2){
//     console.log(num1+num2); 
// }
// var num1 = Number(prompt("Enter your num1:"))
// var num2 = parseInt(prompt("Enter your num2:"))
//    //Arguments
// sum(num1,num2)

// function calculator(num1, num2, operator){
//     if(operator==="+"){
//       console.log(num1+num2);
      
//     }else if(operator === "-") {
//         console.log(num1-num2);
        
//     } else if(operator==="/"){
//         console.log(num1/num2);
//     }else if(operator==="*"){
//         console.log(num1*num2);
        
//     }else{
//         console.log("Invalid Operator!");
        
//     }
// }
// var userNum1=+ prompt("Enter a number ")
// var userNum2=+ prompt("Enter a number ")
// var userOper= prompt("Enter a Operator ")
// calculator(userNum1, userNum2, userOper)


function sum(num1 , num2){
    var add = num1 + num2
    return add
}
console.log(sum(2,2));
document.write(sum(3,3))
alert(sum(4,4))