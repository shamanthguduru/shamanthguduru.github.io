
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shamanth Guduru | Data Analyst</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <script src="https://unpkg.com/feather-icons"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans transition-colors duration-300">
  <header class="flex justify-between items-center p-6 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50">
    <h1 class="text-2xl font-bold">Shamanth Guduru</h1>
    <nav class="space-x-4 flex items-center">
      <a href="#about" class="hover:text-blue-500">About</a>
      <a href="#projects" class="hover:text-blue-500">Projects</a>
      <a href="#certifications" class="hover:text-blue-500">Certifications</a>
      <a href="#contact" class="hover:text-blue-500">Contact</a>
      <button id="theme-toggle" class="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">🌙</button>
    </nav>
  </header>

  <section class="flex flex-col items-center justify-center text-center p-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h2 class="text-4xl font-bold mb-4">Hi, I'm Shamanth 👋</h2>
    <p class="text-lg mb-6 max-w-xl">A passionate Data Analyst who loves transforming data into actionable insights and building visual stories.</p>
    <a href="#projects" class="bg-white text-blue-600 px-6 py-3 rounded-full shadow hover:scale-105 transition-transform">See My Work</a>
    <div class="mt-8">
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
    </div>
  </section>

  <section id="about" class="p-12 bg-white dark:bg-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold mb-4">About Me</h3>
    <p class="max-w-3xl leading-relaxed">I'm a Master's student in Business Analytics with hands-on experience in SQL, Python, Tableau, and data visualization tools. I’m deeply passionate about leveraging data for problem-solving and making data-driven decisions.</p>
  </section>

  <section id="projects" class="p-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
    <h3 class="text-3xl font-semibold mb-8 text-center">Projects</h3>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
        <h4 class="text-xl font-bold mb-2">Airbnb Price Prediction</h4>
        <p class="mb-4">A machine learning model predicting Airbnb rental prices based on various features, utilizing Python, Pandas, and Scikit-learn.</p>
        <a href="https://github.com/yourusername/airbnb-price-prediction" target="_blank" class="text-blue-500">View Project →</a>
      </div>
      <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
        <h4 class="text-xl font-bold mb-2">Car Sales Dashboard</h4>
        <p class="mb-4">An interactive Tableau dashboard analyzing car sales trends across different segments in India.</p>
        <a href="https://github.com/yourusername/car-sales-dashboard" target="_blank" class="text-blue-500">View Dashboard →</a>
      </div>
    </div>
  </section>

  <section id="certifications" class="p-12 bg-white dark:bg-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold mb-6 text-center">Certifications</h3>
    <ul class="space-y-4">
      <li class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <span>Google Data Analytics Certificate</span>
        <a href="https://www.coursera.org/account/accomplishments/certificate/yourcertificateid" target="_blank" class="text-blue-500">View →</a>
      </li>
      <li class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <span>Tableau Desktop Specialist</span>
        <a href="#" target="_blank" class="text-blue-500">View →</a>
      </li>
    </ul>
  </section>

  <section id="contact" class="p-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-center">
    <h3 class="text-3xl font-semibold mb-4">Let's Connect</h3>
    <p class="mb-4">Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
    <div class="flex justify-center space-x-6 mb-6">
      <a href="https://www.linkedin.com/in/shamanth-guduru/" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600">
        <i data-feather="linkedin" class="w-6 h-6"></i>
      </a>
      <a href="https://github.com/shamanthguduru" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600">
        <i data-feather="github" class="w-6 h-6"></i>
      </a>
      <a href="mailto:shamanthguduru@gmail.com" class="text-gray-700 dark:text-gray-300 hover:text-blue-600">
        <i data-feather="mail" class="w-6 h-6"></i>
      </a>
    </div>
    <a href="mailto:shamanthguduru@gmail.com" class="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600">Email Me</a>
  </section>

  <footer class="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 text-center text-sm">
    © 2025 Shamanth Guduru. All Rights Reserved.
  </footer>

  <script>
    feather.replace();
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  </script>
</body>
</html>
