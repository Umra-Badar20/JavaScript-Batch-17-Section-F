function greet(user){
    console.log('hello '+ user);
}
greet("umra")


function imgChange(e){
    console.log("over",e);
    e.src= "https://media.tenor.com/nO51qBe-HjsAAAAM/tom-sidvintage.gif"
    e.style.border = "10px solid green"
    e.style.transform = "scale(1.5)"
    e.style.transition = "1.3s"

    
}

function reverseChange(e){
    console.log("out");
    e.src = "https://cdn.hanna-barberawiki.com/thumb/8/85/Tom_Cat.png/800px-Tom_Cat.png"
    e.style.transform = "scale(1)"
    
}


// function abc(){
//     console.log("b"); 
// }

// console.log("a");
// setTimeout(abc,2000)
// console.log("c");


function abc(){
    console.log(event.key , event.keyCode); 
    if (event.keyCode===13) {
        console.log("Submit");
        
    }
}

// console.log(window);


window.onkeydown = abc