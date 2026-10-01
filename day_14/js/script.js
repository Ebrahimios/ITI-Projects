//question 4
const fruits = ["Apple","Banana","Orange"];

for(let fruit of fruits){
    console.log(fruit);
}
console.log("=======================");

for(let fruit in fruits){
    console.log(fruit);
}
console.log("=======================");

fruits.forEach(function(fruit, index){
    console.log(`${index} --> ${fruit}`);
})
console.log("=======================");

//convert to arrow function
// function sum(a,b){
//     return a+b;
// }

let sum = (a,b) => a+b;

//use destructuring
const user = {
    name:"Mostafa",
    age:25
};

let {name, age} = user;
console.log(name, age);
console.log("=======================");

//use template literals
//console.log("Hello " + name);
console.log(`Hello ${name}`);
console.log("=======================");

//use spread operator
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log("=======================");

//question 6
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];

let names = students.map(student => student.name);
console.log(names);
console.log("=======================");

let studentsOver60 = students.filter(student => student.degree >= 60);
console.log(studentsOver60);
console.log("=======================");

let firstStudentOver90 = students.find(student => student.degree > 90);
console.log(firstStudentOver90);
console.log("=======================");

students.forEach(student => {
    console.log(student.name);
})
console.log("=======================");

//Bonus
const numbers = [5,10,15,20];
sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
