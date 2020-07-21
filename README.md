# Reusable Carousel
This is a Carousel Component written in Javascript using WebComponents.

## How to use 
```javascript
  // Import the carousel component
  import './carousel/carousel.js';
  
  // Create a function to easily generate carousels and set all is params
  function createCarousel(icon, title, subtitle) {
    const carousel = document.createElement('my-carousel');
    carousel.icon = icon;
    carousel.title = title;
    carousel.subtitle = subtitle;
    return carousel;
  }

  // Create a carousel element and append to 'root' div in your HTML
    const carousel = createCarousel('restaurant', 'Internet Foods Market', 'Best food from best market.');
    document.getElementById('root').appendChild(carousel1);
    // fetchCards(chunkSize) is a method to retrieve the carousel cards data from API
    carousel1.fetchCards(9);
```
## How to run
To run this example use a web server, like [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

### Screenshot
![overview](https://github.com/peppoasap/reusable-carousel/blob/master/screenshot/overview.png)

![loading](https://github.com/peppoasap/reusable-carousel/blob/master/screenshot/loading.png)
