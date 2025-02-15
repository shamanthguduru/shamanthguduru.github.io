<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="social-links">
            <a href="mailto:shamanthguduru@gmail.com" target="_blank">✉️</a>
            <a href="https://www.linkedin.com/in/shamanth-guduru/" target="_blank">🔗</a>
            <a href="https://github.com/shamanthguduru" target="_blank">🐙</a>
        </div>
    </header>
    
    <div class="hero">
        <img src="Profilepic.jpg" alt="Profile Picture" class="profile-pic">
        <h1>Shamanth Guduru</h1>
        <h2>Software Engineer | Developer | Creator</h2>
    </div>
    
    <div class="container">
        <h3>Projects</h3>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
    </div>
    
    <div class="container certifications">
        <h3>Certifications</h3>
        <img src="cert1.jpg" alt="Certification 1">
        <img src="cert2.jpg" alt="Certification 2">
    </div>
    
    <button id="theme-toggle" class="theme-toggle">
        <div class="toggle-slider"></div>
    </button>
    
    <script>
        const toggleButton = document.getElementById('theme-toggle');
        document.body.classList.toggle('dark-mode', localStorage.getItem('dark-mode') === 'true');

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
        });
    </script>
</body>
</html>
