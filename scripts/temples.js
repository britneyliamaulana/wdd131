
// getdates.js
// ✅ Display current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Display last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// ✅ Hamburger menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggleBtn.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});
