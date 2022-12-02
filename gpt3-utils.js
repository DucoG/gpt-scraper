const fetch = require('node-fetch');
const OpenAi = require('openai');

const openai = new OpenAi({
  secret: '<your-openai-secret-key>',
});

const extractText = async (url) => {
  // TODO: Implement text extraction from URL
  return '';
};

const summarizeWithGPT3 = async (text) => {
  // TODO: Implement GPT-3 API integration to generate summary
  return '';
};

module.exports = {
  extractText,
  summarizeWithGPT3,
};
