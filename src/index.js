
import './carousel/carousel.js';

window.addEventListener('load', () => {
    // Create a carousel element and append to 'root' div
    const carousel1 = createCarousel('restaurant', 'Internet Foods Market', 'Best food from best market.');
    document.getElementById('root').appendChild(carousel1);
    // fetchCards(chunkSize) is a method to retrieve the carousel cards data from API
    carousel1.fetchCards(9);

    const carousel2 = createCarousel('all_inbox', 'World Emails List', 'Just some random stuff with Random API.');
    document.getElementById('root').appendChild(carousel2);
    carousel2.fetchCards(4);

});

// This method instanciate a new carousel based on 'my-carousel' WebComponent defined in carousel.js
// and return it.
// Icon is a Material Icon String for the carousel icon
// Title is a the string for the carousel title
// Subtitle is the string for the carousel description/subtitle
function createCarousel(icon, title, subtitle) {
    const carousel = document.createElement('my-carousel');
    carousel.icon = icon;
    carousel.title = title;
    carousel.subtitle = subtitle;
    return carousel;
}