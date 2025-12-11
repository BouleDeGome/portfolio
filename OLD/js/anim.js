// PAGE APPARANTE

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour activer l'animation quand l'élément est visible
function checkElementsInView() {
    const elements = document.querySelectorAll('.popupjs');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Appeler la fonction au chargement et quand on scroll
window.addEventListener('scroll', checkElementsInView);
window.addEventListener('load', checkElementsInView);





// PHOTO DEFILEMENT

let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let autoSlideInterval;

// Afficher la première image au chargement
showSlides(slideIndex);

// Fonction pour changer de slide
function plusSlides(n) {
    clearInterval(autoSlideInterval); // Arrête le défilement automatique
    showSlides(slideIndex += n);
    autoSlide();
}

// Fonction pour afficher les slides
function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
   
    // Cacher toutes les images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    // Afficher l'image actuelle
    slides[slideIndex].style.display = "block";
}

// Défilement automatique toutes les 4 secondes
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        plusSlides(1); // Passe à la slide suivante
    }, 4000);
}

// Lancer le défilement automatique
autoSlide();



// window.onscroll = function() {fixerNavbar()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function fixerNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("fixed");
//     } else {
//         navbar.classList.remove("fixed");
//     }
// }