const students = [
  {
    name: "Hussaina",
    course: "Web Dev",
    gender: "female",
  },
  {
    name: "Certified Lover Boy",
    gender: "trans",
    course: "Web Design",
  },
  {
    name: "Dimeji",
    course: "Web Dev",
    gender: "male",
  },
  {
    name: "Emmanuel",
    course: "Web Dev",
    gender: "male",
  },
  {
    name: "Ope",
    course: "Web Dev",
    gender: "male",
  },
  {
    name: "Rahim",
    course: "Java",
    gender: "male",
  },
  {
    name: "Shifau",
    course: "Web Design",
    gender: "transgender",
  },
  {
    name: "Hassana",
    course: "Web Dev",
    gender: "female",
  },
  {
    name: "Quawiy",
    course: "Web Dev",
    gender: "male",
  },
  {
    name: "Mayorh",
    course: "Human Anatomy",
    gender: "male",
  },
];

const list = document.querySelector(".students-list");

const preloader = document.getElementById("preloader");

function show() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      preloader.style.transform = "translateY(-100%)";
      res();
    }, 5000);
  });
}

show().then(() => {
  students.forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("card");

    for (const key of Object.keys(student)) {
      const el = document.createElement("p");
      el.classList.add(key);

      el.innerHTML = student[key];

      card.append(el);
    }

    list.appendChild(card);
  });
});
