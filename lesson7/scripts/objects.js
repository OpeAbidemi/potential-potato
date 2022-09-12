const person = {
    name: "James",
    age: 20,
    gender: "m",
    isDark: true
}

const country = {
    name: "Nigeria",
    capital: "Abuja",
    population: 2_000_000_000,
    isPoor: true,
    states: [
        {
            name: "Abia",
            capital: "Umuahia"
        },
        {
            name: "Ogun",
            capital: "Abeokuta" 
        }
    ],
    president: {
        name: "McPherson",
        age: null,
        gender: "trans"
    }
}

// console.log(country.president.name);
// console.log(country["isPoor"]);
// console.log(country.isPoor);

// console.log(Object.values(country));


const students = [
    {
        name: "Hussaina",
        course: "Web Dev",
        gender: "female"
    },
    {
        name: "Dimeji",
        course: "Web Dev",
        gender: "male"
    },
    {
        name: "Emmanuel",
        course: "Web Dev",
        gender: "male"
    },
    {
        name: "Ope",
        course: "Web Dev",
        gender: "male"
    },
    {
        name: "Rahim",
        course: "Java",
        gender: "male"
    },
    {
        name: "Shifau",
        course: "Web Design",
        gender: "transgender"
    },
    {
        name: "Hassana",
        course: "Web Dev",
        gender: "female"
    },
    {
        name: "Quawiy",
        course: "Web Dev",
        gender: "male"
    },
    {
        name: "Mayorh",
        course: "Human Anatomy",
        gender: "male"
    }
];

console.log(students.length);

console.log(students.filter((student) => {
    return student.course !== "Web Dev"
}).length);

// console.log(students.filter(function (student){
//     return student.course === "Web Dev"
// }).length);

console.log(students.find(student => student.course === "Web Dev"));