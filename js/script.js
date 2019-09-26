/*jslint esnext: true*/

////////////////////////////////
// GET ELEMENTS FROM DOM
////////////////////////////////

const elements = {
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

const toggleNav = () => {
    elements.navBtn.classList.toggle('navigation__button--menu-open');
    elements.navBackground.classList.toggle('navigation__background--menu-open');
    elements.navNav.classList.toggle('navigation__nav--menu-open');
};


////////////////////////////////
// CHANGE iPHONE IMAGE
////////////////////////////////

const renderMockups = event => {

    // Get type of HTML element that was triggered
    let node = event.target.nodeName;

    // Store the class name of triggered feature
    let feature;

    // If child element was triggered, get parent's class
    if (node === 'P' || node === 'H3') {
       feature = event.target.parentNode.className.split(' ')[1];

    // Else get element's class
    } else if (node === 'DIV') {
       feature = event.target.className.split(' ')[1];
    }

    // If feature 1 was triggered, show Add Thought screen
    if (feature === 'features__feature--1') {
        elements.featureImg.src = 'img/mockup-add-thought-heyhon.png';

    // Else if feature 2 was triggered, show Archive screen
    } else if (feature === 'features__feature--2') {
        elements.featureImg.src = 'img/mockup-archive-heyhon.png';

    // Otherwise, show Done screen
    } else if (feature === 'features__feature--3') {
        elements.featureImg.src = 'img/mockup-archive-done-heyhon.png';
    } else if (feature === 'features__feature--retro-1') {
        elements.featureImg.src = 'img/mockup-retro-topics.png';
    } else if (feature === 'features__feature--retro-2') {
        elements.featureImg.src = 'img/retro-action-items.png';
    } else if (feature === 'features__feature--retro-3') {
        elements.featureImg.src = 'img/retro-tips-before-you-start.png';
    }  else if (feature === 'features__feature--wiki-1') {
        elements.featureImg.src = 'img/01-relationship-wiki-notion-template-weekly-to-dos.png';
    }  else if (feature === 'features__feature--wiki-2') {
        elements.featureImg.src = 'img/02-relationship-wiki-notion-template-important-dates.png';
    }  else if (feature === 'features__feature--wiki-3') {
        elements.featureImg.src = 'img/03-relationship-wiki-notion-template-date-night-ideas.png';
    }  else if (feature === 'features__feature--wiki-4') {
        elements.featureImg.src = 'img/04-relationshi-wiki-notion-template-weekly-check-ins.png';
    }

};

////////////////////////////////
// SET UP EVENT LISTENERS
////////////////////////////////

const init = () => {

    // Toggle navigation when button is clicked
    elements.navBtn.addEventListener('click', toggleNav);

    // Toggle navigation when link in menu is clicked
    elements.navList.addEventListener('click', function(event) {
        let node = event.target.nodeName;
        if (node === 'LI' || node === 'A') {
            toggleNav();
        }
    });

    // Change image when feature is clicked
    elements.featureBox.addEventListener('click', renderMockups);

    // Change image when feature is hovered
    elements.featureBox.addEventListener('mouseover', renderMockups);

};

init();
