// console.log("Hello world");
        //  9;  9>1
// for(var i=10; i>1; i--){
//     console.log(i);
// }
// table
// var table = +prompt("enter a number")||5

// for(i=1;i<=10;i++){
//     console.log(table + "x"+ i+"=" + table*i);    
// }
// var myName ="Umra"
// // console.log(typeof table);
// console.log(typeof myName);
// var arr = [1,2,3,4,5,"Umra"]
// console.log(typeof arr);

// for(i=1; i>0; i++){
//     console.log(i+"Hello");  
// }
// var arr = ["This ", " is ", " my ", " cat"];
// document.write(arr[0]+arr[1]+arr[2]+arr[3])

// var arr = ["This ", " is ", " my ", " cat"];
// var joinarr = arr.join( );
// document.write(joinarr)
// console.log(typeof joinarr)

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// // Print the matrix with spaces
// document.write("Matrix: <br>");
// for (let i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ")+"<br>");
// }





// multidimensional array // array of arrays

var arrofarrays = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
for(i=0; i< arrofarrays.length; i++){
    document.write("<br>" + arrofarrays[i].join(" .... "))
}