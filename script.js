/*
 *  Web-Based Digital and Analog Clock
 *
 *  Author: Robert Walsh
 *  Date:   September 22, 2024
 * 
 */

function initialize() {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (document.getElementById("12_hour").checked) {
        hours = hours % 12; // % is the symbol for the modulo operator
        if (hours === 0) {
            hours = 12;
        }

        document.getElementById("hours").textContent = hours;
    } else {
        document.getElementById("hours").textContent = formatTimeComponent(hours);
    }

    document.getElementById("minutes").textContent = formatTimeComponent(minutes);
    document.getElementById("seconds").textContent = formatTimeComponent(seconds);
}

function formatTimeComponent(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

function select12or24hours(event) {
    if (event.currentTarget.checked) {
        console.log("The " + event.currentTarget.value + " format has been selected.");
    }
    updateTime();
}
