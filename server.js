const express = require('express');
const bodyParser = require('body-parser');
const { extractText, summarizeWithGPT3 } = require('./gpt3-utils');

const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Handle POST request to "/generate-summary" endpoint
app.post('/generate-summary', async (req, res) => {
  try {
    // Extract text from URL provided in request body
    const text = await extractText(req.body.url);

    // Generate summary using GPT-3
    const summary = await summarizeWithGPT3(text);

    // Return summary in response
    res.json({ summary });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Handle POST request to "/find-out" endpoint
app.post('/find-out', async (req, res) => {
  try {
    // Get information related to query using GPT-3
    const information = await findOutWithGPT3(req.body.query);

    // Return information in response
    res.json({ information });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send(error.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
