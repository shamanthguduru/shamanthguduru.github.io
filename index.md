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

<style>
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }
  .slider:before {
    position: absolute;
    content: "\2600"; /* Sun symbol */
    font-size: 18px;
    text-align: center;
    line-height: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #111;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
    content: "\1F319"; /* Moon symbol */
  }
</style>

<footer>
  <div class="toggle-container">
    <label class="toggle-switch">
      <input type="checkbox" id="dark-mode-toggle" />
      <span class="slider"></span>
    </label>
  </div>
</footer>

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
