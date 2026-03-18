// Smooth scroll for anchor links with header offset — custom animation
(function () {
    // Easing function: ease-in-out cubic
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startY + difference * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const closeIcon = document.getElementById('close-icon');
                const menuIcon = document.getElementById('menu-icon');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (closeIcon) closeIcon.classList.add('hidden');
                    if (menuIcon) menuIcon.classList.remove('hidden');
                }

                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                const distance = Math.abs(targetPosition - window.pageYOffset);

                // Duration proportionnelle à la distance (min 400ms, max 1200ms)
                const duration = Math.min(1200, Math.max(400, distance * 0.15));

                smoothScrollTo(targetPosition, duration);

                // Update URL hash without jumping
                history.pushState(null, null, href);
            }
        });
    });
})();