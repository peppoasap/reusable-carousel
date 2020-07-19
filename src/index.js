
import { fakeApiUrl , fakeJsonLong, fakeJsonShort} from './fakeApi.js';
import './carousel-card/carouselCard.js';
import './carousel/carousel.js';

window.addEventListener('load', () =>{
    const carousel1 = createCarousel('restaurant', 'Internet Foods Market', 'Best food from best market.');
    document.getElementById('root').appendChild(carousel1);
    carousel1.fetchCards(9);

    const carousel2 = createCarousel('all_inbox', 'World Emails List', 'Just some random stuff with Random API.');
    document.getElementById('root').appendChild(carousel2);
    carousel2.fetchCards(4);
    
});

// This method instanciate a new carousel based on 'my-carousel' WebComponent defined in carousel.js
// and return it.
function createCarousel(icon, title, subtitle){
    const carousel = document.createElement('my-carousel');
    carousel.icon = icon;
    carousel.title = title;
    carousel.subtitle = subtitle;
    return carousel;
}

function convertAttributeForCardData(title, subtitle, imageUrl){
    return {title: title, subtitle: subtitle, imageUrl: imageUrl};
}