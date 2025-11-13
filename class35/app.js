// console.log();
// var students = [
//   "hafsa",
//   "hudebia",
//   "neha",
//   "arshna",
//   "emaan",
//   "arvish",
//   "unsha",
//   "sameen",
//   "anshara",
//   "rohaba",
//   "fizza",
//   "muheera",
//   "afia",
//   "umme-hani",
// ];
// var flag = false;
// var find = prompt("Enter your name:"); // Umra
// for (var i = 0; i < students.length; i++) {
//   if (find.toLowerCase() === students[i]) {
//     console.log(find + " is Present");
//     flag = true;
//     break;
//   }
// }
// if (!flag) {
//   console.log(find + " is Absent");
// }



// var word = "civic"
// var result="";
// for(var i=word.length-1; i>=0; i--){
//     // console.log(word[i]); 
//     result+=word[i]
    
// }
// console.log(result);
// if(word===result){
//     console.log("Its a palindrome");
// }else{
//     console.log("Its not a palindrome");
// }
// var container = document.getElementById("container")
// document.write(container.childNodes[5].nodeName);
// console.log(container.hasAttribute("class"));
// console.log(container.getAttribute("id"));
// container.setAttribute("class", "main")
// console.log(container.attributes);

// var h1 = document.createElement("h1")
// var p = document.createElement("p")
// var input = document.createElement("input")
// input.setAttribute("type","text")
// input.setAttribute("id","text")
// var h1Text = document.createTextNode("Hello")
// var pText = document.createTextNode("Umra")
// h1.appendChild(h1Text)
// p.appendChild(pText)
// container.appendChild(h1)
// container.appendChild(p)
// container.appendChild(input)
// console.log(container);

// container.innerHTML +=`
//         <h1>Hello</h1>
//         <p>Umra</p>
//         <input type="text">`


// function removeElem(){
//     // var para = event.target.previousElementSibling
//     // console.log(para);
//     // para.remove()
//     var container = event.target.parentNode
//     var para = container.childNodes[3]
//     container.removeChild(container.childNodes[3])
//     console.log(container.childNodes);
    
// }


// var sum =0 //0 +2+4+6+8 =20
// for(var i = 0; i<10; i+=2){
//     sum= i //2 4 6 8
// }
// console.log(sum);
// var num = 0
// if(num){
//     console.log("is number");   
// }else{
//     console.log("not number");   
// }