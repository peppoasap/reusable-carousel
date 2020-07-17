
class CarouselCard extends HTMLElement {
    constructor(){
        super();

        //Placeholder image
        this.imageUrl = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png'

        this.root = this.attachShadow({mode: 'open'});
    }

    set data(cardData){
        this.root.innerHTML = `
        <link rel="stylesheet" href="styles.css">
            <div class="card-wrapper">
                <img class="card-image" src=${cardData.image || this.imageUrl} />
                <div class="card-content">
                    <h2 class="card-title">${cardData.title}</h2>
                    <p class="card-subtitle">${cardData.subtitle}</p>
                </div>
            </div>
        `;
    }
}

window.customElements.define('carousel-card', CarouselCard);