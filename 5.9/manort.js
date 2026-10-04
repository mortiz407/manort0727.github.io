/*
Author: Manuel Ortiz
Date: 10/04/2026
Purpose: Handles user clicks, saves theme choice, and dynamically creates project cards from sessionStorage.
*/
"use strict";

// Close the welcome pop-up when clicking Close
var welcomeModal = document.getElementById("welcomeModal");
var closeModalBtn = document.getElementById("closeModalBtn");

if (closeModalBtn && welcomeModal) {
    closeModalBtn.addEventListener("click", function () {
        welcomeModal.style.display = "none";
    });
}

// Remember dark mode setting using localStorage
var darkModeToggle = document.getElementById("darkModeToggle");
var savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
        darkModeToggle.checked = true;
    }
}

// Switch between dark and light mode when the checkbox is clicked
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

// Add the list of skills to the About section
var skills = ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"];
var skillsListElement = document.getElementById("skillsList");

if (skillsListElement) {
    skills.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsListElement.appendChild(listItem);
    });
}

// Default project data stored as regular JavaScript objects
var defaultProjects = [
    {
        title: "Lemonade App",
        summary: "Interactive craft beverage recipe formulation and inventory ordering system.",
        image: "https://via.placeholder.com/200x120?text=Lemonade+App",
        repoUrl: "https://github.com/mortiz407/lemonade_app"
    },
    {
        title: "SDC310 Final Project",
        summary: "Database-driven web application with CRUD operations and user authentication.",
        image: "https://via.placeholder.com/200x120?text=SDC310+Final",
        repoUrl: "https://github.com/mortiz407/sdc310_final"
    },
    {
        title: "SDC230L Project",
        summary: "Structured programming coursework covering object-oriented architecture and algorithms.",
        image: "https://via.placeholder.com/200x120?text=SDC230L+Project",
        repoUrl: "https://github.com/mortiz407/sdc230L_project"
    }
];

// Check if we already saved projects in sessionStorage.
// If not, turn the array into a JSON string and save it.
// If yes, parse the JSON string back into real objects.
var storedProjectsData = sessionStorage.getItem("portfolio_projects");
var activeProjects = [];

if (!storedProjectsData) {
    sessionStorage.setItem("portfolio_projects", JSON.stringify(defaultProjects));
    activeProjects = defaultProjects;
} else {
    activeProjects = JSON.parse(storedProjectsData);
}

// Loop through the projects array and build HTML cards on the page
var projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
    activeProjects.forEach(function (project) {
        // Main project box
        var card = document.createElement("div");
        card.className = "project-entry";

        // Title
        var heading = document.createElement("h3");
        heading.textContent = project.title;

        // Image linked to repo
        var link = document.createElement("a");
        link.href = project.repoUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        var img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        link.appendChild(img);

        // Quick description
        var desc = document.createElement("p");
        desc.textContent = project.summary;

        // Put everything together inside the card
        card.appendChild(heading);
        card.appendChild(link);
        card.appendChild(desc);

        // Drop the card into the page
        projectsContainer.appendChild(card);
    });
}

// Show or hide extra boxes depending on how many projects we have
var univDiv = document.getElementById("universityResources");
var personalDiv = document.getElementById("personalProjects");

if (univDiv && personalDiv) {
    if (activeProjects.length < 3) {
        univDiv.style.display = "block";
        personalDiv.style.display = "block";
    } else {
        univDiv.style.display = "none";
        personalDiv.style.display = "block";
    }
}

// Show a friendly banner at the top after a 1-second delay
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

// Style adjustments for the About section heading
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

// Fake form submission with a brief delay and success message
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