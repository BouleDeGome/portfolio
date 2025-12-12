// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simuler l'envoi (dans un vrai projet, vous enverriez les données à un serveur)
    alert(`Merci ${name} pour votre message !\n\nCeci est une démo. Dans un site réel, votre message serait envoyé.`);
    
    // Réinitialiser le formulaire
    contactForm.reset();
});