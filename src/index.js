
import { fakeApiUrl , fakeJsonLong, fakeJsonShort} from './fakeApi.js';
import './carousel-card/carouselCard.js';
import './carousel/carousel.js';

window.addEventListener('load', () =>{
    fetchData();
});

async function fetchData(){
    //const res = await fetch(fakeApiUrl);
    //const json = await res.json();
    const json = fakeJsonLong;
    
    const carousel1 = document.createElement('my-carousel');
    carousel1.icon = 'restaurant';
    carousel1.title = 'Internet Foods Market';
    carousel1.subtitle = 'Best food from best market.'
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