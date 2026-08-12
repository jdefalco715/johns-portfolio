import requests
from bs4 import BeautifulSoup
from collections import defaultdict


def decode_secret_message(doc_url):
    response = requests.get(doc_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    table = soup.find('table')
    rows = table.find_all('tr')[1:]  # Skip header row
    
    grid = defaultdict(dict)
    max_x = 0
    max_y = 0
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            x = int(cells[0].get_text().strip())
            char = cells[1].get_text().strip()
            y = int(cells[2].get_text().strip())
            
            grid[y][x] = char
            max_x = max(max_x, x)
            max_y = max(max_y, y)
    
    for y in range(max_y + 1):
        line = ''.join(grid[y].get(x, ' ') for x in range(max_x + 1))
        print(line)


if __name__ == "__main__":
    url = "https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub"
    decode_secret_message(url)
