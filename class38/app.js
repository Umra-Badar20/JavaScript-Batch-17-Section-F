// var obj ={
//     name: "Umra",
//     lName: "Badar",
//     fullName: function(){
//         console.log(`${obj.name} ${this.lName}`);

//     },
//     student:{
//         name: "Neha",
//         lName:"Khan",
//         fullName:function(){
//             console.log(`${obj.name} ${this.lName}`);
//         }
//     }
// }

// obj.fullName()
// obj.student.fullName()

// var student = {
//   student1: {
//     name: "Neha",
//     email: "neha@gmail.com",
//   },
//   student2:{
//     name:"wajeeha",
//     email:"wajeeha@gmail.com"
//   }
// };

// function Student(a,email){
//   this.name =a,
//   this.email=email
//   this.fullname= function(){
//      console.log(`${this.name}`);
//   }
// }
// var student1 = new Student("Neha", "neha@gmail.com")
// var student2 = new Student("wajeeha", "wajeeha@gmail.com")
// console.log(student1);
// console.log(student2);

var quiz = [
  {
    question: "1: What does HTML stand for?",
    option1: "Home Tool Markup Language",
    option2: "Hyper Text Markup Language",
    option3: "Hyperlinks and Text Markup Language",
    option4: "Hyper Text Makeup Language",
    answer: "Hyper Text Markup Language",
  },
  {
    question: "2: Which HTML tag is used to define an internal style sheet?",
    option1: "&lt link &gt",
    option2: "&ltscript&gt",
    option3: "&ltcss&gt",
    option4: "&ltstyle&gt",
    answer: "&ltstyle&gt",
  },
  {
    question: "3: What does HTML stand for?",
    option1: "Home Tool Markup Language",
    option2: "Hyper Text Markup Language",
    option3: "Hyperlinks and Text Markup Language",
    option4: "Hyper Text Makeup Language",
    answer: "Hyper Text Markup Language",
  },
];
var questions = document.getElementById("questions");
var index = 0;
function renderQuiz() {
  questions.innerHTML = `
<div id="question">${quiz[index].question}</div>

        <ul class="list-group">
          <li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="firstRadio"
              checked
            />
            <label class="form-check-label" for="firstRadio">${quiz[index].option1}</label>
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="secondRadio"
            />
            <label class="form-check-label" for="secondRadio"
              >${quiz[index].option2}</label
            >
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="thirdRadio"
            />
            <label class="form-check-label" for="thirdRadio">${quiz[index].option3}</label>
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="forthRadio"
            />
            <label class="form-check-label" for="forthRadio">${quiz[index].option3}</label>
          </li>
        </ul>
`;
index++
}
renderQuiz();
