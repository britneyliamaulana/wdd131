
// getdates.js
// t0 Display current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

//  Display last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


// Wind Chill calculation (metric units °C & km/h)
function calculateWindChill(temp, windSpeed) {
    return Math.round(
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}

// Static weather values
const temp = 5;       // °C
const windSpeed = 20; // km/h

// Check conditions
let windChill = 'N/A';
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed) + '°C';
}

// Display values
document.getElementById('temp').textContent = temp + '°C';
document.getElementById('wind').textContent = windSpeed + ' km/h';
document.getElementById('windChill').textContent = windChill;
