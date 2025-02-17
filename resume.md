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
            --dark-bg: #121212;
            --dark-text: #ffffff;
            --dark-collapsible: #333;
            --light-collapsible: #f0f0f0;
            --accent-color: #007bff;
        }

        body {
            background-color: var(--light-bg);
            color: var(--light-text);
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s;
        }

        .dark-mode {
            background-color: var(--dark-bg);
            color: var(--dark-text);
        }

        .resume-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }

        h1 {
            text-align: left;
            margin-left: 20px;
            font-size: 2rem;
        }

        .collapsible {
            background-color: var(--light-collapsible);
            color: var(--light-text);
            cursor: pointer;
            padding: 15px;
            width: 100%;
            text-align: left;
            border: none;
            outline: none;
            font-size: 1.2em;
            font-weight: bold;
            margin: 10px 0;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }

        .dark-mode .collapsible {
            background-color: var(--dark-collapsible);
            color: var(--dark-text);
        }

        .collapsible:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        .content {
            padding: 10px 15px;
            display: none;
            overflow: hidden;
            background-color: var(--light-bg);
            border-left: 3px solid var(--accent-color);
            margin-bottom: 10px;
            border-radius: 5px;
        }

        .dark-mode .content {
            background-color: var(--dark-bg);
            border-left: 3px solid #fff;
        }

        /* Toggle Switch Styles */
        .toggle-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
        }

        .toggle-checkbox {
            display: none;
        }

        .toggle-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 50px;
            height: 25px;
            background-color: #ccc;
            border-radius: 25px;
            position: relative;
            cursor: pointer;
            transition: background-color 0.3s;
            padding: 2px;
        }

        .toggle-label::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            top: 2.5px;
            left: 3px;
            transition: transform 0.3s;
        }

        .toggle-checkbox:checked + .toggle-label {
            background-color: var(--accent-color);
        }

        .toggle-checkbox:checked + .toggle-label::before {
            transform: translateX(25px);
        }
    </style>
</head>
<body>
    <div class="resume-container">
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
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let coll = document.querySelectorAll(".collapsible");
            coll.forEach(button => {
                button.addEventListener("click", function() {
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    content.style.display = content.style.display === "block" ? "none" : "block";
                });
            });

            const toggleSwitch = document.getElementById("theme-toggle");
            if (toggleSwitch) {
                toggleSwitch.addEventListener("change", function() {
                    document.body.classList.toggle("dark-mode", this.checked);
                    localStorage.setItem("theme", this.checked ? "dark" : "light");
                });
            }

            if (localStorage.getItem("theme") === "dark") {
                document.body.classList.add("dark-mode");
                document.getElementById("theme-toggle").checked = true;
            }
        });
    </script>
</body>
</html>
