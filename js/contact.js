// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    alert(`Bonjour ${name}, malheuresement, le système d'envoie de message par le site web est actuellement indisponible. Pour m'envoyer un message, merci de m'envoyer un mail à l'adresse suivante : contact@milanlelievre.com`);
    
    // Réinitialiser le formulaire
    contactForm.reset();
});