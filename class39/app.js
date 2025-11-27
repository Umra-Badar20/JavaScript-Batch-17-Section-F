
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
    option1: " link",
    option2: "script",
    option3: "css",
    option4: "style",
    answer: "style",
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
var container = document.getElementsByClassName("container")[0]

var questions = document.getElementById("questions");
var nextBtn= document.getElementById("nextBtn")
var index = 0;
var score = 0
function renderQuiz() {
    // console.log(index, quiz.length);
    
    if(index === quiz.length-1){
        nextBtn.innerHTML= "Submit"
    }
    if(!quiz[index]){
        // console.log(score);
        container.innerHTML=`
        <div class="card text-center">
  <div class="card-header">
    SMIT HTML Quiz
  </div>
  <div class="card-body">
    <h5 class="card-title">${score}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="" class="btn btn-primary">Retake</a>
  </div>
 
</div>`
        
        return
    }
  questions.innerHTML = `
<div id="question">${quiz[index].question}</div>

        <ul class="list-group">
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option1}"
              id="firstRadio"
            />
            <label class="form-check-label" for="firstRadio">${quiz[index].option1}</label>
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option2}"
              id="secondRadio"
            />
            <label class="form-check-label" for="secondRadio"
              >${quiz[index].option2}</label
            >
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option3}"
              id="thirdRadio"
            />
            <label class="form-check-label" for="thirdRadio">${quiz[index].option3}</label>
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option4}"
              id="forthRadio"
            />
            <label class="form-check-label" for="forthRadio">${quiz[index].option4}</label>
          </li>
        </ul>
`;
 nextBtn.disabled= true

index++
}
renderQuiz();

function nextEnabled(){
//  nextBtn.removeAttribute("disabled")
 nextBtn.disabled= false

 var options=document.getElementsByClassName("form-check-input")
 for(var i=0; i< options.length; i++){
    // console.log(options[i].checked);

    if(options[i].checked){
        // console.log(options[i].value);
        // console.log(quiz[index-1].answer);
        if(options[i].value===quiz[index-1].answer){
            score++
            
        }
        
    }
 } 
}