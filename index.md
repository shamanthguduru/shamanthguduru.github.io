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
        <div class="profile-container">
            <img src="Profilepic.jpg" alt="Profile Picture" class="profile-pic">
            <h1>Shamanth Guduru's Portfolio</h1>
        </div>
        <button id="theme-toggle">Toggle Dark Mode</button>
    </header>
    
    <main>
        <section>
            <h2>Welcome to My Portfolio 👋</h2>
            <p>I'm <strong>Shamanth Guduru</strong>, an aspiring <strong>Data Analyst</strong> passionate about <strong>Healthcare Analytics</strong>.</p>
        </section>
    </main>
    
    <script>
        const toggleButton = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.body.classList.add(currentTheme);
        
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    </script>
</body>
</html>
