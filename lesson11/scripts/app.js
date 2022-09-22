// fetch API

const usersLists = document.querySelector(".users");

fetch("https://jsonplaceholder.typicode.com/users").then(async (res) => {
  const data = await res.json();

  document.querySelector(".loading").style.display = "none";

  for (let user of data) {
    const userEl = document.createElement("div");
    userEl.classList.add("user");

    userEl.innerHTML = `
        <h3 class="name">${user.name}</h3>
        <p class="username">${user.username}</p>
        <p class="email">${user.email}</p>
        <p class="phone">${user.phone}</p>
        <p class="street">${user.address.street}</p>
        <p class="company">${user.company.name}</p>
        <p class="website">${user.website}</p>
      `;

    usersLists.appendChild(userEl);
  }
});

// const dummyPost = {
//   userId: 2,
//   title: "Hello fetch",
//   body: "This is my first post",
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(dummyPost),
// }).then(async (res) => {
//   console.log(await res.text());
// });
