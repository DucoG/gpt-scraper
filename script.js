// Get reference to elements on the page
const urlInput = document.getElementById('url-input');
const submitButton = document.getElementById('submit-button');
const loadingAnimation = document.getElementById('loading-animation');
const summaryContainer = document.getElementById('summary-container');
const findOutInput = document.getElementById('find-out-input');
const findOutButton = document.getElementById('find-out-button');

// Add event listener to submit button to handle user input
submitButton.addEventListener('click', () => {
  // Get URL from input field
  const url = urlInput.value;

  // Show loading animation
  loadingAnimation.style.display = 'block';

  // Make request to server to extract text from URL and generate summary using GPT-3
  fetch('/generate-summary', {
    method: 'POST',
    body: JSON.stringify({ url }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Hide loading animation
      loadingAnimation.style.display = 'none';

      // Display summary
      summaryContainer.innerHTML = `<p>${data.summary}</p>`;
      summaryContainer.style.display = 'block';

      // Show "find out" section
      findOutInput.style.display = 'block';
      findOutButton.style.display = 'block';
    });
});

// Add event listener to "find out" button to handle user input
findOutButton.addEventListener('click', () => {
  // Get query from input field
  const query = findOutInput.value;

  // Make request to server to get information related to query using GPT-3
  fetch('/find-out', {
    method: 'POST',
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display information
      alert(data.information);
    });
});
