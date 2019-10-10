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

    // Change image based on selected feature
    if (feature === 'features__feature--1') {
        elements.featureImg.src = 'img/issue-tracker-add-thought.png';
    } else if (feature === 'features__feature--2') {
        elements.featureImg.src = 'img/issue-tracker-archive-thoughts.png';
    } else if (feature === 'features__feature--3') {
        elements.featureImg.src = 'img/issue-tracker-archive-done.png';
    } else {
        elements.featureImg.src = 'img/issue-tracker-add-thought.png';
    }
};


init(renderMockups);
