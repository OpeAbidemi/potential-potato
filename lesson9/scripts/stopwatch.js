const hoursEl = document.querySelector(".hours")
const minsEl = document.querySelector(".mins")
const secsEl = document.querySelector(".secs")
const tensEl = document.querySelector(".tens")

// Controls
const startEl = document.querySelector(".start")
const stopEl = document.querySelector(".stop")
const resetEl = document.querySelector(".reset")

let hours = 0;
let mins = 0;
let secs = 0;
let tens = 0;

let interval;

// Functions
function start() {
    clearInterval(interval)
    interval = setInterval(() => {
        tens++;
        if (tens > 99) {
            tens = 0
            secs++;
        }

        if (secs > 59) {
            secs = 0;
            mins++;
        }

        if (mins > 59) {
            mins = 0;
            hours++;
        }

        if(tens <= 9) {
            tensEl.innerHTML = `0${tens}`
        } else {
            tensEl.innerHTML = `${tens}`
        }

        if (secs <= 9) {
            secsEl.innerHTML = `0${secs}`
        } else {
            secsEl.innerHTML = `${secs}`
        }

        if (mins <= 9) {
            minsEl.innerHTML = `0${mins}`
        } else {
            minsEl.innerHTML = `${mins}`
        }

        if (hours <= 9) {
            hoursEl.innerHTML = `0${hours}`
        } else {
            hoursEl.innerHTML = `${hours}`
        }
        
    }, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    hours = 0;
    mins = 0;
    secs = 0;
    tens = 0;

    if(tens <= 9) {
        tensEl.innerHTML = `0${tens}`
    } else {
        tensEl.innerHTML = `${tens}`
    }

    if (secs <= 9) {
        secsEl.innerHTML = `0${secs}`
    } else {
        secsEl.innerHTML = `${secs}`
    }

    if (mins <= 9) {
        minsEl.innerHTML = `0${mins}`
    } else {
        minsEl.innerHTML = `${mins}`
    }

    if (hours <= 9) {
        hoursEl.innerHTML = `0${hours}`
    } else {
        hoursEl.innerHTML = `${hours}`
    }
}

startEl.addEventListener("click", start)
stopEl.addEventListener("click", stop);
resetEl.addEventListener("click", reset)