// var word = prompt("Enter a word:") // ciiviic
// var isPalindrome = false;

// for (var i = 0; i < (word.length - 1) / 2; i++) {
//     // console.log(word[i]);
//     // console.log(word.charAt(word.length-1-i));
//     var startingLetters = word[i]
//     var endingLetters = word.charAt(word.length - 1 - i)

//     if (startingLetters === endingLetters) {
//         isPalindrome = true
//     }
// }
// if (isPalindrome) {
//     console.log("It's a Palindrome!");

// } else {
//     console.log("It's not a Palindrome!");

// }

// var str = prompt("Enter a string:")
// for(var i=0; i<str.length; i++){
//     if(str.slice(i , i+2)==="  "){
//         alert("No double spaces allowed!")
//         break;
//     }
// }


var userWord = prompt("enter any word") // sameen
var result = "";

for (var i = userWord.length -1 ; i >= 0 ; i--) {
//  console.log(userWord[i]);
result += userWord[i]


}
if (userWord === result) {
    console.log("its a palindrome");
    
    
}else{
    console.log("its not palindrome");
    
}
// console.log(result)

