import { fakeApiUrl, fakeJsonLong } from '../fakeApi.js';

class Carousel extends HTMLElement {
    constructor() {
        super();

        this.chunksArray = [];
        this.root = this.attachShadow({ mode: 'open' });

        //Connect styles.css to component
        const linkStyle = document.createElement('link');
        linkStyle.rel = 'stylesheet';
        linkStyle.href = 'styles.css';
        this.root.appendChild(linkStyle);

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'carousel-container');

        this.carouselHeader = document.createElement('div');
        this.carouselHeader.setAttribute('class', 'carousel-header');

        this.carouselHeaderText = document.createElement('div');
        this.carouselHeaderText.setAttribute('class', 'carousel-header-text');

        this.cardsContainer = document.createElement('div');
        this.cardsContainer.setAttribute('class', 'carousel-cards-container snappable');

    }

    set icon(icon) {
        const iconElement = document.createElement('span');
        iconElement.setAttribute('class', 'material-icons carousel-icon');
        iconElement.textContent = icon;
        this.carouselHeader.appendChild(iconElement);
    }

    set title(title) {
        const titleElement = document.createElement('h1');
        titleElement.setAttribute('class', 'carousel-title');
        titleElement.textContent = title;
        this.carouselHeaderText.appendChild(titleElement);
    }

    set subtitle(subtitle) {
        const subtitleElement = document.createElement('p');
        subtitleElement.setAttribute('class', 'carousel-subtitle');
        subtitleElement.textContent = subtitle;
        this.carouselHeaderText.appendChild(subtitleElement);
    }

    preloadCards(chunkSize) {
        const chunk = [];
        for (let i = 0; i < chunkSize; i++) {
            chunk.push(document.createElement('carousel-card'));
        }
        this.chunksArray.push(chunk);
        this.renderLastChunks();
    }

    renderLastChunks() {
        this.chunksArray[this.chunksArray.length - 1].forEach((card) => {
            this.cardsContainer.appendChild(card);
        });
    }

    showSideControls() {
        if (this.sideControls.length == 0) {
            this.cardsContainer.appendChild(this.createArrowControl('right'));
            this.cardsContainer.appendChild(this.createArrowControl('left'));
        }
    }

    createArrowControl(floatingSide) {
        const arrow = document.createElement('span');
        const scrollToRight = () => {
            this.cardsContainerElement.scrollBy({ left: 100, behavior: 'smooth' });
        };

        const scrollToLeft = () => {
            this.cardsContainerElement.scrollBy({ left: -100, behavior: 'smooth' });
        };

        arrow.setAttribute('class', `material-icons arrow-control ${floatingSide}`);
        arrow.textContent = (floatingSide === 'right' ? 'keyboard_arrow_right' : 'keyboard_arrow_left');
        arrow.addEventListener('click', floatingSide === 'right' ? scrollToRight : scrollToLeft)
        return arrow;
    }

    connectedCallback() {
        this.root.appendChild(this.wrapper);
        this.wrapper.appendChild(this.carouselHeader);
        this.carouselHeader.appendChild(this.carouselHeaderText);
        this.wrapper.appendChild(this.cardsContainer);

        setTimeout(() => {
            this.checkIfSideControls();
        }, 10)

        window.addEventListener('resize', () => {
            this.checkIfSideControls();
        });
    }

    checkIfSideControls() {
        this.cardsContainerElement = this.wrapper.getElementsByClassName('carousel-cards-container').item(0);
        this.sideControls = this.cardsContainerElement.getElementsByClassName('arrow-control');
        if (this.cardsContainerElement.clientWidth < this.cardsContainerElement.scrollWidth) {
            this.showSideControls();
            this.enableTouchDragging();
        } else if (this.sideControls.length > 0) {
            this.sideControls.item(1).remove();
            this.sideControls.item(0).remove();
        }
    }

    enableTouchDragging() {
        //Enable dragging to scroll
        this.cardsContainerElement.classList.add('draggable');
        let isDown = false;
        let startX;
        let scrollLeft;
        this.cardsContainerElement.addEventListener('mousedown', (e) => {
            isDown = true;
            this.cardsContainerElement.classList.add('active');
            this.cardsContainerElement.classList.remove('snappable');
            startX = e.pageX - this.cardsContainerElement.offsetLeft;
            scrollLeft = this.cardsContainerElement.scrollLeft;
        });

        this.cardsContainerElement.addEventListener('mouseleave', () => {
            isDown = false;
            this.cardsContainerElement.classList.remove('active');
            this.cardsContainerElement.classList.add('snappable');
        });

        this.cardsContainerElement.addEventListener('mouseup', () => {
            isDown = false;
            this.cardsContainerElement.classList.remove('active');
            this.cardsContainerElement.classList.add('snappable');
        });

        this.cardsContainerElement.addEventListener('mousemove', (e) => {
            if (!isDown) { return; }
            e.preventDefault();
            const x = e.pageX - this.cardsContainerElement.offsetLeft;
            const step = (x - startX) * 1;
            this.cardsContainerElement.scrollLeft = scrollLeft - step;
        });
    }

    // Fetch cards data from API, chunkSize indicate the number of cards to fetch. 
    async fetchCards(chunkSize) {
        this.preloadCards(chunkSize);
        const res = await fetch(fakeApiUrl + chunkSize);
        const json = await res.json();
        //const json = fakeJsonLong;
        setTimeout(() => {
            let i = 0;
            this.chunksArray[this.chunksArray.length - 1].forEach((card) => {
                card.data = json.results[i];
                i++;
            });
        }, 2000)
    }
}

window.customElements.define('my-carousel', Carousel);