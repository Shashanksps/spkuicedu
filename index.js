
alert("Hello!!!......I am Shashank.\n Welcome to my portfolio Page!!!!")
// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});




const text = "I'm Shashank";
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
