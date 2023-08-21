const offer = document.getElementById('offer_dropdown');
const icon = document.getElementById('offer_icon');
const mobile_nav = document.getElementById('mobile_nav');
const mobile_searchbar = document.getElementById('mobile_search');
let triggered = false;

const roll_offer = () => {
    const container = document.getElementById('offer_container');
    if (!triggered) {
        offer.style.display = 'flex';
        offer.classList.add('lg:animate-emerge');
        icon.style.transform = 'rotate(180deg)';
        triggered = true;
    }
    else {
        offer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
        triggered = false;
    }

    // close on click outside
    document.addEventListener('click', (event) => {
        const isClickInside = container.contains(event.target);
        if (!isClickInside) {
            offer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
            triggered = false;
        }
    });

}

const show_searchbar = () => {
    const container = document.getElementById('mobile_search_container');
    const icon = document.getElementById('search_icon');
    mobile_nav.style.display = 'none';
    icon.style.display = 'none';
    mobile_searchbar.style.display = 'flex';

    document.addEventListener('click', (event) => {
        const isClickInside = container.contains(event.target);
        if (!isClickInside) {
            mobile_nav.style.display = 'flex';
            mobile_searchbar.style.display = 'none';
            icon.style.display = 'block';
        }
    });
}