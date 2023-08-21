const items = document.querySelectorAll('.gallery-item');
const gallery = document.querySelector('#gallery');
const gallery_extend = document.querySelector('#gallery_extend');
const gradient = document.querySelector('#gradient');
const modal = document.querySelector('#modal');
const carousel = document.querySelector('.carousel-mini');

items.forEach(item => {
    item.addEventListener('click', () => {
        const index = item.getAttribute('index');
        popup_gallery(index);
    });
});

const roll_gallery = () => {
    gradient.style.display = 'none';
    gallery_extend.style.display = 'none';

    gallery.style.height = 'fit-content';
    gallery.classList.add('animate-extend_vertical');
};

const popup_gallery = (starting_index = 1) => {
    const width = window.innerWidth;
    const scroll = width * starting_index;

    modal.style.display = 'flex';
    carousel.scrollLeft = scroll;
    document.body.style.overflow = 'hidden';


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close_modal();
    });

}

const close_modal = () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

const carousel_prev = () => {
    const width = window.innerWidth;
    carousel.scroll({
        left: carousel.scrollLeft - width,
        behavior: 'smooth'
    });
}

const carousel_next = () => {
    const width = window.innerWidth;
    carousel.scroll({
        left: carousel.scrollLeft + width,
        behavior: 'smooth'
    });
}
