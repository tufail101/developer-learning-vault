# Practice — Scraping Basics With BeautifulSoup

## Exercise 1
Create a short HTML string with one `<h1>` and one `<p>`.
Parse it with BeautifulSoup and print only the heading text.

## Exercise 2
Create an HTML string with three `<li class="post">` items.
Use `soup.select(".post")` and print each item in a loop.

## Exercise 3
Create an HTML string with one `<a>` tag.
Parse it and print only the `href` value.
Then print the visible link text too.

## Done Checklist
- [ ] My first script prints only the heading text, not the whole HTML string
- [ ] My second script finds all three `.post` items, not just the first one
- [ ] My third script prints both the `href` and the visible link text
- [ ] I changed one class name once and saw how that affected my selector
