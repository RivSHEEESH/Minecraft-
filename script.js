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

// A safety switch to stop double-clicking/spam errors
let isProcessing = false;

if (musicButton && musicElement) {
    musicButton.addEventListener('click', function() {
        // If the code is already working on a click, block any instant secondary clicks
        if (isProcessing) return; 
        isProcessing = true;

        if (musicElement.paused) {
            musicButton.textContent = "⏸ Pause Music";
            musicButton.style.backgroundColor = "#e74c3c";
            
            musicElement.play()
                .then(function() {
                    isProcessing = false; // Unlock only after it successfully plays
                })
                .catch(function(error) {
                    console.log("Playback error:", error);
                    isProcessing = false;
                });
        } else {
            musicElement.pause();
            musicButton.textContent = "🎵 Play Music";
            musicButton.style.backgroundColor = "#4a4a4a";
            isProcessing = false; // Unlock instantly on pause
        }
    });
}
