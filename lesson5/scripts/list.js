const countries = ["Nigeria", "Ghana", "Togo", "Yemen", "Qatar", "USA", "Sweden", "Finland", "Iceland", "Norway", "Argentina", "Brazil"];

const list = document.querySelector(".list");

for (const country of countries) {
    const item = document.createElement("div");

    item.classList.add("list-item");

    item.innerHTML = country;

    list.appendChild(item);
}