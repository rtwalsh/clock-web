/*
 *  Web-Based Digital and Analog Clock
 *
 *  Author: Robert Walsh
 *  Date:   September 22, 2024
 * 
 */

function initialize() {
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