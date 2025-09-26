// function operation(a,b){
//  console.log(a+b);
//  console.log(a*b);


// }
// operation(10,5)
// var num = 10
// function abc(){
//     var userName = "Umra"
//     alert("hello")
//     return userName
//     console.log(userName);

// }
// console.log(abc()+" Badar");

// var name = abc()
// console.log(name +" Badar");

// function factorial(n){
//     var result = 1 //24
//     for(var i = 1; i<=n ; i++){
//         result*=i
//     }
//     return result
// }
// document.write(factorial(Number(prompt("Enter a number"))))

// function calculateSquare(x) {
//     //    return x*x
//     return x ** 2
// }
// console.log(calculateSquare(5));

function calculateHyp(base, perp) {
    function calculateSquare(x) {
        return x ** 2
    }
    var hypSquare = calculateSquare(base) + calculateSquare(perp)
    return hypSquare
}
console.log(calculateHyp(10, 5));

// function counting(a,z){
//     for(var i=a; i<=z; i++){
//         console.log(i);  
//     }
// }
// counting(2,100)


function calculateArea(w,h){
    return w * h
}
console.log(calculateArea(10,5))
var width=  10
var height = 5
console.log(calculateArea(width,height));
