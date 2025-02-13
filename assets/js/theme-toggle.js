document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check user's preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "🌞"; // Sun for light mode
    } else {
        themeIcon.textContent = "🌙"; // Moon for dark mode
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.textContent = "🌞";
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.textContent = "🌙";
        }
    });
});
