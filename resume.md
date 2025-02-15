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
            --light-bg: #f5faff;
            --light-text: #000000;
            --dark-bg: #181818;
            --dark-text: #ffffff;
            --dark-collapsible: #333;
            --light-collapsible: #e0e8f0;
            --primary-blue: #0056b3;
            --border-radius: 8px;
        }

        body {
            background-color: var(--light-bg);
            color: var(--light-text);
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        .dark-mode {
            background-color: var(--dark-bg);
            color: var(--dark-text);
        }

        h1 {
            text-align: left;
            margin-left: 10%;
            font-size: 2em;
            font-weight: bold;
        }

        .collapsible {
            background-color: var(--light-collapsible);
            color: var(--primary-blue);
            cursor: pointer;
            padding: 12px;
            width: 80%;
            text-align: left;
            border: none;
            outline: none;
            font-size: 1.2em;
            border-radius: var(--border-radius);
            margin: 10px auto;
            display: block;
            transition: background-color 0.3s ease;
        }

        .collapsible:hover {
            background-color: #cfe2f3;
        }

        .dark-mode .collapsible {
            background-color: var(--dark-collapsible);
            color: var(--dark-text);
        }

        .content {
            padding: 15px;
            display: none;
            overflow: hidden;
            background-color: var(--light-bg);
            width: 80%;
            margin: 0 auto;
            border-left: 4px solid var(--primary-blue);
        }

        .dark-mode .content {
            background-color: var(--dark-bg);
            border-left: 4px solid #bbb;
        }

        .toggle-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
        }
    </style>
</head>
<body>
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
</body>
</html>
