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
    document.getElementById("hours").textContent = formatTimeComponent(now.getHours());
    document.getElementById("minutes").textContent = formatTimeComponent(now.getMinutes());
    document.getElementById("seconds").textContent = formatTimeComponent(now.getSeconds());
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