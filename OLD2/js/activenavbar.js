const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        link.classList.add('text-slate-300');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-slate-300');
            link.classList.add('text-cyan-400');
        }
    });
});