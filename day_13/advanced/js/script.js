let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];

//students count
console.log(students.length);
console.log("====================");

//first student
console.log(students[0])
console.log("====================");

//last student
console.log(students[students.length - 1])
console.log("====================");

//all names 
for(let i = 0; i < students.length; i++){
    console.log(students[i].name)
}
console.log("====================");

//all students another way
for(let i = 0; i < students.length; i++){
    console.log(`Name: ${students[i].name}`)
    console.log(`Age: ${students[i].age}`)
    console.log(`City: ${students[i].city}`)
    console.log(`Grade: ${students[i].grade}`)
    console.log(`====================`);
}

//students over 18
for (let i = 0; i < students.length; i++) {
    if (students[i].age > 18) {
        console.log(students[i].name);
    }
}
console.log("====================");

//students over 90 grade
for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 90) {
        console.log(students[i].name);
    }
}
console.log("====================");

//graduate students
for (let i = 0; i < students.length; i++) {
    if (students[i].isGraduated === true) {
        console.log(students[i].name);
    }
}
console.log("====================");

//undergraduate students
for (let i = 0; i < students.length; i++) {
    if (students[i].isGraduated !== true) {
        console.log(students[i].name);
    }
}
console.log("====================");

//sum of students grade
let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
}
console.log(`Sum: ${sum}`)
console.log("====================");

//average grade
sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
}
console.log(`Average: ${sum / students.length}`)
console.log("====================");

//greatest grade
let max = students[0].grade;
for (let i = 0; i < students.length; i++) {
    if(max < students[i].grade) max = students[i].grade;
}
console.log(`Greatest: ${max}`)
console.log("====================");

//least grade
let min = students[0].grade;
for (let i = 0; i < students.length; i++) {
    if(min > students[i].grade) min = students[i].grade;
}
console.log(`Least: ${min}`)
console.log("====================");

//students A to Z
let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
}
names.sort()
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("====================");

//students Z to A
for (let i = 0; i < names.length; i++) {
    console.log(names[names.length - 1 - i]);
}
console.log("====================");

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
    console.log(`Name length: ${names[i].length}`);
    console.log(`first char: ${names[i][0]}`);
    console.log(`last char: ${names[i][names[i].length - 1]}`);
    console.log("====================");
}

//capital 
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}
console.log("====================");

//capital 
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toLowerCase());
}
console.log("====================");

//include Ali?
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
    console.log(`Include Ali?`);
    if(names[i].includes("Ali")) console.log("Yes");
    else console.log("No");
    console.log("====================");
}
console.log("====================");

// split and join
for (let i = 0; i < names.length; i++) {
    let splitted = names[i].split(" ");
    console.log("Split:", splitted);
    console.log("Join:", splitted.join(" "));
    console.log("====================");
}

//trim
for (let i = 0; i < names.length; i++) {
    console.log("- Trim:", names[i].trim());
}
console.log("====================");

//skills count
for (let i = 0; i < students.length; i++) {
    let skillCount = students[i].skills.length;
    console.log(`${students[i].name}: ${skillCount} skill`)
}
console.log("====================");


//add and remove skill
for (let i = 0; i < students.length; i++) {
    students[i].skills.push("Reading");
    console.log(students[i].skills);
    students[i].skills.pop();
    console.log(students[i].skills);
    console.log("====================");
}

//know Javascript?
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
    console.log(`Know JavaScript?`);
    if(students[i].skills.includes("JS")) console.log("Yes");
    else console.log("No");
    console.log("====================");
}


//reverse skills
for (let i = 0; i < students.length; i++) {
    console.log(students[i].skills)
    students[i].skills = students[i].skills.reverse();
    console.log(`reversed: ${students[i].skills}`)
    console.log("====================");
}
console.log("====================");

//skills a to z
for (let i = 0; i < students.length; i++) {
    console.log(students[i].skills)
    students[i].skills = students[i].skills.sort();
    console.log(`Sorted: ${students[i].skills}`)
    console.log("====================");
}

//skills to string
for (let i = 0; i < students.length; i++) {
    console.log(students[i].skills.toString())
}
console.log("====================");

//Keys
for (let i = 0; i < students.length; i++) {
    Object.entries(students[i]).forEach(([key]) => {
        console.log(key)
    })
    console.log("====================");
}

//Values
for (let i = 0; i < students.length; i++) {
    Object.entries(students[i]).forEach(([key, value]) => {
        console.log(value)
    })
    console.log("====================");
}

//Keys and values
for (let i = 0; i < students.length; i++) {
    Object.entries(students[i]).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
    console.log("====================");
}

//assign country and delete
for (let i = 0; i < students.length; i++) {
    Object.assign(students[i], {country: "Egypt"});
    Object.entries(students[i]).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
    console.log("====================");
    delete students[i].country;
    Object.entries(students[i]).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
    console.log("====================");
}

//check of grade
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
    console.log(`there is grade?: ${"grade" in students[i]}`)
    console.log("====================");
}

//conditions
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let gradeStatus = "";
    if (student.grade >= 90) gradeStatus = "Excellent";
    else if (student.grade >= 80) gradeStatus = "Very Good";
    else if (student.grade >= 70) gradeStatus = "Good";
    else if (student.grade >= 60) gradeStatus = "Pass";
    else gradeStatus = "Failed";

    let ageStatus = (student.age < 18) ? "Minor" : "Adult";

    console.log(`Name: ${student.name}`)
    console.log(`grade: ${student.grade}, ${gradeStatus}`)
    console.log(`age: ${student.name}, ${ageStatus}`)
    console.log("====================");
}

//Functions
function getStudentName(student) {
    return student.name;
}
console.log("Name:", getStudentName(students[0]));

function getStudentAge(student) {
    return student.age;
}
console.log("Age:", getStudentAge(students[0]));

function isStudentPassed(student) {
    return student.grade >= 60;
}
console.log("Is Passed:", isStudentPassed(students[1]));

function getSkillsCount(student) {
    return student.skills.length;
}
console.log("Skills Count:", getSkillsCount(students[2]));

function getAverageGrade(arr) {
    let sum = 0;
    let index = 0;
    while (index < arr.length) {
        sum += arr[index].grade;
        index++;
    }
    return sum / arr.length;
}
console.log("Average Class Grades:", getAverageGrade(students));    

console.log("====================");

let num = 94.20;
console.log("Random Number:", Math.random());
console.log("Round:", Math.round(num));
console.log("Floor:", Math.floor(num));
console.log("Ceil:", Math.ceil(num));
console.log("Max (10, 20, 5):", Math.max(10, 20, 5));
console.log("Min (10, 20, 5):", Math.min(10, 20, 5));
console.log("Pow (2^3):", Math.pow(2, 3));
