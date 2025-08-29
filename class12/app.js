// var rows = +prompt("Enter the number of rows:")
// var cols = +prompt("Enter the number of cols:")
// var char = prompt("Enter the character:")

// for(var i =1; i<=rows; i++){
//    for(var j=1; j<=cols; j++){
//      document.write(char)
//    }
//     document.write("<br/>")
// }
// *****
// *****
// *****
// *****




// for(var i=1; i<=5; i++){//5
//     for(var j=1; j<=i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// *
// **
// ***
// ****
// *****

for(var i=1; i<=5; i++){ //2
    for(var k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
    }

    for(var j=1; j<=i; j++){
        document.write("🐍")
    }
    for(var l=2; l<=i; l++){
        document.write("🤣")
    }
    
    document.write("<br>")
}
//     *
//    **
//   *** 
//  ****
// *****
