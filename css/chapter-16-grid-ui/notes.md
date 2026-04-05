# Chapter 16: Grid For UI Layout

## Why Grid Is Powerful

CSS Grid is one of the best tools for building card sections, dashboards, pricing layouts, and feature blocks.

Use Grid when the interface needs a clear row-and-column structure.

## Visual Explanation

```text
[Card 1] [Card 2] [Card 3]
[Card 4] [Card 5] [Card 6]
```

That is exactly the kind of structure Grid handles well.

## Core Example

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

## Responsive Grid Example

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
```

## Real-World Analogy

Grid is like arranging items in a neat display shelf.
You decide how many columns exist, how much spacing sits between them, and how items flow.

## Why It Works For UI

Grid is excellent for:

- pricing tables
- blog card layouts
- dashboard widgets
- feature grids
- gallery sections

## Best Practices

- use `gap` for spacing
- use `minmax()` for flexible columns
- choose column counts based on readability, not just symmetry

## Common Mistakes

- forcing too many columns into a narrow space
- ignoring card height differences
- using Grid when the content really only needs a simple flex row

## Professional Frontend Tip

One of the cleanest UI tricks is using:

`repeat(auto-fit, minmax(...))`

It gives you a responsive card grid with much less effort.

## Tailwind Preparation

Later this connects directly to grid utilities, column utilities, and gap utilities.
The utility names will make more sense once you already understand what the CSS is doing.
