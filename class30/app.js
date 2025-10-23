function submit(){
    // var fName = document.getElementById('fName')
    // var lName = document.getElementById('lName')
    // console.log(fName.value, lName.value);
    
    // fName.value = ""
    // lName.value = ""
    // var test = document.getElementById('test').value
    // console.log(test);


//     var gender = document.getElementsByName("gender") //[]
//   console.log(gender);
//     for(var i=0; i<gender.length; i++){
//         console.log(gender[i]);
        
//         // console.log(gender[i].checked); //true, false
//         if(gender[i].checked){
//             console.log(gender[i].value);
            
//         }
        
//     }
    
    // var fName = document.getElementById('fName').value
    // var lName = document.getElementById('lName').value
    // var heading = document.getElementById("heading")
    // console.log(fName,lName);
    
    // heading.innerText= "<i>"+fName+ " "+ lName+  "</i>"
    // heading.innerHTML= "<i>"+fName+ " "+ lName+  "</i>"



}
function expandText(){
    var shortText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam sunt ea eligendi explicabo quibusdam voluptatum repudiandae facere blanditiis quisquam. Tempora asperiores consequatur, ipsam nulla suscipit dolore. Nulla, soluta neque."
    var para = document.getElementById("para")
    var link = document.getElementById("link")

    if(link.innerHTML ==="See more"){
        link.innerHTML="See less"
        para.innerHTML = text
    }else{
        link.innerHTML="See more"
        para.innerHTML = shortText
    }
    // para.innerHTML = text
}