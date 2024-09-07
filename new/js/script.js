// JavaScript to remove .html extension from URLs
if (window.location.pathname.endsWith(".html")) {
    window.history.replaceState(null, "", window.location.pathname.replace(".html", "/"));
}

document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "I am Reetendra, a dedicated Material Science Researcher with over 7 years of experience in advancing the field. With more than 4 years focused on the growth of thin films and nanomaterials, my work spans 2D materials and oxide materials, aiming for breakthroughs in clean energy production and sensing applications. I am passionate about bridging the gap between lab research and industry applications, driving innovations that can be readily adopted. ",
        "Recently, my curiosity has expanded to quantum materials, exploring their potential for neuromorphic device applications.",
        "My journey has been profoundly shaped by the invaluable guidance of my mentors and seniors, who have inspired me to persevere through every challenge.",
        "Beyond my academic pursuits, I am actively enhancing my expertise in data analytics and data science to further contribute to interdisciplinary advancements."
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function typeWriterEffect() {
        if (currentTextIndex < texts.length) {
            const currentText = texts[currentTextIndex];
            const typingTextElement = document.getElementById("typing-text");

            if (currentCharIndex === 0) {
                // Start a new line aligned to the left
                const newLine = document.createElement("div");
                newLine.classList.add("typing-line");
                newLine.style.textAlign = "left"; // Ensure alignment is left
                typingTextElement.appendChild(newLine);
            }

            const partialText = currentText.slice(0, currentCharIndex + 1);
            typingTextElement.lastChild.innerHTML = partialText;

            currentCharIndex++;

            if (currentCharIndex < currentText.length) {
                // Continue typing the current line
                setTimeout(typeWriterEffect, 5); // Set typing speed
            } else {
                // Finished typing the current line, move to next line after a short pause
                currentTextIndex++;
                currentCharIndex = 0;
                setTimeout(typeWriterEffect, 10); // Pause before typing the next line
            }
        }
    }

    typeWriterEffect();
});
