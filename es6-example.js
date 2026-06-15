//let
let studentcount = 10;
studentcount = 11;

console.log("student count:",studentcount);

//const
const collegeName = "VETIAS"
console.log("College name:",collegeName);

//template
let studentName = "Nikitha";

console.log(`welcome ${studentName} to ${collegeName}`);

//OBJECT
const student = {
    name: "arun",
    age : "18",
    department : "CSA",
}

//Destructing
const { name,age,department } = student;
console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//arrow
const displayStudent = () => {
    console.log(`Student Name : $(Name)`);
}

//array
const Student = [
    "Arun",
    "Priya",
    "Deva",
]

console.log(Student);

//spread operator
const updateStudent=[
    ...Student,
    "ragavi"
]

console.log(updateStudent);

//reset operator
function maximumMarks(...marks)
{
    let max = Math.max(...marks);
    return max;
} 

console.log("Maximum Marks:",maximumMarks(100,40,50));