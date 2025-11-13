// getdates.js

// ✅ Get the current year and display it in the footer span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Get the last modified date of the document
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

