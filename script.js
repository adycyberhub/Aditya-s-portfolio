const textElement = document.getElementById("typewriter");
const words = ["Programmer", "Cyber Expert", "Creator","Entrepreneur"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove a character
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster when deleting
    } else {
        // Add a character
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal typing speed
    }

    // If word is complete
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at the end of the word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to next word
        typeSpeed = 300;
    }

    setTimeout(type, typeSpeed);
}

// Start the animation
document.addEventListener("DOMContentLoaded", type);








