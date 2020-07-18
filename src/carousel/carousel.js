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
        
        this.carouselHeader = document.createElement('div');
        this.carouselHeader.setAttribute('class', 'carousel-header');

        this.carouselHeaderText = document.createElement('div');
        this.carouselHeaderText.setAttribute('class', 'carousel-header-text');

        this.cardsContainer = document.createElement('div');
        this.cardsContainer.setAttribute('class', 'carousel-cards-container snappable');

    }

    set icon(icon){
        const iconElement = document.createElement('span');
        iconElement.setAttribute('class', 'material-icons carousel-icon');
        iconElement.textContent = icon;
        this.carouselHeader.appendChild(iconElement);
    }

    set title(title){
        const titleElement = document.createElement('h1');
        titleElement.setAttribute('class', 'carousel-title');
        titleElement.textContent = title;
        this.carouselHeaderText .appendChild(titleElement);
    }

    set subtitle(subtitle){
        const subtitleElement = document.createElement('p');
        subtitleElement.setAttribute('class', 'carousel-subtitle');
        subtitleElement.textContent = subtitle;
        this.carouselHeaderText.appendChild(subtitleElement);
    }

    set carouselData(data){
        data.forEach(cardData => {
            const carouselCard = document.createElement('carousel-card');
            carouselCard.data = cardData;
            this.cardsContainer.appendChild(carouselCard);
        });
    }

    showSideControls(){
        this.cardsContainer.appendChild(this.createArrowControl('right'));
        this.cardsContainer.appendChild(this.createArrowControl('left'));
    }

    createArrowControl(floatingSide){
        const arrow = document.createElement('span');
        const scrollToRight = () =>{
            this.cardsContainerElement.scrollBy({left: 100, behavior: 'smooth'});
        };

        const scrollToLeft = () =>{
            this.cardsContainerElement.scrollBy({left: -100, behavior: 'smooth'});
        };

        arrow.setAttribute('class', `material-icons arrow-control ${floatingSide}`);
        arrow.textContent = (floatingSide === 'right' ? 'keyboard_arrow_right' : 'keyboard_arrow_left');
        arrow.addEventListener('click', floatingSide === 'right' ? scrollToRight : scrollToLeft)
        return arrow;
    }

    connectedCallback(){
        this.root.appendChild(this.wrapper);
        this.wrapper.appendChild(this.carouselHeader);
        this.carouselHeader.appendChild(this.carouselHeaderText);
        this.wrapper.appendChild(this.cardsContainer);
        
        
        setTimeout(() =>{
            this.cardsContainerElement = this.wrapper.getElementsByClassName('carousel-cards-container').item(0);
            if(this.cardsContainerElement.clientWidth <  this.cardsContainerElement.scrollWidth){
                this.showSideControls();
                this.enableTouchDragging();
           }
        }, 10)
        


    }

    enableTouchDragging(){
          //Enable dragging to scroll
          this.cardsContainerElement.classList.add('draggable');
          let isDown = false;
          let startX;
          let scrollLeft;
          this.cardsContainerElement.addEventListener('mousedown', (e)=> {
              isDown = true;
              this.cardsContainerElement.classList.add('active');
              this.cardsContainerElement.classList.remove('snappable');
              startX = e.pageX - this.cardsContainerElement.offsetLeft;
              scrollLeft = this.cardsContainerElement.scrollLeft;
          });
  
          this.cardsContainerElement.addEventListener('mouseleave', ()=> {
              isDown = false;
              this.cardsContainerElement.classList.remove('active');
              this.cardsContainerElement.classList.add('snappable');
          });
          
          this.cardsContainerElement.addEventListener('mouseup', () => {
            isDown = false;
            this.cardsContainerElement.classList.remove('active');
            this.cardsContainerElement.classList.add('snappable');
          });

          this.cardsContainerElement.addEventListener('mousemove', (e)=> {
              if(!isDown){return;}
              e.preventDefault();
              const x = e.pageX - this.cardsContainerElement.offsetLeft;
              const step = (x - startX) * 1;
              this.cardsContainerElement.scrollLeft = scrollLeft - step;
          });
    }
}

window.customElements.define('my-carousel', Carousel);