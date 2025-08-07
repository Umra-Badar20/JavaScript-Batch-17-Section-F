// var cityName= "Karachi"
// var userCity = prompt("Enter your city name:")

// if(cityName==userCity){
//     console.log("Welcome to karachi");
// }
// if(cityName!=userCity){
//     console.log("Good bye!");
// }
// if(cityName==userCity){
//     console.log("Welcome to karachi");
// }else{
//     console.log("Good bye!");
// }


// var isRaining = false;

// if(isRaining){
//     console.log("Its raining outside!");  
// }else{
//     console.log("Its not raining outside!");  
// }

// var weather = prompt("Tell Us the Weather?")
// if (weather === "Sunny"){
//      console.log("Its a Sunny Day!")
// }
// else if (weather === "Rainy"){
//      console.log("Its a Rainy Day!")
// }
// else if (weather === "Cloudy"){
//      console.log("Its a Cloudy Day!")
// }else{
//     console.log("Enter a Valid weather")
// }
//  var signalColor = prompt("Enter the color of signal light:")

//  if(signalColor=="Red"){
//     console.log("Must Stop");
//  }else if(signalColor=="Yellow"){
//     console.log("Ready to move");
//  }else if (signalColor== "Green"){
//     console.log("Move Now"); 
//  }else{
//     console.log("Enter a valid signal color!");

//  }

// var obtMarks = +prompt("Enter your marks (Out of 100)")
// var totalMarks = 100
// var percentage = obtMarks / totalMarks * 100

// if (percentage >= 80 && percentage <= 100) {
//     console.log("A+");
// } else if (percentage >= 70 && percentage <= 79) {
//     console.log("A");
// } else if (percentage >= 60 && percentage <= 69) {
//     console.log("B");
// } else if (percentage >= 50 && percentage <= 59) {
//     console.log("C");
// } else if (percentage >= 40 && percentage <= 49) {
//     console.log("D");
// } else if (percentage >= 0 && percentage <= 39) {
//     console.log("Fail!");
// } else {
//     console.log("Invalid Marks!");
//     var obtMarks = +prompt("Enter your marks (Out of 100)")
//     var totalMarks = 100
//     var percentage = obtMarks / totalMarks * 100
//     if (percentage >= 80 && percentage <= 100) {
//         console.log("A+");
//     } else if (percentage >= 70 && percentage <= 79) {
//         console.log("A");
//     } else if (percentage >= 60 && percentage <= 69) {
//         console.log("B");
//     } else if (percentage >= 50 && percentage <= 59) {
//         console.log("C");
//     } else if (percentage >= 40 && percentage <= 49) {
//         console.log("D");
//     } else if (percentage >= 0 && percentage <= 39) {
//         console.log("Fail!");
//     } else {
//         console.log("Invalid Marks!");
//         var obtMarks = +prompt("Enter your marks (Out of 100)")
//     }
// }



var userCity = prompt("Enter your city name:")
var GPA = +prompt("Enter your GPA")

if(userCity=="Karachi" || (GPA >=3 && GPA <=4) ){
    console.log("You are eligible");
    
}else{
        console.log("You are not eligible");
}