//JS - dynamically typed
// var a = 1;
// a = "santosh";
// a = true;
// console.log(a);

//let var const
// var isStudent = true;
// let name = "santosh";
// const grade = "A";
// grade = "B";
// console.log(name);
// console.log(grade)

//Arrays
// let user1 = "senkar"
// let user2 = "santosh"
// let user3 = "tom"
// console.log(user3);
// let users = ["senkar", "santosh", "tom"];
// console.log(users[1]);
// console.log(users[3]);

//Operators
// let sum = 10 + 20 //Arithmatic operator
// console.log(sum);
// let age = 19;
// let canVote = age > 18 //comparision operator
// console.log(canVote);
// let isTrue = true && false //Logical operator
// console.log(isTrue)

//Functions
// function greet(name) {
//     return "Hello " + name;
// }
// let greetSantosh = greet("Santosh");
// console.log(greetSantosh);

// function votingAge(age) {
//     return age > 18
// }

// let canVote1 = votingAge(18);
// let canVote2 = votingAge("Santosh");
// console.log(canVote1);
// console.log(canVote2);

// function canVote(age) {
//     if (age >= 18) {
//         console.log("You are an adult");
//     } else {
//         console.log("You are a minor");
//     }
// }
// canVote(18);

//Loops - Initiation Condition incrementation
// let users = ["Senkar", "Santosh", "Tom", "Ram"]

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// Objects
// let user = {
//     name: "Santosh",
//     age: 19
// }
// console.log(user.name);
// console.log(user["age"]);
// console.log(user[age]); //age not defined exception

//Array of Ojbects
// let users = [{
//     name: "Santosh",
//     age: 19
// }, {
//     name: "Kumar",
//     age: 22
// }]

// console.log("second user's age is " + users[1].age);

//Get only male adults
// let users = [{
//     name: "Santosh",
//     age: 22,
//     gender: "male"
// }, {
//     name: "Kumar",
//     age: 19,
//     gender: "male"
// }, {
//     name: "Tom",
//     age: 14,
//     gender: "male"
// }, {
//     name: "Sarayu",
//     age: 22,
//     gender: "female"
// }]

// function getMaleAdults(users) {
//     let maleAdults = users.filter(user => user.age > 18 && user.gender == "male")
//     return maleAdults
// }
// let maleAdults = getMaleAdults(users);
// console.log(maleAdults);
