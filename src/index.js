
import { fakeApiUrl } from './fakeApi.js';
import './carousel-card/carouselCard.js';
import './carousel/carousel.js';

window.addEventListener('load', () =>{
    fetchData();
});

async function fetchData(){
    const res = await fetch(fakeApiUrl);
    const json = await res.json();
    
    const carousel = document.createElement('my-carousel');
    carousel.title = 'Internet Foods Market';
    carousel.subtitle = 'Best food from best market.'
    carousel.carouselData = json.results;
    document.getElementById('root').appendChild(carousel);
}