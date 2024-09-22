/*
 *  Web-Based Digital and Analog Clock
 *
 *  Author: Robert Walsh
 *  Date:   September 22, 2024
 * 
 */

function initialize() {
    let now = new Date();
    document.getElementById("hours").textContent = now.getHours();
    document.getElementById("minutes").textContent = now.getMinutes();
    document.getElementById("seconds").textContent = now.getSeconds();
}