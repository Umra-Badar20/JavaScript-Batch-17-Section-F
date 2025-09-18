// var num = 1.747988758457
// console.log(Math.round(num)); //2
// console.log(Math.floor(num)); //1
// console.log(Math.ceil(num));  //2
// console.log(Number(num.toFixed(2)));

// var randomNumber = Math.random();
// console.log(Math.round(randomNumber));
// var result = Math.round(randomNumber)
// if(result===0){
//     console.log("Heads"); 
// }else{
//     console.log("Tails");  
// }

// var str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-_=+[{]}\|;:',<.>/?"
// var password=""

// for(var i = 0 ; i<10 ; i++){
//     var randomNumber = Math.floor(Math.random()* str.length)
//     password += str[randomNumber]
// }
// console.log(password);
// console.log("N".charCodeAt());

// let date = Date.now()
// let date = new Date()
// date= date.toString()
// console.log(typeof date.toString());
// console.log(date.slice(0,15));
// console.log(date.slice(16,24));

// var day = date.getDay()
// console.log(day);


var date = new Date()
var day = date.getDay() //4
console.log(day);
var dayNames = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"]
var today = dayNames[day]
console.log(today);
console.log(date.getMonth());
