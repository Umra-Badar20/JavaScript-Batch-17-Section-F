// var myName = "Umra Badar"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// var fatherName = myName.slice(5)
// console.log("My Father name is "+fatherName);


// var userName = "muHeEra"
// var firstChar = userName.slice(0,1).toUpperCase()
// var fullName = firstChar + userName.slice(1).toLowerCase()
// console.log(fullName);
// console.log(userName.length);

var sentence = "My name is Umra."
var word = prompt("Enter a word to find:")
for(var i=0; i<sentence.length; i++){
    if(sentence.slice(i,i+4).toLowerCase() === word.toLowerCase()){
        console.log("Found");  
    }
}                    //0,4