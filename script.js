<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Ultimate Beginner's Guide to Minecraft</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="header-container">
            <h1>Minecraft Survival Guide</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#basics">The Basics</a>
                <a href="#interactive">Interactive Checklist</a>
            </nav>
        </div>
    </header>

    <main>
        <section id="about" class="intro-section">
            <h2>Welcome, Adventurer!</h2>
            <p>Minecraft is a game of infinite possibilities where you can build, explore, and survive. This guide is specifically designed to help you make it through your very first night without getting blown up by a Creeper!</p>
            <img src="images/minecraft_world.jpg" alt="Beautiful landscape of a green Minecraft world with mountains and trees" class="hero-image">
        </section>

        <section id="basics">
            <h2>Your First Day Checklist</h2>
            <div class="card-container">
                <div class="card">
                    <h3>1. Punch Trees</h3>
                    <p>Collect raw wood logs immediately. Wood is the foundation of almost everything you will craft in the game.</p>
                </div>
                <div class="card">
                    <h3>2. Craft a Bench</h3>
                    <p>Turn those logs into planks and build a Crafting Table. This unlocks the standard 3x3 crafting grid.</p>
                </div>
                <div class="card">
                    <h3>3. Build a Shelter</h3>
                    <p>Dig into a dirt hill or build a quick cobblestone box before the sun sets. Monsters spawn in the pitch black!</p>
                </div>
            </div>
        </section>

        <section id="interactive" class="interactive-section">
            <h2>Interactive Survival Toolkit</h2>
            <p>Ready to start? Click the button below to randomly generate a crucial tip for your current survival scenario!</p>
            
            <div class="generator-box">
                <p id="tip-display">Click the button below to get your first survival hint...</p>
                <button id="tip-btn">Generate Survival Tip</button>
            </div>
            
            <p class="community-link">Need more help? Check out the official <a href="https://www.minecraft.net" target="_blank">Minecraft Website</a>.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Crafted by a FEPS Web Developer. Built with HTML, CSS, and JavaScript.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
