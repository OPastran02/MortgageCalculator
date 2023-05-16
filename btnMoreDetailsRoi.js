// Get the button element with ID 'details-button-WA'
const buttonWARoi = document.getElementById('roi-details-button-WA');

// Select all elements on the page with class 'vissible-list-WA' or 'hidden-list-WA'
const elementsWARoi = document.querySelectorAll('.vissible-list-WA-Roi, .hidden-list-WA-Roi');

// Initialize a state variable to track whether the elements are currently expanded or not
let isExpandedWARoi = false;

// Add a click event listener to the 'details-button-WA' button
buttonWARoi.addEventListener('click', () => {
    // For each element in 'elementsWARoi', toggle its visibility class
    elementsWARoi.forEach((element) => {
        element.classList.toggle('vissible-list-WA-Roi');
        element.classList.toggle('hidden-list-WA-Roi');
    });

    // Update the text of the button and the state variable based on whether the elements are expanded or not
    if (isExpandedWARoi) {
        buttonWARoi.textContent = 'More details';
        isExpandedWARoi = false;
    } else {
        buttonWARoi.textContent = 'Less details';
        isExpandedWARoi = true;
    }
});

// Get the button element with ID 'details-button-WOA'
const buttonWOARoi = document.getElementById('roi-details-button-WOA');

// Select all elements on the page with class 'vissible-list-WOA-Roi' or 'hidden-list-WOA-Roi'
const elementsWOARoi = document.querySelectorAll('.vissible-list-WOA-Roi, .hidden-list-WOA-Roi');

// Initialize a state variable to track whether the elements are currently expanded or not
let isExpandedWOARoi = false; // Variable de estado

// Add a click event listener to the 'details-button-WOA' button
buttonWOARoi.addEventListener('click', () => {
    // For each element in 'elementsWOARoi', toggle its visibility class
    elementsWOARoi.forEach((element) => {
        element.classList.toggle('vissible-list-WOA-Roi');
        element.classList.toggle('hidden-list-WOA-Roi');
    });

    // Update the text of the button and the state variable based on whether the elements are expanded or not
    if (isExpandedWOARoi) {
        buttonWOARoi.textContent = 'More details';
        isExpandedWOARoi = false;
    } else {
        buttonWOARoi.textContent = 'Less details';
        isExpandedWOARoi = true;
    }
});
