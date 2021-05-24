const newYearDate = new Date("1 Jan 2022");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const calcDate = () => {

    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    printNumbers(seconds, minutes, hours, days);
};

const formatNumbers = (number) => {
    return (number > 9 ? number : `0${number}`);
}

const printNumbers = (s, m, h, d) => {

    secondsElement.innerText = formatNumbers(s);
    minutesElement.innerText = formatNumbers(m);
    hoursElement.innerText = formatNumbers(h);
    daysElement.innerText = d;
};

window.onload = function() {

    // Starting the method
    calcDate;

    // Setting the interval to 1s...
    setInterval(calcDate, 1000);
}

