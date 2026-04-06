"""This example parses a small HTML string and extracts repeated items with BeautifulSoup."""

from bs4 import BeautifulSoup

sample_html = """
<ul>
  <li class="post">First post</li>
  <li class="post">Second post</li>
</ul>
"""

soup = BeautifulSoup(sample_html, "html.parser")
items = soup.select(".post")

print("Headlines found:")

for item in items:
    print(item.get_text(strip=True))

print("\nRun this file with: python3 example.py")
