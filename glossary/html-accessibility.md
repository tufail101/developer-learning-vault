# Semantic HTML And Accessibility

## Semantic HTML (`semantic-html`)

Definition:
Semantic HTML means using HTML tags based on what the content means, not just how you want it to look.

Analogy:
It is like labeling boxes in a house as "books," "clothes," or "kitchen" instead of just writing "stuff."

Code example:

```html
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>My First Blog Post</h1>
    <p>Hello world.</p>
  </article>
</main>
```

Why this matters:
Semantic HTML helps browsers, search engines, and assistive technologies understand your page structure. It also makes your code easier for humans to read and maintain.

Learn more:
[chapter-07-semantic-html](../html/chapter-07-semantic-html/)

## Accessibility (`accessibility`)

Definition:
Accessibility is the practice of building websites that more people can use, including people with disabilities.

Analogy:
It is like designing a building with ramps, clear signs, and elevators so more people can move through it comfortably.

Code example:

```html
<label for="email">Email</label>
<input id="email" type="email" />

<button aria-label="Close menu">X</button>
<img src="./chart.png" alt="Sales rising from January to March" />
```

Why this matters:
Accessible sites are more usable, more inclusive, and often better structured overall. Accessibility also improves keyboard support, screen reader support, and clarity for many users, not just one group.

Learn more:
[chapter-08-accessibility](../html/chapter-08-accessibility/)
