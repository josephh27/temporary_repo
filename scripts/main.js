
// Start of departments carousel
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const gallery = document.querySelector('.gallery');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
            el.classList.remove('gallery-item-7');
        })

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        })
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    
    setControls() {
        this.carouselControls.forEach(control => {
            gallery.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
        })
    }

    useControls() {
        const previousTrigger = document.querySelector('.gallery-controls-previous');
        const nextTrigger = document.querySelector('.gallery-controls-next');
        const triggers = [previousTrigger, nextTrigger];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
// End of departments carousel

// Start of events carousel

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1000: {items: 3}
        },
        loop: false,
        rewind: true
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.owl-next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev-btn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })

});


// End of events carousel