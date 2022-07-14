import pickle
from typing import List

import requests
from bs4 import BeautifulSoup

import scraper


def write_urls(urls_list: List[str]) -> None:
    """
    Write urls to urls.pickle file
    @param urls_list: list with valid urls
    @return: None
    """
    with open('urls.pickle', 'wb') as f:
        pickle.dump(urls_list, f)


def main():
    url_start = 'http://files.krishna.com/cgi-bin/ImageFolio42/imageFolio.cgi?direct=Krishna_Conscious_Paintings&img='
    url_end = 0
    links = list()
    while True:
        url = url_start + str(url_end)
        page = requests.get(url)
        bs = BeautifulSoup(page.text, 'html.parser')
        links_in_page = [el['href'] for el in bs.findAll('a', {'target': '_self'})]
        if not links_in_page:
            break
        links += links_in_page
        url_end += 20

    if links != scraper.get_urls():
        write_urls(links)
        scraper.main()


if __name__ == '__main__':
    main()
