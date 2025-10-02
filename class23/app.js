function palindromChecker(){
    var word = document.getElementById("word").value
    console.log(word);
     // ciiviic
    var isPalindrome = false;
    
    for (var i = 0; i < (word.length - 1) / 2; i++) {
        // console.log(word[i]);
        // console.log(word.charAt(word.length-1-i));
        var startingLetters = word[i]
        var endingLetters = word.charAt(word.length - 1 - i)
        
        if (startingLetters === endingLetters) {
            isPalindrome = true
        }
    }
    var result = ""
    if (isPalindrome) {
        result +="It's a Palindrome!";
        
    } else {
        result +="It's not a Palindrome!";        
    }
    document.getElementById("result").innerHTML = result
    document.getElementById("word").value = ""
    
}

