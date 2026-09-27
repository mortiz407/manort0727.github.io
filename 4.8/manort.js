/*
Author: Manuel Ortiz
Date: 09/27/2026
Purpose: Portfolio scripts, welcome modal dismissal, and persistent dark mode
*/

// 1. Modal Dismissal Handling (Replaces prompt)
var welcomeModal = document.getElementById("welcomeModal");
var closeModalBtn = document.getElementById("closeModalBtn");

if (closeModalBtn && welcomeModal) {
    closeModalBtn.addEventListener("click", function () {
        welcomeModal.style.display = "none";
    });
}

// 2. Persist Dark Mode Preference via localStorage
var darkModeToggle = document.getElementById("darkModeToggle");

// Check stored setting on page load
var savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
        darkModeToggle.checked = true;
    }
}

// Store preference whenever the user toggles
if (darkModeToggle) {
    darkModeToggle.addEventListener("change", function () {
        var isDark = darkModeToggle.checked;
        document.body.classList.toggle("dark-mode", isDark);

        if (isDark) {
            localStorage.setItem("portfolio_theme", "dark");
        } else {
            localStorage.setItem("portfolio_theme", "light");
        }
    });
}

// 3. Loop to Display Skills in the About Section
var skills = ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"];
var skillsListElement = document.getElementById("skillsList");

if (skillsListElement) {
    skills.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsListElement.appendChild(listItem);
    });
}

// 4. Conditional Statement (if...else) for Featured Content
var projectEntries = document.querySelectorAll("#projects .project-entry");
var projectCount = projectEntries.length;

var univDiv = document.getElementById("universityResources");
var personalDiv = document.getElementById("personalProjects");

if (univDiv && personalDiv) {
    if (projectCount < 3) {
        univDiv.style.display = "block";
        personalDiv.style.display = "block";
    } else {
        univDiv.style.display = "none";
        personalDiv.style.display = "block";
    }
}

// 5. Dynamic Notification Banner
setTimeout(function () {
    var notificationBanner = document.createElement("div");
    notificationBanner.id = "topBanner";
    notificationBanner.textContent = "Welcome to my portfolio! Feel free to check out my recent projects below.";

    notificationBanner.style.backgroundColor = "#e1f5fe";
    notificationBanner.style.color = "#01579b";
    notificationBanner.style.padding = "10px";
    notificationBanner.style.marginBottom = "15px";
    notificationBanner.style.border = "1px solid #81d4fa";
    notificationBanner.style.borderRadius = "4px";
    notificationBanner.style.textAlign = "center";
    notificationBanner.style.fontWeight = "bold";

    document.body.insertBefore(notificationBanner, document.body.firstChild);
}, 1000);

// 6. Reference and Modify Existing Elements with Selectors
var aboutHeading = document.querySelector("#about h2");
if (aboutHeading) {
    aboutHeading.textContent = "About Me & Background";
    aboutHeading.style.color = "#0056b3";
}

var aboutSection = document.getElementById("about");
if (aboutSection) {
    aboutSection.style.borderLeft = "4px solid #0056b3";
    aboutSection.style.paddingLeft = "12px";
}

// 7. Form Submission Handling with Timed Confirmation
var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var submitBtn = document.getElementById("submit");
        var fieldset = contactForm.querySelector("fieldset");

        var existingStatus = document.getElementById("formStatus");
        if (existingStatus) {
            existingStatus.remove();
        }

        var statusMsg = document.createElement("p");
        statusMsg.id = "formStatus";
        statusMsg.textContent = "Sending message, please wait...";
        statusMsg.style.fontStyle = "italic";
        statusMsg.style.color = "#555555";
        fieldset.appendChild(statusMsg);

        submitBtn.disabled = true;

        setTimeout(function () {
            var enteredName = document.getElementById("senderName").value.trim();
            var displayName = enteredName !== "" ? enteredName : "Visitor";

            statusMsg.textContent = "Message sent successfully! Thank you, " + displayName + ".";
            statusMsg.style.fontStyle = "normal";
            statusMsg.style.color = "#2e7d32";
            statusMsg.style.fontWeight = "bold";

            contactForm.reset();
            submitBtn.disabled = false;
        }, 2500);
    });
}