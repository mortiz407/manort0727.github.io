/*
Author: Manuel Ortiz
Date: 09/20/2026
Purpose: Portfolio scripts and dynamic DOM manipulation
*/

// 1. Welcome Prompt
var userName = prompt("Please enter your name:");

if (userName !== null && userName !== "") {
    document.getElementById("welcomeHeading").innerHTML = "Welcome, " + userName + "! - To Manuel Ortiz Portfolio";
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
    univDiv.style.display = "block";
    personalDiv.style.display = "block";
} else {
    univDiv.style.display = "none";
    personalDiv.style.display = "block";
}

// 4. Dark Mode Toggle Switch
var darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

// Requirement 1: Dynamically Add a New Section or Message Using JavaScript
// Creates a banner notification that appears at the top of the body after 1 second
setTimeout(function () {
    var notificationBanner = document.createElement("div");
    notificationBanner.id = "topBanner";
    notificationBanner.textContent = "Welcome to my portfolio! Feel free to check out my recent projects below.";

    // Style the notification dynamically
    notificationBanner.style.backgroundColor = "#e1f5fe";
    notificationBanner.style.color = "#01579b";
    notificationBanner.style.padding = "10px";
    notificationBanner.style.marginBottom = "15px";
    notificationBanner.style.border = "1px solid #81d4fa";
    notificationBanner.style.borderRadius = "4px";
    notificationBanner.style.textAlign = "center";
    notificationBanner.style.fontWeight = "bold";

    // Insert banner at the top of the body
    document.body.insertBefore(notificationBanner, document.body.firstChild);
}, 1000);

// Requirement 2: Reference and Modify Existing Elements with Selectors
// Element 1: Select using document.querySelector() and change style/content
var aboutHeading = document.querySelector("#about h2");
if (aboutHeading) {
    aboutHeading.textContent = "About Me & Background";
    aboutHeading.style.color = "#0056b3";
}

// Element 2: Select using document.getElementById() and adjust styling
var aboutSection = document.getElementById("about");
if (aboutSection) {
    aboutSection.style.borderLeft = "4px solid #0056b3";
    aboutSection.style.paddingLeft = "12px";
}

// Requirement 3: Add a Timed Confirmation for Form Submissions
var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    // 1. Prevent default page refresh
    event.preventDefault();

    var submitBtn = document.getElementById("submit");
    var fieldset = contactForm.querySelector("fieldset");

    // Remove any prior status message if the user submits again
    var existingStatus = document.getElementById("formStatus");
    if (existingStatus) {
        existingStatus.remove();
    }

    // 2. Create and display dynamic loading message
    var statusMsg = document.createElement("p");
    statusMsg.id = "formStatus";
    statusMsg.textContent = "⏳ Sending message, please wait...";
    statusMsg.style.fontStyle = "italic";
    statusMsg.style.color = "#555555";
    fieldset.appendChild(statusMsg);

    // Disable submit button while sending
    submitBtn.disabled = true;

    // 3 & 4. Use setTimeout to wait 2.5 seconds, then show confirmation
    setTimeout(function () {
        var enteredName = document.getElementById("senderName").value.trim();
        var displayName = enteredName !== "" ? enteredName : "Visitor";

        statusMsg.textContent = "Message sent successfully! Thank you, " + displayName + ".";
        statusMsg.style.fontStyle = "normal";
        statusMsg.style.color = "#2e7d32";
        statusMsg.style.fontWeight = "bold";

        // Reset form inputs and re-enable button
        contactForm.reset();
        submitBtn.disabled = false;
    }, 2500);
});