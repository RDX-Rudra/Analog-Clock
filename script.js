const numberHours = document.querySelector('.number_hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElements = [];
const barElements = [];

for (let i = 1; i <= 60; i++) {
    barElements.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElements.join(""));

const handsHours = document.querySelector('.hand.hours');
const handsMinutes = document.querySelector('.hand.minutes');
const handsSeconds = document.querySelector('.hand.seconds');

let currentHours, currentMinutes, currentSeconds; // Declaring outside the function

function getCurrentTime() {
    let date = new Date();
    currentHours = date.getHours(); // Update the global variables
    currentMinutes = date.getMinutes();
    currentSeconds = date.getSeconds();

    handsHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`; // Adjusting the style directly
    handsMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handsSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000);
