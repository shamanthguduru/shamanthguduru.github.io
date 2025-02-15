<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
    <link rel="icon" href="{{ '/assets/images/favicon.ico' | relative_url }}">
    <style>
        :root {
            --light-bg: #ffffff;
            --light-text: #000000;
            --dark-bg: #222;
            --dark-text: #ffffff;
            --dark-collapsible: #444;
            --light-collapsible: #ddd;
        }

        body {
            background-color: var(--light-bg);
            color: var(--light-text);
        }

        .dark-mode {
            background-color: var(--dark-bg);
            color: var(--dark-text);
        }

        .collapsible {
            background-color: var(--light-collapsible);
            color: var(--light-text);
            cursor: pointer;
            padding: 10px;
            width: 100%;
            text-align: left;
            border: none;
            outline: none;
            font-size: 1.1em;
        }

        .dark-mode .collapsible {
            background-color: var(--dark-collapsible);
            color: var(--dark-text);
        }

        .content {
            padding: 0 15px;
            display: none;
            overflow: hidden;
            background-color: var(--light-bg);
        }

        .dark-mode .content {
            background-color: var(--dark-bg);
        }
    </style>
</head>
<body>
    <header>
        <div class="nav-container">
            <div class="nav-left">
                <a href="/">Shamanth Guduru</a>
            </div>
            <div class="social-links">
                <a href="mailto:shamanthguduru@gmail.com" target="_blank" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/shamanth-guduru/" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/shamanthguduru" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <div class="nav-links">
                    <a href="/certifications" title="Certifications">Certifications</a>
                    <a href="/projects" title="Projects">Projects</a>
                    <a href="/resume" title="Resume">Resume</a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <h1>My Resume</h1>
        
        <button class="collapsible">Education</button>
        <div class="content">
            <p>Details about Education...</p>
        </div>

        <button class="collapsible">Work Experience</button>
        <div class="content">
            <p>Details about Work Experience...</p>
        </div>

        <button class="collapsible">Skills</button>
        <div class="content">
            <p>Details about Skills...</p>
        </div>

        <button class="collapsible">Leadership Skills</button>
        <div class="content">
            <p>Details about Leadership Skills...</p>
        </div>
    </main>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let coll = document.querySelectorAll(".collapsible");
            coll.forEach(button => {
                button.addEventListener("click", function() {
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            });

            const toggleSwitch = document.getElementById("theme-toggle");
            toggleSwitch.addEventListener("change", function() {
                document.body.classList.toggle("dark-mode", this.checked);
            });
        });
    </script>

    <!-- Theme Toggle Switch -->
    <div class="toggle-container">
        <input type="checkbox" id="theme-toggle" class="toggle-checkbox">
        <label for="theme-toggle" class="toggle-label"></label>
    </div>

    <footer>
        <p>© 2025 Shamanth Guduru. All Rights Reserved.</p>
    </footer>
</body>
</html>
