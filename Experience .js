const text = "Professional Experience";
const typingElement = document.getElementById('dynamic-text');
let i = 0;
let fullText = '';

function typeText() {
    if (i < text.length) {
        fullText += text.charAt(i);
        typingElement.innerHTML = fullText;
        i++;
        setTimeout(typeText, 300); // Adjust the typing speed here
    } else {
        // Reset the index and the full text
        i = 0;
        fullText = '';
        setTimeout(typeText, 500); // Delay before starting to retype
    }
}

typeText(); // Start the typing effect
