
// // String
// let firstName = "David";
// // Number
// let age = 23.4;
// // Boolean
// let isDarkMode = false;

// console.log(firstName);
// console.log(age);
// console.log(isDarkMode);


// let x, y; // Declaring
// x = 20 // Initializing

// console.log(x);
// console.log(y);

// x = 25; // Changing

// console.log(x);

// const PI = 3.142;

// var surname = "Bond"


// {
//     var surname = "James"

//     const gender = "male" 

//     console.log(surname);

// }

// // console.log(gender);


let fullName = "James Bond"

// Create a new h1 element
const heading = document.createElement("h1");

// Sets innerHTML to fullName
heading.innerHTML = fullName;
heading.id = "newElement"
heading.classList.add("box")
heading.classList.add("green")

// console.log(heading.id == "newElement")

// appeding it to the body
document.body.appendChild(heading);

// div
const box = document.createElement("div");

// span 
const span1 = document.createElement("span")
span1.innerHTML = "Hey"

span1.style.color = "red"

// span 
const span2 = document.createElement("span")
span2.innerHTML = "Boy"


box.append(span1, span2)

document.body.appendChild(box)

