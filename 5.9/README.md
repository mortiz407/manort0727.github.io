# My Web Portfolio

**Author:** Manuel Ortiz  
**Date:** October 4, 2026  

---

## What is this?

This is a personal portfolio site built to show off some of my coding projects. It includes a few neat browser features like:
- Project cards created on the fly with JavaScript.
- Project info saved in the browser's `sessionStorage` using JSON.
- A dark mode toggle that remembers your preference even after refreshing (`localStorage`).
- A simple pop-up welcome box.
- A contact form that gives you a quick feedback message when sent.

---

## Tech Used

- **HTML5:** Basic page layout and sections.
- **CSS3:** Styling, layout spacing, tooltips, and dark mode colors.
- **JavaScript:** Handles button clicks, saves data to web storage, and builds the project cards.
- **Modernizr:** Included to make sure older browsers handle HTML5 elements fine.

---

## Dependencies

- `modernizr.custom.05819.js` (kept in the project folder)
- Internet connection (to grab placeholder images from `via.placeholder.com`)

---

## How to Run It

1. Drop the files into your local web server folder (for example, `D:\xampp\htdocs\Portfolio\`).
2. Make sure Apache is running in XAMPP.
3. Open your browser and go to:
   ```text
   http://localhost/Portfolio/index.html