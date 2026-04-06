# Scraping Basics With BeautifulSoup

BeautifulSoup helps you read HTML and pull out the pieces you care about. If JSON is neat and labeled, HTML is more like a full page with headings, links, lists, wrappers, and clutter mixed together. Scraping means searching through that page structure and extracting only what you need.

This is different from using an API. With an API, the data is usually shaped for machines already. With scraping, you are reading a page that was mainly built for people.

## Real-World Analogy

Think about opening a newspaper and clipping only the headlines you want.
You do not keep the ads.
You do not keep the weather box.
You do not keep the page number.

You scan the page and pull out only the parts that matter to you.
That is what scraping feels like.

## First Setup

If you do not have BeautifulSoup installed yet:

```bash
pip install beautifulsoup4
```

Then run the example like this:

```bash
python3 example.py
```

## What BeautifulSoup Actually Does

BeautifulSoup turns HTML text into a structure you can search.

```py
from bs4 import BeautifulSoup

html = "<h1>News</h1><p>Today was busy.</p>"
soup = BeautifulSoup(html, "html.parser")

print(soup.h1.text)
```

Once the HTML is parsed, you can:

- grab one tag like `soup.h1`
- search with selectors like `soup.select(".post")`
- read text with `.get_text()`
- read attributes like `link["href"]`

## A Small Real Example

```py
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
```

That selector, `.post`, means:
"Find every element with the class `post`."

This is one reason BeautifulSoup feels friendly.
You can start with HTML you already know from the frontend chapters.

## What Makes Scraping Harder Than JSON

JSON usually has a cleaner shape.
HTML is messier.

The parts you want might be:

- nested inside several wrappers
- missing on some pages
- named with classes that change later
- mixed in with text you do not want

That is why scraping often breaks when a site redesigns its layout.
Your code may still run.
It just stops finding the right elements.

## The Mistakes People Make Here

- scraping a live site before practicing on a small local HTML string first
- using a selector that is too specific, then watching it break as soon as the HTML changes a little
- calling `.text` on something that was not found, which causes an error because the element is `None`
- forgetting that some sites do not want to be scraped and have rules about automated access
- treating scraping like it will always be as clean as parsing JSON

## One Important Reality Check

Scraping is useful.
It is also fragile.

If a website offers a real API, that is usually easier and more stable.
Scraping is often what you do when the data is in HTML and no API is available for your use case.

## What To Try Right Now

Run the example.
Then add a third `<li class="post">` item and see it appear.
After that, change the class name on one item so it no longer matches `.post`.
That tiny test shows you exactly how selectors work.

## What Comes After This

The next chapter is **Mini Project Data Fetcher**.
That chapter combines the ideas from requests, JSON, and outside data into one small tool.
