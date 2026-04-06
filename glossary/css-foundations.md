# CSS Foundations

## CSS Specificity (`css-specificity`)

Definition:
CSS specificity is the rule system the browser uses to decide which selector wins when multiple styles target the same element.

Analogy:
It is like different levels of authority in a workplace where some instructions outrank others.

Code example:

```css
p {
  color: blue;
}

.intro {
  color: green;
}

#hero-text {
  color: red;
}
```

Why this matters:
Specificity explains why a style sometimes refuses to change even when your new rule looks correct. Understanding it helps you avoid messy overrides and overuse of `!important`.

Learn more:
[chapter-02-selectors](../css/chapter-02-selectors/)

## Box Model (`box-model`)

Definition:
The box model is the way the browser treats every element as content surrounded by padding, border, and margin.

Analogy:
It is like a framed picture with the artwork in the middle, space around it, a border, and room between it and other frames.

Code example:

```css
.card {
  width: 240px;
  padding: 1rem;
  border: 2px solid #222;
  margin: 1.5rem;
}
```

Why this matters:
The box model affects spacing, sizing, alignment, and layout bugs all over a page. If a layout feels off, the box model is one of the first places to look.

Learn more:
[chapter-03-box-model](../css/chapter-03-box-model/)

## CSS Variable (`css-variable`)

Definition:
A CSS variable is a reusable named value defined with `--name` and accessed with `var()`.

Analogy:
It is like writing paint codes on a shared design sheet so every room uses the same exact color.

Code example:

```css
:root {
  --color-accent: #c44d34;
}

.button {
  background: var(--color-accent);
}
```

Why this matters:
CSS variables make themes, design systems, and repeated styles easier to manage. They reduce duplication and make large visual changes much faster.

Learn more:
[chapter-14-css-variables](../css/chapter-14-css-variables/)

## Media Query (`media-query`)

Definition:
A media query is a CSS rule that applies styles only when the screen or device matches a condition.

Analogy:
It is like having different seating plans for a small room and a large hall.

Code example:

```css
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

Why this matters:
Media queries are one of the main tools for making layouts adapt to phones, tablets, and desktops. They let one codebase respond to different screen sizes instead of building separate pages.

Learn more:
[chapter-13-media-queries-responsive-ui](../css/chapter-13-media-queries-responsive-ui/)
