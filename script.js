// Array of survival tips for the interactive feature
const survivalTips = [
    "⛏️ Pro Tip: Never dig straight down! You might fall straight into a pool of burning lava.",
    "🐑 Pro Tip: Find three sheep early on to harvest wool for a bed. Sleeping resets your spawn point and skips the dangerous night.",
    "🪵 Pro Tip: Charcoal can be made by burning wood logs with wood planks in a furnace. Perfect if you can't find coal right away!",
    "🧟 Pro Tip: Keep your hunger bar full! If it drops below 3 bars, your health will stop naturally regenerating.",
    "👁️ Pro Tip: Do not look directly into the eyes of an Enderman unless you are fully equipped and ready for a tough fight!"
];

// Target the HTML elements using their IDs
const tipButton = document.getElementById('tip-btn');
const tipDisplay = document.getElementById('tip-display');

// Function to pull and display a random tip
function generateRandomTip() {
    // Generate a random index based on the length of our array
    const randomIndex = Math.floor(Math.random() * survivalTips.length);
    
    // Change the text content dynamically on the page
    tipDisplay.textContent = survivalTips[randomIndex];
}

// Add an event listener to run the function when the button is clicked
if (tipButton) {
    tipButton.addEventListener('click', generateRandomTip);
}

// ==========================================
// BACKGROUND MUSIC AUDIO SYSTEM
// ==========================================

// Grab our audio and button elements from the HTML DOM
const musicElement = document.getElementById('bg-music');
const musicButton = document.getElementById('music-btn');

// Listen for a click on the music button
if (musicButton && musicElement) {
    musicButton.addEventListener('click', function() {
        // Check if the music is ACTUALLY actively playing or not
        if (musicElement.paused || musicElement.currentTime === 0) {
            
            // 1. Force visual state
            musicButton.textContent = "⏸ Pause Music";
            musicButton.style.backgroundColor = "#e74c3c"; 
            
            // 2. Play safely and ignore fast-click abort interruptions
            const playPromise = musicElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(function(error) {
                    console.log("Play-load catch tracking: ", error);
                });
            }
        } else {
            // 3. Pause the track cleanly
            musicElement.pause();
            musicButton.textContent = "🎵 Play Music";
            musicButton.style.backgroundColor = "#4a4a4a"; 
        }
    });
}
