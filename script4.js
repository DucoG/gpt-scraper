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

// Function to call the scraper script and get the scraped text
async function getScrapedText(url) {
  // Use the fetch API to call the scraper script
  const response = await fetch('lib/scraper.py', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });

  // Check the status of the response
  if (response.status !== 200) {
    // If the response is not successful, show an error message
    tldr.innerHTML = 'An error occurred while scraping the URL.';
    return;
  }

  // Get the scraped text from the response
  const scrapedText = await response.text();

  // Set the scraped text as the inner HTML of the TL;DR element
  tldr.innerHTML = scrapedText;
}

// Add an event listener to the submit button to call the scraper script
submitButton.addEventListener('click', () => {
    
  // Get the URL from the input field
  const url = urlInput.value;
  console.log(url)

  // Show the loading animation
  showLoading();

  // Call the scraper script and get the scraped text
  getScrapedText(url).then(() => {
    // Hide the loading animation and show the other elements
    hideLoading();
  });
});
