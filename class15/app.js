// var sentence = prompt("Enter a sentence:")
// var result = "";
// var makeUpper = true;

// for(var i=0; i<sentence.length;i++){
//     if(makeUpper){
//         result += sentence[i].toUpperCase();
//         makeUpper=false; 
//     }else{
//         result += sentence[i].toLowerCase();
//     }
//     if(sentence[i] === " "){
//         makeUpper= true
//     }
// }
// console.log(result);



// var sentence = prompt("Enter a sentence:")// hello world
// var words = sentence.split(" ") // ["hello", "world"]
// console.log(words);
// var titleCaseWords = []

// for (var i = 0; i < words.length; i++) {

//     var firstChar = words[i].slice(0, 1) //h
//     var otherChar = words[i].slice(1) //ello
//     firstChar = firstChar.toUpperCase()  //H
//     otherChar = otherChar.toLowerCase() //ello
//     titleCaseWords.push(firstChar + otherChar)

// }
// console.log(titleCaseWords);
// console.log(titleCaseWords.join(" "));

// console.log("i".toUpperCase());
// console.log("i".toLocaleUpperCase("tr-TR"));

var str = "My name is Urwa Umra "
console.log(str.indexOf("Umra"));
console.log(str.charAt(19));

// Make a Palindrome Checker