document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

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

                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

