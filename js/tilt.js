document.addEventListener('DOMContentLoaded', () => {
    // Select cards to apply tilt effect
    const tiltElements = document.querySelectorAll('.tilt-card');

    tiltElements.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on cursor position
            const xPct = x / rect.width;
            const yPct = y / rect.height;

            const xRot = (0.5 - yPct) * 10; // Max rotation X (deg)
            const yRot = (xPct - 0.5) * 10; // Max rotation Y (deg)

            card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });

        // Add transition for smooth mouseleave
        card.style.transition = 'transform 0.1s ease-out';

        // Update transition on hover to be instant/snappy
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease-out';
        });
    });
});
