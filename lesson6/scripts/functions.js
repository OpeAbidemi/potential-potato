// Functions

// const names = ["James", "Michael", "John", "Emmanuel"]
// // console.log(names[names.length - 1]);

// const scores = [2, 5, 6];

// function getLastItem(arr) {
//     console.log(arr[arr.length - 1]);
// }

// getLastItem(names)
// getLastItem(scores)

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// function sum(a , b) {
//     console.log(a + b);
// }

// function subt(a, b) {
//     console.log(a - b);
// }

// function greet(name) {
//     console.log("Hello " + name);
// }

// sum(10, 20)
// sum(11, 45)
// subt(20, 30)
// greet("James")
// greet("John")

// const add = (a, b) => {
//     console.log(a + b);
// }

// add(10, 40)

const languages = ["Java", "Python", "JavaScript", "Kotlin", "Swift", "C++", "C", "Dart", "Scalar", "Rust", "Ruby", "R", "C#", "Visual Basic", "TypeScript", "Haskel", "go", "Erlang", "Elixir", "Solidity"];

// const doSomething = () => {
//     console.log("Doing something");
// }

// const greet = (v, i, arr) => {
//     console.log(arr);
// }

// const num = (a) => {
//     console.log(a);
// }

// For Each
languages.forEach((v, i, arr) => {
    console.log(i);
});

// Filter
const langWith4orLess = languages.filter((value, index) => index < 4 || value.includes("a"));

console.log(langWith4orLess);

// Find
const firstLangWith4orLess = languages.find((value, index) => index < 4 || value.includes("a"));

console.log(firstLangWith4orLess);

const everyPassed = languages.every((value, index) => index < 4 || value.includes("a"));

console.log(everyPassed);

const somePassed = languages.some((value, index) => index < 4 || value.includes("a"));

console.log(somePassed);

// for (const lan of languages) {
//     doSomething()
// }