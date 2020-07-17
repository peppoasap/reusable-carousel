class Carousel extends HTMLElement{
    constructor(){
        super();

        this.root = this.attachShadow({mode: 'open'});
        //Connect styles.css to component
        const linkStyle = document.createElement('link');
        linkStyle.rel='stylesheet';
        linkStyle.href='styles.css';
        this.root.appendChild(linkStyle);

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'carousel-container');
        this.root.appendChild(this.wrapper);

        this.cardsContainer = document.createElement('div');
        this.cardsContainer.setAttribute('class', 'carousel-cards-container');
    }

    set title(title){
        const titleElement = document.createElement('h1');
        titleElement.setAttribute('class', 'carousel-title');
        titleElement.textContent = title;
        this.wrapper.appendChild(titleElement);
    }

    set subtitle(subtitle){
        const subtitleElement = document.createElement('p');
        subtitleElement.setAttribute('class', 'carousel-subtitle');
        subtitleElement.textContent = subtitle;
        this.wrapper.appendChild(subtitleElement);
    }

    set carouselData(data){
        this.wrapper.appendChild(this.cardsContainer);
        data.forEach(cardData => {
            const carouselCard = document.createElement('carousel-card');
            carouselCard.data = cardData;
            this.cardsContainer.appendChild(carouselCard);
        });
    }
}

window.customElements.define('my-carousel', Carousel);