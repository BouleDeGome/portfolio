document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('typing-title');
    const subtitleElement = document.getElementById('typing-subtitle');

    const titleText = "LELIEVRE Milan - Portfolio";
    const subtitleText = "Technicien informatique - Solutions d'Infrastructure, Systèmes et Réseaux";

    // Typing speed (ms per char)
    const typeSpeed = 50;
    const startDelay = 500;

    function typeWriter(text, element, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, typeSpeed);
            } else if (callback) {
                setTimeout(callback, 500);
            }
        }
        type();
    }

    // Start typing after initial delay
    setTimeout(() => {
        typeWriter(titleText, titleElement, () => {
            typeWriter(subtitleText, subtitleElement);
        });
    }, startDelay);
});
