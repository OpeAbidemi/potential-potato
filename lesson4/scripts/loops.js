// // Loops

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // i = 0

// do {
//     i++;
//     console.log(i);
// } while(i <= 10)

let password;
let tries = 0;

do {
    if (tries >= 5) {
        alert("You have passed the limit, try again after 24 years");
        break;
    }
    password = prompt("Enter your password")
    tries++;
} while(password !== "jamesbond")