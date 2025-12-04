function Employee(name, age, email, qualification, residence, expSalary) {
  (this.employeeName = name),
    (this.age = age),
    (this.email = email),
    (this.qualification = qualification),
    (this.residence = residence),
    (this.expSalary = expSalary);
}
Employee.prototype.orgnization = "SMIT";
Employee.prototype.fullName = function () {
  console.log("Your name is " + this.employeeName);
};

var developer = new Employee(
  "Umra",
  23,
  "umra@gmail.com",
  "BSSE",
  "Karachi",
  1000000
);
var GD = new Employee(
  "Sameen",
  23,
  "sameen@gmail.com",
  "BSSE",
  "Karachi",
  100000
);
console.log(developer);
developer.fullName();
console.log(GD);
console.log("fullName" in developer);// Checks prototypes & keys of object
console.log("hasOwnProperty" in developer);
console.log(developer.hasOwnProperty("fullName")); //Only check keys of object

// window.location.href = "about.html"
// window.location.assign("about.html")
// window.location.replace("about.html")


//After hosting
// window.location.pathname = "about.html"
var newWin = window.open("","","width=420,height=380, left=500,top=500")
var dataDisplay = "<h1> Hello Umra </h1>"
newWin.document.write(dataDisplay)