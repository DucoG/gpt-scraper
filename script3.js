

document.getElementById('submit-button').addEventListener('click', () => {
    // Show the loading animation and message
    document.getElementById('loading').style.display = 'block';

    // Get the URL from the input field
    const url = document.getElementById('url-input').value;

    // Use the built-in fetch method to make a request to the URL
    fetch(url)
        .then(response => response.text())
        .then(text => {
            // Hide the loading animation and message
            document.getElementById('loading').style.display = 'none';

            // Store the text in a variable
            const scrapedText = text;

            // Show the TL;DR section
            document.getElementById('tldr').style.display = 'block';
            // Show the question section
            document.getElementById('question-section').style.display = 'flex';
        });
});
