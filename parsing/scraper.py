import pickle
import re
import urllib.request
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


class Image:
    def __init__(self, filename, caption, headline, artists):
        self.filename = filename
        self.url = 'http://files.krishna.com/ImageFolio42_files/gallery-images/Krishna_Conscious_Paintings/' + filename
        self.caption = caption
        self.headline = headline
        self.artists = artists

    def save(self):
        urllib.request.urlretrieve(self.url, f"Images Info/{self.filename}")
        image_info_str = ''
        image_info_str += f'Caption: {self.caption}\n'
        image_info_str += f'Headline: {self.headline}\n'
        image_info_str += f'Artists: {self.artists}'
        with open(f'Images Info/{self.filename[:-4]}.txt', 'w', encoding="utf-8") as f:
            f.write(image_info_str)


def main():
    urls = get_urls()
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
            Image(extract_filename_from_url(url), caption, headline, artists).save()


if __name__ == '__main__':
    main()
