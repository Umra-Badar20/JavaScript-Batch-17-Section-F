var student = {
    name: "Umra",
    email: "umra@gmail.com",
    id:1,
}
// console.log(student.hasOwnProperty("class"));
// console.log(Object.hasOwn(student,"age"));

console.log(Object.entries(student));


for(var [key, value] of Object.entries(student)){
    console.log(`${key} : ${value}`);    
}