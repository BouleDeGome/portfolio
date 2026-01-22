// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIconMobile = document.getElementById('theme-toggle-mobile-dark-icon');
const lightIconMobile = document.getElementById('theme-toggle-mobile-light-icon');

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the current theme on page load
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (darkIcon && lightIcon) {
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    }
    if (darkIconMobile && lightIconMobile) {
        darkIconMobile.classList.remove('hidden');
        lightIconMobile.classList.add('hidden');
    }
} else {
    document.documentElement.classList.remove('dark');
    if (darkIcon && lightIcon) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
    if (darkIconMobile && lightIconMobile) {
        darkIconMobile.classList.add('hidden');
        lightIconMobile.classList.remove('hidden');
    }
}

// Toggle theme function
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update icons
    if (darkIcon && lightIcon) {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');
    }
    if (darkIconMobile && lightIconMobile) {
        darkIconMobile.classList.toggle('hidden');
        lightIconMobile.classList.toggle('hidden');
    }
}

// Add event listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (menuOpenIcon && menuCloseIcon) {
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        }
    });
}

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
        if (menuOpenIcon && menuCloseIcon) {
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Veuillez remplir tous les champs obligatoires.');
        }
    });
});

// Add loading state to buttons
const buttons = document.querySelectorAll('button[type="submit"]');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.form && this.form.checkValidity()) {
            this.disabled = true;
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Chargement...';
            
            setTimeout(() => {
                this.disabled = false;
                this.textContent = originalText;
            }, 2000);
        }
    });
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copié dans le presse-papiers !');
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
    });
}

// Service plan selection (for order pages)
if (window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const plan = urlParams.get('plan');
    const price = urlParams.get('price');
    const processor = urlParams.get('processor');
    
    if (service && plan && price) {
        document.querySelectorAll('[data-service-name]').forEach(el => {
            el.textContent = decodeURIComponent(plan);
        });
        document.querySelectorAll('[data-service-price]').forEach(el => {
            el.textContent = price + '€/mois';
        });
        if (processor) {
            document.querySelectorAll('[data-service-processor]').forEach(el => {
                el.textContent = decodeURIComponent(processor);
            });
        }
    }
}

// Processor selection toggle (for Minecraft page)
const processorButtons = document.querySelectorAll('[data-processor]');
const planContainers = document.querySelectorAll('[data-plans]');

processorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const processor = this.dataset.processor;
        
        // Update active button
        processorButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide plans
        planContainers.forEach(container => {
            if (container.dataset.plans === processor) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
    });
});

// Edition selection toggle (for Minecraft page)
const editionButtons = document.querySelectorAll('[data-edition]');

editionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const edition = this.dataset.edition;
        
        // Update active button
        editionButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide edition plans
        const editionContainers = document.querySelectorAll('[data-edition-plans]');
        editionContainers.forEach(container => {
            if (container.dataset.editionPlans === edition) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
    });
});

// Status page auto-refresh
if (window.location.pathname.includes('status')) {
    setInterval(() => {
        // Simulate status check (in production, this would make an API call)
        const statusIndicators = document.querySelectorAll('.status-indicator');
        statusIndicators.forEach(indicator => {
            // This is just for demo - in production, fetch real status
            indicator.classList.add('pulse');
            setTimeout(() => indicator.classList.remove('pulse'), 1000);
        });
    }, 30000); // Check every 30 seconds
}

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('NexaHost - Site chargé avec succès ✨');
