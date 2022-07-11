import sys

import requests
from bs4 import BeautifulSoup
import pickle
from typing import List


def create_filename_by_number(number: int) -> str:
    """
    Create image filename by number (TA0001.jpg, TA0002.jpg, ..., TA0111.jpg etc.)
    @param number: number from filename will be created
    @return: filename in string format (TA0001.jpg, TA0002.jpg, ..., TA0111.jpg etc.)
    """
    return 'TA' + ('0' * (4 - len(str(number)))) + str(number) + '.jpg'


def extract_filename_from_url(url: str) -> str:
    """
    Extract filename from url
    @param url: url where filename must be extracted from
    @return: filename (TA0001.jpg, TA0002.jpg, ..., TA0111.jpg etc.)
    """
    return url.split('&')[-3].split('=')[1]


def extract_number_from_filename(filename: str) -> int:
    """
    Extract number from filename
    @param filename: filename where number must be extracted from (TA0001.jpg, TA0002.jpg, ..., TA0111.jpg etc.)
    @return: extracted number
    """
    return int(filename[2:].split('.')[0])


def write_urls(urls_list: List[str]) -> None:
    """
    Write urls to urls.pickle file
    @param urls_list: list with valid urls
    @return: None
    """
    with open('urls.pickle', 'wb') as f:
        pickle.dump(urls_list, f)


def get_urls() -> List[str]:
    """
    Get urls from urls.pickle file
    @return: list of urls
    """
    with open('urls.pickle', 'rb') as f:
        return pickle.load(f)


if __name__ == '__main__':
    urls = list()
    url_start = 'http://files.krishna.com/cgi-bin/ImageFolio42/imageFolio.cgi?action=view&link=Krishna_Conscious_Paintings&image='
    url_end = '&img=&tt='
    url = url_start + 'TA0001.jpg' + url_end
    while True:
        page = requests.get(url)
        bs = BeautifulSoup(page.text, 'html.parser')
        filename = extract_filename_from_url(url)
        if bs.find('img', {'alt': filename}):
            urls.append(url)
            sys.stdout.write(f'\rFind valid URLs: {len(urls)}')

        try:
            next_url = bs.find('a', {'alt': 'View Next Page'})['href']
            if extract_filename_from_url(next_url) == 'TA0001.jpg':
                break
        except TypeError:
            next_url = url_start + create_filename_by_number(extract_number_from_filename(filename) + 1) + url_end

        url = next_url

    if urls != get_urls():
        print('\nSaved new links!')
        write_urls(urls)
    else:
        print('\nNo changes were found!')
