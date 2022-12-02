// Get the elements from the HTML page
const urlInput = document.getElementById('url-input');
const submitButton = document.getElementById('submit-button');
const loading = document.getElementById('loading');
const tldr = document.getElementById('tldr');
const questionSection = document.getElementById('question-section');

// Function to show the loading animation and hide the other elements
function showLoading() {
  loading.style.display = 'block';
  tldr.style.display = 'none';
  questionSection.style.display = 'none';
}

// Function to hide the loading animation and show the other elements
function hideLoading() {
  loading.style.display = 'none';
  tldr.style.display = 'block';
  questionSection.style.display = 'block';
}

// Function to simulate scraping the URL and getting the scraped text
function getScrapedText(url) {
  // Show the loading animation
  showLoading();
  
  // Simulate the scraping process by using setTimeout to wait for 3 seconds
  setTimeout(function() {
    // Hide the loading animation
    hideLoading();
    
    // Set the text of the TLDR element to a dummy summary
    tldr.innerText = "This is a dummy TL;DR summary of the content at the URL";
  }, 3000);
}

// Add an event listener to the submit button to call the getScrapedText function
submitButton.addEventListener('click', function() {
  // Get the URL from the input field
  const url = urlInput.value;
  
  // Call the getScrapedText function
  getScrapedText(url);
});
