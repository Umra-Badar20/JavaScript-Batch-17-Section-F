/*alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") 
alert("hello") */
// alert("hello")

function greet(name) {
  alert("Hello " + name);
}

function on(e) {
  e.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  
}
function off(e) {
  e.src = "https://www.w3schools.com/js/pic_bulboff.gif";
 
}

function zoom(e){
        console.log("test1");

    // e.style.border = "10px solid black"
    e.style.transform = "scale(1.5)"
    e.style.transition = "1.5s"
}
function clearImg(a) {
  a.style.transform = "scale(1)";
  console.log("test");
}
