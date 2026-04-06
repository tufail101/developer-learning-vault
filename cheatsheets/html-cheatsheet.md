# HTML Cheatsheet

## Document Boilerplate

Use this as your starting point for most pages:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Short page description for search engines and link previews."
    />
    <title>Page Title</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header></header>
    <main></main>
    <script src="./script.js"></script>
  </body>
</html>
```

Gotcha:
- `lang="en"` helps screen readers and search engines.
- The viewport meta tag is required for proper mobile scaling.
- Put visible content inside `<body>`, not inside `<head>`.

## Semantic Page Structure

Use semantic tags based on meaning, not appearance:

```html
<header>Site header, logo, top navigation</header>
<nav>Main navigation links</nav>
<main>Main page content, only once per page</main>
<section>A grouped topic inside the page</section>
<article>Self-contained content like a blog post or card</article>
<aside>Sidebar, related links, ads, callouts</aside>
<footer>Page footer or section footer</footer>
```

When to use each:

- Use `<header>` for intro content for a page or section.
- Use `<nav>` for a group of major navigation links.
- Use `<main>` once for the primary page content.
- Use `<section>` when content belongs together under a theme.
- Use `<article>` when content could stand on its own.
- Use `<aside>` for supporting content that is not the main focus.
- Use `<footer>` for closing content, contact info, copyright, links.

Gotcha:
- Do not use `<section>` just to create spacing. If it has no heading or meaningful grouping, a `<div>` may be more honest.

## Text And Content Structure

```html
<h1>Main page heading</h1>
<h2>Section heading</h2>
<p>Paragraph text</p>
<strong>Important text</strong>
<em>Emphasized text</em>
<blockquote>Quoted text from another source</blockquote>
<code>const total = 5;</code>
<pre><code>console.log("formatted code");</code></pre>
```

Gotcha:
- Use heading levels in order. Do not jump from `<h1>` to `<h4>` just because the size looks nice.
- Use CSS for visual size, not the wrong heading tag.

## Links And Media

```html
<a href="/about">Internal link</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External link
</a>

<img src="./images/profile.jpg" alt="Portrait of Asha smiling" />

<video controls src="./media/intro.mp4"></video>
<audio controls src="./media/theme.mp3"></audio>
```

Gotcha:
- Always give `<img>` meaningful `alt` text unless the image is decorative.
- If the image is purely decorative, use `alt=""`.
- When using `target="_blank"`, include `rel="noopener noreferrer"` for safety.

## Lists

```html
<ul>
  <li>Unordered item</li>
  <li>Another item</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>Markup language for page structure.</dd>
</dl>
```

Use case guide:

- Use `<ul>` when order does not matter.
- Use `<ol>` when order matters.
- Use `<dl>` for term-definition or label-value style content.

## Forms

### Basic Form Structure

```html
<form action="/submit" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="5"></textarea>

  <button type="submit">Send</button>
</form>
```

Gotcha:
- Match `for="email"` with `id="email"` so clicking the label focuses the input.
- `name` matters for form submission. `id` alone is not enough.

### Common Form Elements

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" min="1" max="10" />
<input type="checkbox" />
<input type="radio" name="plan" value="pro" />
<input type="file" />
<textarea rows="4" cols="30"></textarea>

<select name="country">
  <option value="">Choose a country</option>
  <option value="in">India</option>
  <option value="us">United States</option>
</select>

<button type="button">Click Me</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

### Useful Form Attributes

```html
<input
  type="text"
  name="username"
  placeholder="Enter username"
  required
  minlength="3"
  maxlength="20"
  autocomplete="username"
/>
```

Common attributes:

- `required`
- `placeholder`
- `value`
- `name`
- `id`
- `min`
- `max`
- `minlength`
- `maxlength`
- `checked`
- `disabled`
- `readonly`
- `autocomplete`

Gotcha:
- Placeholder text is not a label. Keep a real `<label>`.

## Accessibility Quick Reference

### `alt`

```html
<img src="./chart.png" alt="Bar chart showing sales growing from January to March" />
```

Use `alt` to describe the useful meaning of an image.

### `aria-label`

```html
<button aria-label="Close modal">X</button>
```

Use this when visible text is missing or unclear.

### `role`

```html
<div role="alert">Payment failed. Try again.</div>
```

Use ARIA roles carefully and only when native HTML does not already provide the meaning you need.

Gotcha:
- Native elements are usually better than adding ARIA manually. A real `<button>` is better than a clickable `<div role="button">`.

## Meta Tags For SEO And Responsive Design

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta
  name="description"
  content="Learn HTML, CSS, JavaScript, and backend development step by step."
/>
<meta name="robots" content="index, follow" />
```

Useful patterns:

- `charset` sets text encoding.
- `viewport` makes responsive layouts behave correctly on mobile.
- `description` helps search engines and previews.
- `robots` gives indexing instructions.

Gotcha:
- A `<title>` is still required. Meta description does not replace it.

## Link Tag Placement Rules

CSS belongs in the document head:

```html
<head>
  <link rel="stylesheet" href="./style.css" />
</head>
```

Why:
- The browser can load styles before painting the page.
- This reduces flashes of unstyled content.

## Script Tag Placement Rules

Most beginner projects should load scripts just before `</body>`:

```html
<body>
  <main></main>
  <script src="./script.js"></script>
</body>
```

If you load a script in `<head>`, use `defer`:

```html
<head>
  <script src="./script.js" defer></script>
</head>
```

Gotcha:
- If you place a script in `<head>` without `defer`, it may run before the DOM exists.

## Common Mistakes

- forgetting `alt` on informative images
- using headings for visual size instead of structure
- using `<div>` for everything and losing semantic meaning
- forgetting `name` on form fields
- putting scripts too early without `defer`
- relying on placeholder text instead of labels

## Fast Starter Template

```html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
  </nav>
</header>

<main>
  <section>
    <h1>Learn Web Development</h1>
    <p>Build your skills step by step.</p>
    <button>Start Now</button>
  </section>
  <section>
    <h2>Topics</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </section>
</main>

<footer>
  <p>&copy; 2026 Web Dev Learning System</p>
</footer>
```
