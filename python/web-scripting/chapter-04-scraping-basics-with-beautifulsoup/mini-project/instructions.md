# Instructions — Headline Extractor

1. Create a file named `headline_extractor.py`.
2. Add a small HTML string inside the file with several repeated headline elements.
3. Parse the HTML with BeautifulSoup using `html.parser`.
4. Select the headline elements with a class like `.headline`.
5. Print each headline on its own line.
6. Skip any empty text so your output stays clean.

## Suggested Build Order

1. Get BeautifulSoup parsing the HTML first.
2. Print the list of matching elements once to confirm your selector works.
3. Replace that with cleaner text output.
4. Handle empty text values.
5. Add the file-saving stretch goal only after the printed output looks right.
