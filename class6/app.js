//___________________________CHAP 14_____________________________________
// var num1 = +prompt("first number")
// var num2 = +prompt("second number")
// var operator = prompt("choose operator '+', '-', '*', '/' :")

// if(operator === "+"){
//     console.log(num1 + num2)
// }
// else if(operator === "-"){
//     console.log(num1 - num2)
// }
// else if(operator === "*"){
//     console.log(num1 * num2)
// }
// else if(operator === "/"){
//     if(num2 !== 0){
//         console.log(num1 / num2)
//     }else{console.log("Error not divided by 0")}
// }else{console.log("invalid operator")}

// var gender = prompt("your gender")

// if (gender === "male") {
//     var age = +prompt("your age")
//     var eduPer = +prompt("your percentage")

//     if ((age >= 20 && age <= 35) && (eduPer >= 80 && eduPer <= 100)) {
//         console.log("send CV sir")
//     } else { console.log("sorry sir") }
// }
// else if (gender === "female") {
//     var age = +prompt("your age")
//     var eduPer = +prompt("your percentage")
//     if ((age >= 18 && age <= 25) && (eduPer >= 70 && eduPer <= 100)) {
//         console.log("send CV ma'am")
//     } else { console.log("sorry ma'am") }
// } else { console.log("transgender not allowed") }

// ARRAY 

// var student1 = "hudaibiya"
// var edu = "bs"
// var student1 = "hudaibiya"
// var student1 = "hudaibiya"
// var student1 = "hudaibiya"
// var student1 = "hudaibiya"
// var student1 = "hudaibiya"
//  var studentOfSmit = ["sameen","unsha","muheer","hudaibiya" ,"hafsa"]
//  console.log(studentOfSmit[2]);
// alert("welcome " + studentOfSmit[4])

var studentData = ["unsha", 20 , "master", "res"]
console.log(studentData[2]);


// var arr = [] .....syntax
undefined
//empty declaration
undefined
var family_members = [];
undefined
family_members[0] = "asra";
'asra'
family_members[3] = "wajahat";
'wajahat'
family_members;
(4) ['asra', empty × 2, 'wajahat']
family_members[2];
undefined
family_members[2] = "yusra";
'yusra'
family_members[1] = "muntaha";
'muntaha'
family_members;
(4) ['asra', 'muntaha', 'yusra', 'wajahat']
family_members.length
4
// push method/ function
undefined
family_members.push("muheerah" , "faqahat");
6
family_members
(6) ['asra', 'muntaha', 'yusra', 'wajahat', 'muheerah', 'faqahat']
// pop method/ function .... remove
undefined
family_members.pop();
'faqahat'
family_members;
(5) ['asra', 'muntaha', 'yusra', 'wajahat', 'muheerah']
family_members.push("faqahat");
6
family_members.length;
6
family_members;
(6) ['asra', 'muntaha', 'yusra', 'wajahat', 'muheerah', 'faqahat']
// shift, unshift (beginning add, remove)
undefined
family_members.shift();
'asra'
family_members;
(5) ['muntaha', 'yusra', 'wajahat', 'muheerah', 'faqahat']
family_members.unshift("asra");
6
family_members;
(6) ['asra', 'muntaha', 'yusra', 'wajahat', 'muheerah', 'faqahat']0: "asra"1: "muntaha"2: "yusra"3: "wajahat"4: "muheerah"5: "faqahat"length: 6[[Prototype]]: Array(0)
// splice ... remove, replace, insert
undefined
family_members.splice(2, 1);
['yusra']
family_members;
(5) ['asra', 'muntaha', 'wajahat', 'muheerah', 'faqahat']
family_members.splice(0, 0, "yusra");
[]
family_members;
(6) ['yusra', 'asra', 'muntaha', 'wajahat', 'muheerah', 'faqahat']
family_members.splice(2, 4);
(4) ['muntaha', 'wajahat', 'muheerah', 'faqahat']
family_members;
(2) ['yusra', 'asra']
family_members.splice(0, 0, "muheerah", "wajahat", "faqahat", "muntaha");
[]
family_members;
(6) ['muheerah', 'wajahat', 'faqahat', 'muntaha', 'yusra', 'asra']
family_members[1] = "wajji";
'wajji'
family_members;
(6) ['muheerah', 'wajji', 'faqahat', 'muntaha', 'yusra', 'asra']
// slice ... copies ... (index, index+1)
undefined
family_members.slice(0, 3);
(3) ['muheerah', 'wajji', 'faqahat']
family_members;
(6) ['muheerah', 'wajji', 'faqahat', 'muntaha', 'yusra', 'asra']
family_members.slice(4, 6);
(2) ['yusra', 'asra']

 

// ARRAY SYNTAX ... array = []
undefined
var family_members = [];
undefined
family_members = [1, 2, 3 , 4 ,5 ]
(5) [1, 2, 3, 4, 5]
// push , pop (end)
undefined
// shift, unshift (starting array)
undefined
// splice (remove, replace, insert)
undefined
family_members.push(6, 7, 8, 9, 10);
10
family_members;
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]