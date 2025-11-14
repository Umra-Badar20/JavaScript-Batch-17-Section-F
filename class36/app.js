var student1 = {
    name:"Umra",
    email: "umra@gmail.com",
    course: "WMA",
    enrolled: true,
    rollNo: 1011,
    subjects: ["HTML", "CSS", "JS"],
    class: {
        timing: "4-6",
        days: ["Tuesday","Thursday","Friday"]
    },
    greet: function(){
        console.log(`Welcome user ${this.name} your Roll number is ${this.rollNo}`);       
    }
}
student1.greet()
// Object.freeze(student1)

console.log("timing" in student1.class);

student1.name="Umra"
student1.batch = 17
var student2 = {
    name: "Sameen",
    email: "sameen@gmail.com",
    course: "WMA",
    enrolled: true,
    rollNo: 1012,
    subjects: ["HTML", "CSS", "JS"],
    class: {
        timing: "4-6",
        days: ["Tuesday","Thursday","Friday"]
    },
     greet: function(){
        console.log(`Welcome user ${this.name} your Roll number is ${this.rollNo}`);       
    }
}
student2.greet()
student1.enrolled=false
student1.class.days.splice(1,1,"Wednesday")
student1.subjects.push("React")
console.log(student1);
console.log(student1.email);
console.log(student1.subjects[0]);
console.log(student1.class.timing);
console.log(student1.class.days[0]);
delete student1.class
console.log(Object.keys(student1)[0]);





var table = document.getElementById("table")
table.innerHTML=`
<table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Roll NO</th>
                <th>Subjects</th>
                <th>Timings</th>
                <th>Days</th>
            </tr>
            <tr>
                <td>${student1.name}</td>
                <td>${student1.email}</td>
                <td rowspan=2>${student1.course}</td>
                <td>${student1.rollNo}</td>
                <td rowspan=2>${student1.subjects[0]}, ${student1.subjects[1]}, ${student1.subjects[2]}</td>
                <td rowspan=2>${student1.class.timing}</td>
                <td rowspan=2>${student1.class.days[0]}, ${student1.class.days[1]}, ${student1.class.days[2]}</td>
            </tr>
            <tr>
                <td>${student2.name}</td>
                <td>${student2.email}</td>
                <td>${student2.rollNo}</td>
            </tr>
        </table>
`