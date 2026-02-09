function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 
const multiply =(a,b)=>a*b;
let student={
    name:"Akriti",
    age:20,
    course:"btech",
}
console.log(student.name);
console.time("test");
for(let i=0;i<10000;i++){}
   console.timeEnd("test");
   console.group("Student Details");
   console.log("Name: Akriti Yadav");
   console.log("Age: 20");
   console.log("Course: BTech");
   console.groupEnd();
   console.count("a")
   console.count("a")
   let students={name:"akriti",age:20,course:"btech"};
    console.table(students);
   
