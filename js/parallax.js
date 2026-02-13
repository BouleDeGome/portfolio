document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 2;
            const xPos = x * speed;
            const yPos = y * speed;

            el.style.transform = `translateX(${xPos}px) translateY(${yPos}px)`;
        });
    });
});
