/*
Author: Manuel Ortiz
Date: September 6, 2026
Purpose: Dynamic welcome prompt and form submission handling
*/

// Prompt user for their name and store in variable
var userName = prompt("Please enter your name:");

// Dynamically update the header message at the top of the page
if (userName !== null && userName !== "") {
    document.getElementById("welcomeHeading").innerHTML = "Welcome, " + userName + "! -To Manuel Ortiz Portfolio";
}

// Event listener for the submit button
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    alert("Thank you, " + (userName ? userName : "Visitor") + "! Your message has been sent.");
}, false);