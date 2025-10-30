// var para =document.getElementsByClassName("para")[0]
var div = document.getElementById("main")
console.log(main);

var para =div.getElementsByTagName("p")//[p,p,p]
console.log(para);

function zoom() {
    // para.className += " zoom"
    for(var i=0;i<para.length;i++){
        para[i].classList.add("zoom")
    }
}
function hide() {
    para.className += " hidden"
}
function left(){
    para.style.cssFloat = "left"
}
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].parentNode);
