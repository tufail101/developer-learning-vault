# CSS Cheatsheet

## Rule Syntax

```css
selector {
  property: value;
}
```

Example:

```css
.card {
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
}
```

## Selectors

### Class, ID, And Element Selectors

```css
p {
  color: #333;
}

.button {
  background: black;
  color: white;
}

#site-header {
  border-bottom: 1px solid #ddd;
}
```

Use case guide:

- Use element selectors for broad defaults.
- Use classes for reusable styling.
- Use IDs sparingly for unique hooks.

Gotcha:
- Avoid styling mostly with IDs. They create higher specificity and are harder to override later.

### Attribute Selectors

```css
input[type="email"] {
  border-color: royalblue;
}

a[target="_blank"] {
  text-decoration: underline;
}
```

### Pseudo-Classes

```css
a:hover {
  color: tomato;
}

button:focus {
  outline: 3px solid orange;
}

li:first-child {
  font-weight: bold;
}
```

Pseudo-classes target states or positions.

### Pseudo-Elements

```css
p::first-line {
  font-weight: bold;
}

.badge::after {
  content: "New";
}
```

Pseudo-elements style a virtual part of an element.

## Box Model

Every element is made of:

- content
- padding
- border
- margin

```css
.box {
  width: 200px;
  padding: 1rem;
  border: 2px solid #222;
  margin: 1.5rem;
}
```

### Common Shorthand

```css
margin: 1rem;
margin: 1rem 2rem;
margin: 1rem 2rem 3rem;
margin: 1rem 2rem 3rem 4rem;

padding: 0.5rem 1rem;

border: 1px solid #ccc;
```

Order for 4-value shorthand:

- top
- right
- bottom
- left

Gotcha:
- `width` does not include padding and border unless you set `box-sizing: border-box`.

Recommended reset:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Flexbox

Use Flexbox for one-dimensional layouts:

- row layouts
- nav bars
- button groups
- vertical stacks

### Container Properties

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

### Item Properties

```css
.item {
  flex: 1;
  align-self: stretch;
  order: 2;
}
```

Side-by-side quick reference:

- Container: `display`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`
- Item: `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`

Gotcha:
- `justify-content` works on the main axis.
- `align-items` works on the cross axis.
- Those axes change when `flex-direction` changes.

## Grid

Use Grid for two-dimensional layouts:

- page layout
- card grids
- dashboards
- galleries

### Basic Grid Template Syntax

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}
```

### Responsive Columns With `repeat()`

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
```

### `auto-fit` Vs `auto-fill`

```css
.cards-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.cards-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Difference:

- `auto-fit` collapses empty tracks and stretches existing items.
- `auto-fill` keeps the empty tracks, which can leave unused space.

### Named Areas

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar {
  grid-area: sidebar;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}
```

Gotcha:
- Grid is powerful, but do not overcomplicate simple row layouts. Sometimes Flexbox is the clearer choice.

## CSS Variables

Declare variables once, reuse them everywhere:

```css
:root {
  --color-bg: #f7f5ef;
  --color-text: #1f1f1f;
  --color-accent: #c44d34;
  --space-md: 1rem;
  --radius-lg: 1rem;
}
```

Use them with `var()`:

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
}

.button {
  background: var(--color-accent);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
}
```

Gotcha:
- Variable names are case-sensitive.
- Variables do not work unless you wrap them with `var(--name)`.

## Media Queries

Use media queries to adjust layout for different screen sizes:

```css
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}
```

Common pattern:

```css
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

Gotcha:
- Start with a clear base style first. Media queries should adjust the base, not replace a messy default.

## Animations

### Transition For Small State Changes

```css
.button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #222;
  transform: translateY(-2px);
}
```

### `@keyframes` Example

```css
@keyframes float-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: float-up 0.6s ease forwards;
}
```

Gotcha:
- Animate `transform` and `opacity` when possible. They are usually smoother than animating layout-heavy properties like `width` or `top`.

## Positioning And z-index

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.tooltip {
  position: absolute;
  z-index: 10;
}
```

### Stacking Context Gotcha

`z-index` only makes sense inside stacking contexts.

This can surprise you:

```css
.parent {
  position: relative;
  z-index: 1;
}

.child {
  position: absolute;
  z-index: 9999;
}
```

If another element is in a higher stacking context,
the child may still appear underneath it.

Common stacking-context creators include:

- positioned elements with `z-index`
- `opacity` less than `1`
- `transform`
- `filter`

If `z-index` feels broken, inspect parent stacking contexts first.

## Common Layout Snippets

### Center Something Quickly

```css
.center {
  display: grid;
  place-items: center;
}
```

### Responsive Card Grid

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
```

### Inline Button Group

```css
.actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
```

## Common Mistakes

- fighting specificity instead of simplifying selectors
- using IDs for most styling
- forgetting `box-sizing: border-box`
- choosing Grid when Flexbox is simpler
- overusing `!important`
- expecting `z-index` to fix every overlap problem
