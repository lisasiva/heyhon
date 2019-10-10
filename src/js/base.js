////////////////////////////////
// GET ELEMENTS FROM DOM
////////////////////////////////

export const elements = {
    navBtn: document.querySelector('.navigation__button'),
    navBackground: document.querySelector('.navigation__background'),
    navNav: document.querySelector('.navigation__nav'),
    navList: document.querySelector('.navigation__list'),
    navIcon: document.querySelector('.navigation__icon'),
    featureBox: document.querySelector('.features__text-box'),
    featureImg: document.querySelector('.features__image')
};

////////////////////////////////
// TOGGLE NAVIGATION
////////////////////////////////

export const toggleNav = () => {
    elements.navBtn.classList.toggle('navigation__button--menu-open');
    elements.navBackground.classList.toggle('navigation__background--menu-open');
    elements.navNav.classList.toggle('navigation__nav--menu-open');
};



////////////////////////////////
// SET UP EVENT LISTENERS
////////////////////////////////

export const init = (render) => {

    // Toggle navigation when button is clicked
    elements.navBtn.addEventListener('click', toggleNav);

    // Toggle navigation when link in menu is clicked
    elements.navList.addEventListener('click', function(event) {
        let node = event.target.nodeName;
        if (node === 'LI' || node === 'A') {
            toggleNav();
        }
    });

    // If there are mockups to render, add event listeners
    if (render) {
      elements.featureBox.addEventListener('click', render);
      elements.featureBox.addEventListener('mouseover', render);
    }

};
