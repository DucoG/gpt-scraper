// Listen for a click on the submit button
document.getElementById('submit-button').addEventListener('click', function() {
    // Show the loading animation and message
    document.getElementById('loading').style.display = 'block';
  
    // Set a timeout to simulate a long-running task
    setTimeout(function() {
      // Hide the loading animation and message
      document.getElementById('loading').style.display = 'none';
  
      // Show the TL;DR section
      document.getElementById('tldr').style.display = 'block';
      // Show the question section
      document.getElementById('question-section').style.display = 'flex';
    }, 3000); // 3 seconds
  });

// Bind an event handler function to the submit button
document.getElementById('submit-button').addEventListener('click', () => {
  // Define the URL to scrape
  const url = document.getElementById('url-input').value;

  // Make a request to the scraper.py script and pass in the URL as an argument
  fetch(`lib/scraper.py?url=${url}`)
    .then((response) => response.text())
    .then((text) => {
      // Use the scraped text to update the TL;DR and question sections
      document.getElementById('tldr').innerHTML = text;
      document.getElementById('question-section').innerHTML = text;
    })
    .catch((error) => console.error(error));
});
