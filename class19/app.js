// var firstRamadan = new Date("17 feb 2026")
// console.log(firstRamadan.getTime());
// var today = new Date()
// console.log(today.getTime());

// var difference= firstRamadan.getTime() - today.getTime()

// var days = Math.round(difference / 86400000)
// var months = difference / (1000 * 60 * 60 *24 *30)
// console.log(Math.round(months));

// console.log(days);
// console.log(today.getFullYear());

// var today = new Date()
// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());


// var birthDate = new Date(prompt("Enter your DOB: MM-DD-YYYY"))
// var today = new Date()
// var age = today.getFullYear() - birthDate.getFullYear()

// console.log(age);
var d = new Date("July 21, 1983 13:25:00");
console.log(d);
var momDate = moment().format("Do MMMM, YYYY | hh:mm:ss A");
console.log(momDate);
console.log(moment([2010, 12,10]).fromNow());

