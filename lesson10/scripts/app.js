// console.log("My name is James");

// 1
function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello World");
      reject();
    }, 5000);
  });
}

// sayHello()
//   .then(() => {
//     console.log("Promise has been resolved");
//   })
//   .catch(() => {
//     console.log("Promise failed");
//   });

const person1 = {
  name: "David",
  acctBalance: 20000,
};

const person2 = {
  name: "Shifau",
  acctBalance: 150000,
};

function toast(p1, p2, time) {
  return new Promise((accept, reject) => {
    console.log(`${p2.name} is taking ${time}ms to think about it`);
    setTimeout(() => {
      if (p1.acctBalance > p2.acctBalance) {
        accept("Yes");
      } else {
        reject("You're broke");
      }
    }, time);
  });
}

// toast(person1, person2, 5000)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log(response);
//   });

// console.log("Continuation");

// async function wait(time) {
//   setTimeout(() => {
//     console.log("Wait ended");
//   }, time);
// }

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Wait ended");
      resolve();
    }, time);
  });
}

async function run() {
  await toast(person1, person2, 2000).catch(() => {});
  console.log("Hello wait");
}

run();
