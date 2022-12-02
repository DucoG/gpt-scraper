import argparse
from bs4 import BeautifulSoup
import requests


def scrape_text(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Parse the response using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all text content from the page
    text = soup.find_all(text=True)

    # Return the extracted text
    return '\n\n'.join(text)


if __name__ == '__main__':
    # Define command-line arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('url', help='The URL to scrape')
    args = parser.parse_args()

    # Scrape the text from the URL
    text = scrape_text(args.url)

    # Print the extracted text to the console
    print(text)
