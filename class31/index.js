// var container = document.getElementById("list");

// function showList() {
//   var list = `
//     <ul>
//         <li>Karachi</li>
//         <li>Hyderabad</li>
//         <li>Lahore</li>
//         <li>Islamabad</li>
//     </ul>

//       <button onclick="hideList()" >Hide List</button>

//      `;

//   container.innerHTML = list;
// }

// function hideList() {
//   container.innerHTML = "";
// }

/////////////// 52

// function  hideImage() {
//     var image = document.getElementById("img");
//     image.className = "hide"

// }
// function  showImage() {
//     var image = document.getElementById("img");
//     image.className = "show"

// }

// function makeBig(){
//     document.getElementById("box").className += " big";
// }

// function makeNormal(){
//      document.getElementById("box").className = "container"
// }

// function newImage(){
//     var image = document.getElementById("img");
//     // console.log(image.src);
//     image.src = "https://www.shutterstock.com/shutterstock/videos/3741469647/thumb/1.jpg?ip=x480"

// }

// function oldImage(){
//     var image = document.getElementById("img");
//     image.src = "https://owlcation.com/.image/w_3840,q_auto:good,c_limit/MjA2NDkxNTY0NzgyOTIxNDIy/10-most-beautiful-flowers-of-the-world.jpg"

// }

// function link(){
//     console.log( document.getElementById("link").href);

// }

var images = [
  "https://www.shutterstock.com/shutterstock/videos/3741469647/thumb/1.jpg?ip=x4800",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnSwbd8h43wxb9X1_t6XZbP-C8tvia6Vxl7BAljYpzBMTYQmd6_V6S_9ftRYRqhOREos&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQTEqPJ_lNz9gmXA0FuVCrsyToCDrufx-04-YHVqOE5MxFFXtjGMzOEezHhP9yW1xul4&usqp=CAU",
];

var index = 0;

function next() {
  var image = document.getElementById("image");

  if (index === images.length - 1) {
    index = 0;
  } else {
    index++;
  }

  image.src = images[index];
}
