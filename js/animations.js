const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Staggered reveal for children (e.g., list items, cards)
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('active');
                }, index * 100); // 100ms delay between each item
            });
        }
    });
}, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
});

// Exposer globalement pour le contenu dynamique
window.revealObserver = revealObserver;

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
});

