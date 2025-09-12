// var sentence = prompt("Enter a sentence:")// i am student of smit
// var result = ""; //"I Am"
// var makeUpper = true; //false true,false

// for(var i=0; i<sentence.length;i++){ //1 2 3
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
// var titleCaseWords = [] //["Hello" , "World"]
// for (var i = 0; i < words.length; i++) {

//     var firstChar = words[i].slice(0, 1).toUpperCase() //h
//     var otherChar = words[i].slice(1).toLowerCase()  //ello
//     // firstChar = firstChar.toUpperCase()  //H
//     // otherChar = otherChar.toLowerCase() //ello
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