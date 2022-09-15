// Events

const btn = document.getElementById("btn")

function clickMe() {
    console.log("Hello World");
}

btn.addEventListener("click", clickMe)

window.addEventListener("resize", () => {
    console.log("resized");
})

const nameInput = document.getElementById("name")

nameInput.addEventListener("input", (e) => {
    // console.log();
    document.getElementById("value").innerHTML = e.target.value
})