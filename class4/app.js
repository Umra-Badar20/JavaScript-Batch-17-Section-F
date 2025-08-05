// var a = 5
// var b = 2

// var c= --a - --b + ++b + b--;
//     4   -   1 +   2  + 2 

// --a = a-1
// ++a = a+1

// console.log(a++); //3 ->4
// a++   //4 ->5
// --a   //4  -> 4
// ++a   //5  ->5
// a--    //5  ->4
// console.log(c);

// var num = +prompt("Enter a number for multiplication", "5");
// document.write(num + " x 1 =" + (num*1) + "<br>")
// document.write(num + " x 2 =" + num*2 + "<br>")
// document.write(num + " x 3 =" + (num*3) + "<br>")
// document.write(num + " x 4 =" + (num*4) + "<br>")
// document.write(num + " x 5 =" + (num*5) + "<br>")
// document.write(num + " x 6 =" + (num*6) + "<br>")
// document.write(num + " x 7 =" + (num*7) + "<br>")
// document.write(num + " x 8 =" + (num*8) + "<br>")
// document.write(num + " x 9 =" + (num*9) + "<br>")
// document.write(num + " x 10 =" + (num*10) + "<br>")


// var sub1= prompt("Enter your subject name:")
// var sub2= prompt("Enter your subject name:")
// var sub3= prompt("Enter your subject name:")
// var total = 100
// var grandTotal = total*3
// var obtSub1 = +prompt("Enter obtained marks for " + sub1)
// var obtSub2 = +prompt("Enter obtained marks for " + sub2)
// var obtSub3 = +prompt("Enter obtained marks for " + sub3)
// var totalObtMarks = obtSub1+ obtSub2 + obtSub3
// console.log("Obtained Marks : "+ totalObtMarks);
// var percentage = totalObtMarks/grandTotal *100 + "%"
// console.log("Percentage : "+percentage);
// document.write("<h1>"+percentage+"</h1>")



// if(true){
//     console.log("Hello Condition is true"); 
// }
// console.log("After if");
// var qualification = prompt("Enter your qualification")
// if (qualification==="Graduation"){
//     console.log("Congratulations ,You are Eligible!");
// }
// if (qualification==="Inter"){
//     console.log("You should apply for internship!");
// }
// if (qualification==="Matric"){
//     console.log("Sorry, You are not Eligible!");
// }


var capital = prompt("Enter the capital of Pakistan")
var ans = "Islamabad";
var score = 0
if(capital=== ans){
    score++
    alert("Correct")
    console.log(score); 
}