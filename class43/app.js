// aler("helo")
// console.log("Hello");
try {
  //   aler("helo");
  throw "Please fill this field";
} catch (error) {
  console.log(error);
}
// console.log("Hello");
var btn = document.getElementById("btn")

function hello(){
    console.log("Hello");   
}

btn.onclick = hello