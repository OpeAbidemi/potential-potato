// Decision Making

let password = "12345678"

if (password.length >= 8) {
    console.log("Your password is strong");
} else {
    console.log("Weak password");
}

// password.length >= 8 ? console.log("Your password is strong") : console.log("Weak password");

// let score = parseFloat(prompt("Enter score")); 

// if (score > 100) {
//     console.log("This score is obviously fake");
// }else if (score >= 75) {
//     console.log("Grade A");
// } else if (score >= 55) {
//     console.log("Grade B");
// } else if (score >= 35) {
//     console.log("Grade C");
// }else {
//     console.log("You failed");
// }

const month = prompt("Enter month")

switch (month) {
    case "JAN":
    case "MAR":
    case "JUL":
    case "AUG":
    case "OCT":
    case "DEC":
        console.log("This month has 31 days");
        break;
    case "SEP":
    case "APR":
    case "JUNE":
    case "NOV":
        console.log("This month has 30 days");
        break;
    case "FEB":
        console.log("This month has 29 or 28 days");
        break;
    default:
        console.log("No case matched");
        break;
}
