// Get the reference to the download report button and download form elements
const downloadReportButton = document.getElementById('download-report');
const downloadForm = document.getElementById('download-form');

// Get the reference to the view icon element
const viewIcon = document.querySelector('.view-icon');

// Add a click event listener to the download report button
downloadReportButton.addEventListener('click', function() {
    console.log('Hola')
    downloadReportButton.classList.add('hidden');
    downloadForm.classList.remove('hidden');
});

// Add a click event listener to the view icon element
viewIcon.addEventListener('click', function() {
    console.log('chau')
    // When the view icon is clicked, hide the download form and show the download report button
    downloadForm.classList.add('hidden');
    downloadReportButton.classList.remove('hidden');
});