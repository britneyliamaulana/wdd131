


// Product Array
const products = [
    { id: 1, name: "Widget Pro" },
    { id: 2, name: "Widget Mini" },
    { id: 3, name: "Gadget Max" },
    { id: 4, name: "Gizmo Lite" }
];

// Populate product dropdown
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
// getdates.js

// ✅ Get the current year and display it in the footer span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Get the last modified date of the document
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

