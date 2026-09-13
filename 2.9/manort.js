/*
Author: Manuel Ortiz
Date: 09/13/2026
Purpose:dark mode
*/

// 1. Welcome Prompt
var userName = prompt("Please enter your name:");

if (userName !== null && userName !== "") {
    document.getElementById("welcomeHeading").innerHTML = "Welcome, " + userName + "! -To Manuel Ortiz Portfolio";
}

// 2. Loop to Display Skills in the About Section
var skills = ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"];
var skillsListElement = document.getElementById("skillsList");

skills.forEach(function (skill) {
    var listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsListElement.appendChild(listItem);
});

// 3. Conditional Statement (if...else) for Featured Content
var projectEntries = document.querySelectorAll("#projects .project-entry");
var projectCount = projectEntries.length;

var univDiv = document.getElementById("universityResources");
var personalDiv = document.getElementById("personalProjects");

if (projectCount < 3) {
    // Show both divs
    univDiv.style.display = "block";
    personalDiv.style.display = "block";
} else {
    // Show personal projects, hide university resources
    univDiv.style.display = "none";
    personalDiv.style.display = "block";
}

// 4. Dark Mode Toggle Switch
var darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

// 5. Contact Form Submit Interactivity
var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh

    var enteredName = document.getElementById("senderName").value.trim();
    var displayName = enteredName !== "" ? enteredName : "Visitor";

    alert("Thank you, " + displayName + ", your message has been sent!");
});