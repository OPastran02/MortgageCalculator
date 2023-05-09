// Get the button element with ID 'details-button-WA'
const buttonWA = document.getElementById('noi-details-button-WA');

// Select all elements on the page with class 'vissible-list-WA' or 'hidden-list-WA'
const elementsWA = document.querySelectorAll('.vissible-list-WA, .hidden-list-WA');

// Initialize a state variable to track whether the elements are currently expanded or not
let isExpandedWA = false; // Variable de estado

// Add a click event listener to the 'details-button-WA' button
buttonWA.addEventListener('click', () => {
    // For each element in 'elementsWA', toggle its visibility class
    elementsWA.forEach((element) => {
        element.classList.toggle('vissible-list-WA');
        element.classList.toggle('hidden-list-WA');
    });

    // Update the text of the button and the state variable based on whether the elements are expanded or not
    if (isExpandedWA) {
        buttonWA.textContent = 'More details';
        isExpandedWA = false;
    } else {
        buttonWA.textContent = 'Less details';
        isExpandedWA = true;
    }
});

// Get the button element with ID 'details-button-WOA'
const buttonWOA = document.getElementById('noi-details-button-WOA');

// Select all elements on the page with class 'vissible-list-WOA' or 'hidden-list-WOA'
const elementsWOA = document.querySelectorAll('.vissible-list-WOA, .hidden-list-WOA');

// Initialize a state variable to track whether the elements are currently expanded or not
let isExpandedWOA = false; // Variable de estado

// Add a click event listener to the 'details-button-WOA' button
buttonWOA.addEventListener('click', () => {
    // For each element in 'elementsWOA', toggle its visibility class
    elementsWOA.forEach((element) => {
        element.classList.toggle('vissible-list-WOA');
        element.classList.toggle('hidden-list-WOA');
    });

    // Update the text of the button and the state variable based on whether the elements are expanded or not
    if (isExpandedWOA) {
        buttonWOA.textContent = 'More details';
        isExpandedWOA = false;
    } else {
        buttonWOA.textContent = 'Less details';
        isExpandedWOA = true;
    }
});
