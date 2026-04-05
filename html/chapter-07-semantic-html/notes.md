# Chapter 7: Semantic HTML

## What Semantic Means

Semantic HTML means using tags that describe the meaning of the content.

Instead of writing generic containers everywhere, we use tags like:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

## Real-World Analogy

If every room in a building were labeled "room," it would be confusing.
If rooms are labeled "kitchen," "office," and "meeting room," everyone understands the space better.

Semantic HTML gives that kind of clarity to webpages.

## Example

```html
<header>
  <h1>Daily Coding News</h1>
</header>

<main>
  <article>
    <h2>Why Semantic HTML Matters</h2>
    <p>It makes pages easier to read and understand.</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>
```

## Why It Matters

- developers understand the page faster
- screen readers get better structure
- search engines understand content more clearly
- your code becomes easier to maintain

## Best Practices

- use `main` once for the main page content
- use `nav` for groups of navigation links
- use `article` for self-contained content
- avoid using `div` when a better semantic tag exists

## Mentor Tip

You do not need to completely avoid `div`. It still has its place. The goal is simply to choose semantic tags when they communicate meaning better.
