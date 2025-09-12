var word = prompt("Enter a word:") // ciiviic
var isPalindrome = false;

for(var i = 0; i<(word.length-1)/2; i++){
    // console.log(word[i]);
    // console.log(word.charAt(word.length-1-i));
    var startingLetters = word[i]
    var endingLetters = word.charAt(word.length-1-i)

    if(startingLetters===endingLetters){
        isPalindrome=true
    }
}
if(isPalindrome){
    console.log("It's a Palindrome!");
    
}else{
    console.log("It's not a Palindrome!");

}