# Chapter 3: Page Structure

## Why Structure Matters

If you throw all content randomly into a page, it becomes hard to read and hard to maintain.

A good HTML page has a predictable structure. That helps:

- browsers render it correctly
- developers read it quickly
- assistive tools understand it better

## Real-World Analogy

When an architect designs a house, they do not begin with decoration. They begin with a plan: entrance, rooms, hallways, and exits.

HTML page structure works the same way.

## Standard HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
    </header>

    <main>
      <p>Main content goes here.</p>
    </main>

    <footer>
      <p>Copyright 2026</p>
    </footer>
  </body>
</html>
```

## Important Pieces

### `meta charset="UTF-8"`

This tells the browser how to read text properly.

### `meta name="viewport"`

This helps pages behave better on phones and smaller screens.

### `title`

This text appears in the browser tab and helps with usability and SEO.

## Best Practices

- always add a meaningful title
- use indentation so structure is easy to read
- keep related content grouped together
- think in sections, not random tags

## Mentor Advice

When your file starts feeling messy, step back and ask:

"Where does this content belong?"

That question often leads you to a much cleaner structure.
