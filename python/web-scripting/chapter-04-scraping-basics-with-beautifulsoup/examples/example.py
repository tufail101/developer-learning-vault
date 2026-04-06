"""This example parses a small HTML string with BeautifulSoup."""

from bs4 import BeautifulSoup

sample_html = """
<ul>
  <li class="post">First post</li>
  <li class="post">Second post</li>
</ul>
"""

soup = BeautifulSoup(sample_html, "html.parser")
items = soup.select(".post")

for item in items:
    print(item.get_text(strip=True))
