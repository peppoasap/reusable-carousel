
class CarouselCard extends HTMLElement {
    constructor() {
        super();

        //Placeholder image
        this.imageUrl;

        this.root = this.attachShadow({ mode: 'open' });

        //Connect styles.css to component
        const linkStyle = document.createElement('link');
        linkStyle.rel = 'stylesheet';
        linkStyle.href = 'styles.css';
        this.root.appendChild(linkStyle);

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'card-wrapper');
        this.cardHeader = document.createElement('div');
        this.cardHeader.setAttribute('class', 'card-header blank-card-header');
        this.wrapper.appendChild(this.cardHeader);
        this.blankImage();
        this.blankCardContent();
        this.blankTitle();
        this.blankSubtitle();
    }

    blankImage() {
        this.image = document.createElement('img');
        this.image.setAttribute('class', 'card-image blank-image');
        this.cardHeader.appendChild(this.image);
    }

    blankCardContent() {
        this.cardContent = document.createElement('div');
        this.cardContent.setAttribute('class', 'card-content');
        this.wrapper.appendChild(this.cardContent);
    }

    blankSubtitle() {
        this.cardSubtitle = document.createElement('h2');
        this.cardSubtitle.setAttribute('class', 'card-subtitle blank-subtitle');
        this.cardContent.appendChild(this.cardSubtitle);
    }

    blankTitle() {
        this.cardTitle = document.createElement('h2');
        this.cardTitle.setAttribute('class', 'card-title blank-title');
        this.cardContent.appendChild(this.cardTitle);
    }

    addCardHeaderInfo() {
        this.cardHeaderInfo = document.createElement('div');
        this.cardHeaderInfo.setAttribute('class', 'card-header-info');
        this.cardHeader.appendChild(this.cardHeaderInfo);
    }

    addType(type) {
        this.cardType = document.createElement('span');
        this.cardType.setAttribute('class', 'card-type');
        this.cardType.textContent = type;
        this.cardHeaderInfo.appendChild(this.cardType);
    }

    addDuration(duration) {
        this.cardDuration = document.createElement('span');
        this.cardDuration.setAttribute('class', 'card-duration');
        this.cardDuration.textContent = duration;
        this.cardHeaderInfo.appendChild(this.cardDuration);
    }

    set data(cardData) {
        this.cardHeader.classList.remove('blank-card-header');
        this.addCardHeaderInfo();
        this.imageUrl = cardData.image;
        this.image.src = this.imageUrl;
        this.image.classList.remove('blank-image');
        this.cardTitle.textContent = cardData.title;
        this.cardTitle.classList.remove('blank-title');
        this.cardSubtitle.textContent = cardData.subtitle;
        this.cardSubtitle.classList.remove('blank-subtitle');
        this.addType(cardData.type);
        this.addDuration(Math.floor(cardData.duration / 60) + ' min');
    }

    connectedCallback() {
        this.root.appendChild(this.wrapper);
    }
}

window.customElements.define('carousel-card', CarouselCard);