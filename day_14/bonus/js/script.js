const employees = [
{
    id: 1,
    name: "Ahmed",
    age: 22,
    salary: 6000,
    department: "IT",
    active: true
},
{
    id: 2,
    name: "Sara",
    age: 27,
    salary: 8500,
    department: "HR",
    active: true
},
{
    id: 3,
    name: "Ali",
    age: 20,
    salary: 4500,
    department: "IT",
    active: false
},
{
    id: 4,
    name: "Mona",
    age: 30,
    salary: 10000,
    department: "Finance",
    active: true
},
{
    id: 5,
    name: "Omar",
    age: 24,
    salary: 7000,
    department: "Marketing",
    active: false
},
{
    id: 6,
    name: "Youssef",
    age: 29,
    salary: 12000,
    department: "IT",
    active: true
}
];

// print the names of all employees using:
// for
// for...of
// forEach

for(let i=0; i<employees.length; i++){
    console.log(employees[i].name);
}
console.log("=======================");

for(let employee of employees){
    console.log(employee.name);
}
console.log("=======================");

employees.forEach(employee => {
    console.log(employee.name);
})
console.log("=======================");

//print index of all employees using:
// for...in
for(let employee in employees){
    console.log(employee);
}
console.log("=======================");

//print active employees using:
//for loop
for(let i = 0; i < employees.length; i++){
    if(employees[i].active){
        console.log(employees[i].name);
    }
}
console.log("=======================");

//convert to arrow function
// function welcome(name){
//    return "Welcome " + name;
// }
let welcome = (name) => `Welcome ${name}`;

//destructuring
const employee = employees[0];
let {name, salary} = employee;
console.log(name, salary);
console.log("=======================");

//make a copy of the employees array using spread operator and add Country: "Egypt"
let newEmployee = [...employees.map(emp => ({...emp, country: "Egypt"}))];
console.log(newEmployee);
console.log("=======================");

employees.forEach(employee => {
    console.log(`${employee.name} works in ${employee.department} and earns ${employee.salary}`);
})


//map()
let employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);

let employeeSalaries = employees.map(employee => employee.salary);
console.log(employeeSalaries);

let employeeFormat = employees.map(employee => `${employee.name} (${employee.department})`);
console.log(employeeFormat);

let employeeAddedSalary = employees.map(employee => ({...employee, salary: employee.salary + 1000}));
console.log(employeeAddedSalary);
console.log("=======================");

//filter()
let employeeWithHighSalary = employees.filter(employee => employee.salary > 7000);
console.log(employeeWithHighSalary);

let itEmployees = employees.filter(employee => employee.department === "IT");
console.log(itEmployees);

let activeEmployees = employees.filter(employee => employee.active);
console.log(activeEmployees);

let employeeUnder25Age = employees.filter(employee => employee.age < 25);
console.log(employeeUnder25Age);

let itEmployeesWithHighSalary = employees.filter(employee => employee.department === "IT" && employee.salary > 5000);
console.log(itEmployeesWithHighSalary);

console.log("=======================");

//find()
let firstEmployeeWithHighSalary = employees.find(employee => employee.salary > 9000);
console.log(firstEmployeeWithHighSalary);
console.log("=======================");

let firstHREmployee = employees.find(employee => employee.department === "HR");
console.log(firstHREmployee);
console.log("=======================");

let firstInactiveEmployee = employees.find(employee => !employee.active);
console.log(firstInactiveEmployee);
console.log("=======================");

let employeeById = employees.find(employee => employee.id === 100);
console.log(employeeById);

//what happened? it returns undefined because there is no employee with id 100 in the employees array.

//mix challenges

//employees names of active employees
let activeEmployeesNames = employees.filter(employee => employee.active).map(employee => employee.name);
console.log(activeEmployeesNames);
console.log("=======================");

//employees names of IT employees
let itEmployeesNames = employees.filter(employee => employee.department === "IT").map(employee => employee.name);
console.log(itEmployeesNames);
console.log("=======================");

//employees names of employees with salary > 7000
let employeesWithHighSalaryNames = employees.filter(employee => employee.salary > 7000).map(employee => employee.name);
console.log(employeesWithHighSalaryNames);
console.log("=======================");

//employees names with bonus
let employeesWithBonus = employees.map(employee => ({employee: employee.name, bonus: employee.salary / 10}));
console.log(employeesWithBonus);

//first character of each employee name
let firstCharacterOfEmployeeNames = employees.map(employee => employee.name.charAt(0));
console.log(firstCharacterOfEmployeeNames);
console.log("=======================");

//Logical Thinking
const numbers = [5,12,8,20,15,30,3,40];

let numbersGreaterThan10 = numbers.filter(number => number > 10);
console.log(numbersGreaterThan10);
console.log("=======================");


let numbersX2 = numbers.map(number => number * 2);
console.log(numbersX2);
console.log("=======================");

let firstNumberGreaterThan25 = numbers.find(number => number > 25);
console.log(firstNumberGreaterThan25);
console.log("=======================");


for(let number of numbers){
    console.log(`Number is ${number}`);
}
console.log("=======================");

let numbersString = numbers.map(number => `Number is ${number}`);
console.log(numbersString);
console.log("=======================");

//object challenges
const product = {
    id:1,
    title:"Laptop",
    price:25000,
    category:"Electronics"
}

for(let key in product){
    console.log(key);
}
console.log("=======================");


for(let key in product){
    console.log(product[key]);
}
console.log("=======================");

Object.assign(product, {stock: 15});
console.log(product);
console.log("=======================");

const {title, price} = product;
console.log(title, price);
console.log("=======================");

//mini dashboard
function dashboard(){
    let totalEmployees = employees.length;
    let activeEmployees = employees.filter(employee => employee.active).length;
    let inactiveEmployees = employees.filter(employee => !employee.active).length;
    let itEmployees = employees.filter(employee => employee.department === "IT").length;
    let highestSalary = Math.max(...employees.map(employee => employee.salary));
    let firstHREmployee = employees.find(employee => employee.department === "HR").name;
    let employeeNames = employees.map(employee => employee.name);

    console.log(`Total Employees : ${totalEmployees}`);
    console.log(`Active Employees : ${activeEmployees}`);
    console.log(`Inactive Employees : ${inactiveEmployees}`);
    console.log(`IT Employees : ${itEmployees}`);
    console.log(`Highest Salary : ${highestSalary}`);
    console.log(`First HR Employee : ${firstHREmployee}`);
    console.log(`Employee Names :`);
    employeeNames.forEach(name => console.log(name));
}

dashboard();

console.log("=======================");

//Bonus
let totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log(totalSalary);

let averageSalary = totalSalary / employees.length;
console.log(averageSalary);

let highestSalary = Math.max(...employees.map(employee => employee.salary));
console.log(highestSalary);


let activeEmployeesCount = employees.filter(employee => employee.active).length;
console.log(activeEmployeesCount);


