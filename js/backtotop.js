document.addEventListener('DOMContentLoaded', () => {
    // Create button element
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    backToTopBtn.className = 'back-to-top hidden';
    backToTopBtn.title = 'Retour en haut';
    document.body.appendChild(backToTopBtn);

    // Show/Hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            setTimeout(() => backToTopBtn.classList.add('visible'), 10);
        } else {
            backToTopBtn.classList.remove('visible');
            setTimeout(() => backToTopBtn.classList.add('hidden'), 300);
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Progress Bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
});
