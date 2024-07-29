// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.card');
    
//     cards.forEach(card => {
//         card.addEventListener('click', function() {
//             const link = card.getAttribute('data-link');
//             window.location.href = link;
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const image = card.dataset.image;
        const url = card.dataset.url;
        
        // Set the background image for the game card
        card.style.backgroundImage = `url(${image})`;
        
        
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
   
});
