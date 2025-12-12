// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    alert(`Merci ${name} pour votre message !\n\nVous recevrez une réponse bientôt !`);
    
    // Réinitialiser le formulaire
    contactForm.reset();
});