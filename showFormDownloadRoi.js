// Get the reference to the download report button and download form elements
const downloadReportButtonRoi = document.getElementById('download-report-roi');
const downloadFormRoi = document.getElementById('download-form-roi');

// Get the reference to the view icon element
const viewIconRoi = document.querySelector('.view-icon-roi');

// Add a click event listener to the download report button
downloadReportButtonRoi.addEventListener('click', function() {
    downloadReportButtonRoi.classList.add('hidden-roi');
    downloadFormRoi.classList.remove('hidden-roi');
});

// Add a click event listener to the view icon element
viewIconRoi.addEventListener('click', function() {
    // When the view icon is clicked, hide the download form and show the download report button
    downloadFormRoi.classList.add('hidden-roi');
    downloadReportButtonRoi.classList.remove('hidden-roi');
});