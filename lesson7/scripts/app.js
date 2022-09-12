const marks = [[40, 69, 70, 50], [60, 80], [50, 39, 40]];

// This gets the percentage
function percentage(arr){
    const max = arr.length * 100;

    let sum = 0;
    for (const score of arr) {
        sum += score;
    }

    return (sum / max) * 100;
}

for (const student of marks) {
    console.log(percentage(student));
}

// function sayName(name) {
//     console.log("My name is " + name);
// }

// const firstname = "James"

// sayName(firstname)

// function sum(a, b) {
//     return a + b;
// }


// let num1 = 20, num2 = 40;
// sum(num1, num2)
// sum(10, 20)
