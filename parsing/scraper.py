import base64
import json
import pickle
import re
from typing import List

import requests
from bs4 import BeautifulSoup


def extract_filename_from_url(url: str) -> str | None:
    """
    Extract filename from url
    @param url: url where filename must be extracted from
    @return: filename (TA0001.jpg, TA0002.jpg, ..., TA0111.jpg etc.)
    """
    try:
        return re.findall(r"TA[0-9]{4}.jpg", url)[0]
    except IndexError:
        return None


def get_urls() -> List[str]:
    """
    Get urls from urls.pickle file
    @return: list of urls
    """
    with open('urls.pickle', 'rb') as f:
        return pickle.load(f)


def get_as_base64(url) -> str:
    """
    Convert image url to base64 format
    @param url: image url
    @return: encoded image
    """
    return base64.b64encode(requests.get(url).content).decode('utf-8')


class Image:
    def __init__(self, filename, caption, headline, artists):
        self.filename = filename
        url = 'http://files.krishna.com/ImageFolio42_files/gallery-images/Krishna_Conscious_Paintings/' + filename
        self.base64_format = get_as_base64(url)
        self.caption = caption
        self.headline = headline
        self.artists = artists


def save_list_of_objects_to_json(list_of_objects: List[Image]) -> None:
    """
    Save list of Image objects to json file
    @param list_of_objects: list of Image objects
    @return: None
    """
    with open('data.json', 'w') as f:
        json.dump([ob.__dict__ for ob in list_of_objects], f)


def main():
    urls = get_urls()
    images = list()
    for url in urls:
        page = requests.get(url)
        bs = BeautifulSoup(page.text, 'html.parser')
        filename = extract_filename_from_url(url)
        if filename:
            caption, headline, artists = 'No caption', 'No headline', 'Unknown'
            fonts = bs.findAll('font')
            for i, font in enumerate(fonts):
                if font.text == 'Caption':
                    caption = fonts[i + 1].text
                if font.text == 'Headline':
                    headline = fonts[i + 1].text
                if font.text == 'Artists':
                    artists = fonts[i + 1].text
            images.append(Image(extract_filename_from_url(url), caption, headline, artists))
    save_list_of_objects_to_json(images)


if __name__ == '__main__':
    main()
