// const carousel = document.getElementById("carousel");

//     // Duplique les éléments pour créer un effet infini
//     const clone = carousel.cloneNode(true);
//     carousel.parentElement.appendChild(clone);

//     let scrollAmount = 0;

//     function autoScroll() {
//         scrollAmount += 1; // vitesse du scroll

//         carousel.style.transform = `translateX(-${scrollAmount}px)`;
//         clone.style.transform = `translateX(-${scrollAmount - carousel.scrollWidth}px)`;

//         // Reset quand on dépasse la longueur totale
//         if (scrollAmount >= carousel.scrollWidth) {
//             scrollAmount = 0;
//         }

//         requestAnimationFrame(autoScroll);
//     }

//     autoScroll();