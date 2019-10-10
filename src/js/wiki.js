import { elements, toggleNav, init } from './base';

const renderMockups = event => {

    // Get type of HTML element that was triggered
    let node = event.target.nodeName;

    // Get the feature that was selected
    let feature;

    if (node === 'P' || node === 'H3') {
       feature = event.target.parentNode.className.split(' ')[1];
    } else if (node === 'DIV') {
       feature = event.target.className.split(' ')[1];
    }

    // Change image based on feature selected
    if (feature === 'features__feature--wiki-1') {
      elements.featureImg.src = 'img/wiki-home.png';
    } else if (feature === 'features__feature--wiki-2') {
      elements.featureImg.src = 'img/wiki-timeline-calendar.png';
    } else if (feature === 'features__feature--wiki-3') {
        elements.featureImg.src = 'img/wiki-date-ideas.png';
    } else if (feature === 'features__feature--wiki-4') {
        elements.featureImg.src = 'img/wiki-weekly-checkins.png';
    } else {
      elements.featureImg.src = 'img/wiki-to-dos.png';
    }

};


init(renderMockups);
