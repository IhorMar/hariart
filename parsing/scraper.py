import sys

import requests
from bs4 import BeautifulSoup
import urllib.request

from crawler import get_urls, extract_filename_from_url


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


if __name__ == '__main__':
    urls = get_urls()
    for idx, url in enumerate(urls):
        page = requests.get(url)
        bs = BeautifulSoup(page.text, 'html.parser')
        filename = extract_filename_from_url(url)
        caption, headline, artists = 'No caption', 'No headline', 'No artists'
        fonts = bs.findAll('font')
        for i, font in enumerate(fonts):
            if font.text == 'Caption':
                caption = fonts[i + 1].text
            if font.text == 'Headline':
                headline = fonts[i + 1].text
            if font.text == 'Artists':
                artists = fonts[i + 1].text

        Image(extract_filename_from_url(url), caption, headline, artists).save()
        sys.stdout.write(f'\r{idx + 1} of {len(urls)} URLs were processed')
