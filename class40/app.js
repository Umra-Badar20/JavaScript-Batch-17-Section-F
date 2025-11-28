function Student(name,fName, email, phone,id){
    this.studentName = name,
    this.fName = fName,
    this.studentEmail = email,
    this.phone =phone,
    this.id= id,
    this.address = {
        city:"karach",
        country: "Pakistan"
    },
    this.fullName = function(){
        console.log(this.studentName+" "+this.fName);
        
    }
}
var umra = new Student("Umra","Badar","umra@gmail.com",923312345678,1)
var sameen = new Student("Sameen","Arshad","sameen@gmail.com",923312345678,2)
var StudentArr = [umra, sameen]
console.log(StudentArr);

console.log(umra);
console.log(sameen);

umra.fullName()
sameen.fullName()
localStorage.setItem("name","Sameen")
localStorage.setItem("class","WMA")

var arr = ["Umra","Afia","Neha"]
localStorage.setItem('students',JSON.stringify(arr))
var data = localStorage.getItem("students")
console.log(data);
var parseData = JSON.parse(data)
console.log(parseData);
