document.addEventListener('DOMContentLoaded', () => {
    // Check if device supports hover (desktop)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        // Create cursor elements
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        const cursorOutline = document.createElement('div');
        cursorOutline.className = 'cursor-outline';

        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        // Track mouse movement
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            // Using requestAnimationFrame for smoother following could be an option, 
            // but for now simple update relies on CSS transition.
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Hover effect for links and buttons using Event Delegation
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .magnetic-btn, input, textarea, label')) {
                document.body.classList.add('hovering');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .magnetic-btn, input, textarea, label')) {
                document.body.classList.remove('hovering');
            }
        });
    }
});
