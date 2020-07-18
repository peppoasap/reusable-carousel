
import { fakeApiUrl , fakeJsonLong, fakeJsonShort} from './fakeApi.js';
import './carousel-card/carouselCard.js';
import './carousel/carousel.js';

window.addEventListener('load', () =>{
    const carousel1 = createCarousel('restaurant', 'Internet Foods Market', 'Best food from best market.');
    document.getElementById('root').appendChild(carousel1);
    carousel1.fetchCards(6);
    
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

async function fetchData(){
    //const res = await fetch(fakeApiUrl);
    //const json = await res.json();
    const json = fakeJsonLong;
    
    carousel1.carouselData = json.results;
    document.getElementById('root').appendChild(carousel1);

    const carousel2 = document.createElement('my-carousel');
    carousel2.icon = 'all_inbox';
    carousel2.title = 'World Emails List';
    carousel2.subtitle = 'Just some random stuff with Random API.'
    carousel2.carouselData = fakeJsonShort.results;
    document.getElementById('root').appendChild(carousel2);
}

function convertAttributeForCardData(title, subtitle, imageUrl){
    return {title: title, subtitle: subtitle, imageUrl: imageUrl};
}