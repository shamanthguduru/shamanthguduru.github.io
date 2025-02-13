<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shamanth Guduru's Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Shamanth Guduru's Portfolio</h1>
    </header>
    
    <main>
        <section>
            <h2>Welcome to My Portfolio 👋</h2>
            <p>I’m <strong>Shamanth Guduru</strong>, an aspiring <strong>Data Analyst</strong> with a passion for <strong>Healthcare Analytics</strong>.</p>
            <ul>
                <li>📊 <strong>Data Visualization</strong> (Tableau, Power BI)</li>
                <li>🐍 <strong>Python & SQL</strong> for Data Analytics</li>
                <li>🔍 <strong>Machine Learning & Predictive Modeling</strong></li>
                <li>⚕️ <strong>Healthcare Data Insights</strong></li>
            </ul>
        </section>
        
        <section>
            <h2>🔥 Projects</h2>
            <h3>📈 Project 1 – <a href="#">View Project</a></h3>
            <p>Short description of your project.</p>
            <h3>📊 Project 2 – <a href="#">View Project</a></h3>
            <p>Short description of your project.</p>
        </section>
        
        <section>
            <h2>📜 Certifications</h2>
            <ul>
                <li>🔹 <strong>Google Data Analytics Certificate</strong></li>
                <li>🔹 <strong>SQL for Data Science – Coursera</strong></li>
                <li>🔹 <a href="certifications.md">More Certifications</a></li>
            </ul>
        </section>
    </main>
    
    <footer>
        <h2>📩 Contact</h2>
        <p>📧 <strong>Email:</strong> <a href="mailto:shamanthguduru@gmail.com">shamanthguduru@gmail.com</a></p>
        <p>🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shamanth-guduru/"><img src="assets/images/linkedin.png" alt="LinkedIn"></a></p>
        
        <div class="toggle-container">
            <label class="toggle-switch">
                <input type="checkbox" id="dark-mode-toggle" />
                <span class="slider"></span>
            </label>
        </div>
    </footer>
    
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const toggleSwitch = document.querySelector("#dark-mode-toggle");
            const currentTheme = localStorage.getItem("theme");
            if (currentTheme) {
                document.documentElement.setAttribute("data-theme", currentTheme);
                if (currentTheme === "dark") {
                    toggleSwitch.checked = true;
                }
            }
            toggleSwitch.addEventListener("change", function () {
                if (this.checked) {
                    document.documentElement.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark");
                } else {
                    document.documentElement.setAttribute("data-theme", "light");
                    localStorage.setItem("theme", "light");
                }
            });
        });
    </script>
</body>
</html>
 
