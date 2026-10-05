import requests
from bs4 import BeautifulSoup


def print_secret_message(url):
    # grab the published doc
    res = requests.get(url, timeout=15)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "html.parser")
    table = soup.find("table")
    if table is None:
        print("No table found in the document")
        return

    points = {}
    max_x = 0
    max_y = 0

    for row in table.find_all("tr"):
        cells = [c.get_text(strip=True) for c in row.find_all(["td", "th"])]
        if len(cells) < 3:
            continue

        # skip the header row (x-coordinate | Character | y-coordinate)
        if not cells[0].isdigit():
            continue

        x = int(cells[0])
        ch = cells[1]
        y = int(cells[2])

        points[(x, y)] = ch
        max_x = max(max_x, x)
        max_y = max(max_y, y)

    # (0, 0) is the bottom left corner, so y grows upward.
    # That means I print from the highest y down to 0.
    for y in range(max_y, -1, -1):
        line = ""
        for x in range(max_x + 1):
            line += points.get((x, y), " ")
        print(line)


if __name__ == "__main__":
    url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"
    print_secret_message(url)