// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes);

// var box = document.childNodes[1].childNodes[2].childNodes[1].childNodes
// var box9 =document.getElementById("container").childNodes[9]
// console.log(box, box9);
// var body = box9.parentNode.parentNode
// console.log(body);
// var box =document.getElementById("container").childNodes[6]
// console.log(box, box.nodeType);

var container =document.getElementById("container")
console.log(container.firstChild);
console.log(container.firstChild.nextSibling.nextSibling);
console.log(container.firstChild.nextSibling.nextSibling.nextSibling.nextSibling);
console.log(container.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
console.log(container.lastChild);
console.log(container.nextElementSibling.previousElementSibling);












// var num = 5
// function myFunc(){
//     console.log(num); //5 5 5 undefined undefined
//     var num = 10
// }
// myFunc()
// function myFunc(){
//     var num;
//     var num2;
//     var num3;
//     var num4;
//     var arr;
//     console.log(num); //5 5 5 undefined undefined
//     num = 10
//     num2 = 9
//     num3 = 9
//     num4 = 9
//     arr = []
// }