body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    color: white;
    padding: 15px 30px;
}

header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    left: -20px; /* Moves title slightly to the left */
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.nav-toggle div {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 30px;
        background-color: #2c3e50;
        width: 150px;
        padding: 10px;
        border-radius: 5px;
    }
    nav ul.show {
        display: flex;
    }
}
