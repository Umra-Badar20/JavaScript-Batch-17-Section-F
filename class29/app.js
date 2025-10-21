var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var left = 0;
function animateCharacter() {
  console.log(event.keyCode);
  if (event.keyCode === 68) {
    left = left + 10;
    char1.style.left = left + "px";
    // char1.style.left= (char1.offsetLeft+10)+"px"
    char1.src = "images/alicewf.gif";
    char1.style.transform = "scaleX(1)";
    //  char1.style.height = "200px"
  }

  if (event.keyCode === 65) {
    left = left - 10;
    char1.style.left = left + "px";
    // char1.style.left= (char1.offsetLeft+10)+"px"
    char1.src = "images/alicewf.gif";
    char1.style.transform = "scaleX(-1)";
    //  char1.style.height = "200px"
  }
  if (event.keyCode === 32) {
    char1.src = "images/alice12.gif";
    setTimeout(() => {
      char1.src = "images/alicestance.gif";
    }, 2500);
  }
  if (event.keyCode === 74) {
    left = left + 10;
    char2.style.right = left + "px";
    // char1.style.left= (char1.offsetLeft+10)+"px"
    char2.src = "images/venom-crawl.gif";
    char2.style.transform = "scaleX(-1)";
    char2.style.height = "150px";
    setTimeout(() => {
      char2.src = "images/venom-k.gif";
      char2.style.height = "300px";
    }, 500);
  }
}
window.onkeydown = animateCharacter;
