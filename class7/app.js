// var isSmitStudent = false;
// var isWMAStudent = true;

// if(isSmitStudent){
//     if(isWMAStudent){
//         console.log("Congratulatins! You Passed");        
//     }else{
//             console.log("You are not the student of WMA");  
//     }
// }else{
//     console.log("You are not the student of SMIT");  
// }

// var userName = prompt("Enter your name:") || "Not provided";
// console.log(userName);

// if(userName){
//     console.log(userName);    
// }else{
//     console.log("Not provided");    
// }





// var arr = [1,2,3,4,5,6,7]
// var returnedValue =arr.pop()
// console.log(returnedValue);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7]
// var returnedValue =arr.push("Push")
// console.log(returnedValue);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7]
// var returnedValue =arr.shift()
// console.log(returnedValue);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7] //7
// var returnedValue =arr.unshift("Unshift")
// console.log(returnedValue); //8
// console.log(arr);

// var arr = [1,2,3,4,5,6,7]
// var returnedValue =arr.splice(3,1,3.5)
// console.log(returnedValue);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7]
// var returnedValue =arr.slice(2,5)
// console.log(returnedValue);
// console.log(arr);


// var arr = [1,2,3,4,5,6,7]
// arr[arr.length] = 8
// arr[arr.length] = 9
// console.log(arr);



// var name = "Umra Badar"
// console.log(name.slice(0,4));
// var firstName = name.slice(0,4)
// console.log(firstName);

//___________________________LOOPs_________

// var no = +prompt("Enter the number...", 5)
// for(var i=0; i<=20; i+=2){
//     var result=no*i;
//     document.write(no+ " * " +i+ " = " +result+ "<br>")
// }

// var odd_no= [1, 3, 5 , 7, 9]
// var names = [ "furqan", "mehak" , "muzammil"]
// for(i=0; i<names.length; i++){
//     document.write("Array at Index [" +i+ "] : " +names[i]+ "<br>")
// }

var sum=0
for(i=1; i<=10; i++){
sum+=i //sum= sum+i 
}
console.log(" Result: " +sum)