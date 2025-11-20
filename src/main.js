import "./styles/style.css";
import { createClockCard } from "./scripts/clockcard.js";

const clocks = [
    { label: "Jakarta", tz: "Asia/Jakarta" },
    { label: "Tokyo", tz: "Asia/Tokyo" },
    { label: "New York", tz: "America/New_York" },
];

const container = document.getElementById("clock-container");
clocks.forEach(c => container.appendChild(createClockCard(c.label, c.tz)));

// DARK MODE
const toggle = document.getElementById("toggle-dark");
const darkIcon = document.getElementById("dark-icon");

function setDarkTheme(isDark) {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";

    // UBAH ICON — INI BARU YANG BENAR
    darkIcon.classList.remove("ri-moon-line", "ri-sun-line");

    if (isDark) {
        darkIcon.classList.add("ri-sun-line");
    } else {
        darkIcon.classList.add("ri-moon-line");
    }
}

// Run ketika halaman pertama load:
setDarkTheme(localStorage.theme === "dark");

// Klik toggle
toggle.addEventListener("click", () => {
    const isDark = !(localStorage.theme === "dark");
    setDarkTheme(isDark);
});
