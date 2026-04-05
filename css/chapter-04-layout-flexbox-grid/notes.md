# Chapter 4: Layout With Flexbox And Grid

## Why Layout Matters

Layout decides where elements sit, how they align, and how much space they get.
This is where CSS starts turning plain pages into real interfaces.

Good layout helps a UI feel:

- organized
- balanced
- easy to scan
- ready for responsive behavior

## Visual Way To Think About It

```text
Flexbox:
[Logo] [Nav] [Button]

Grid:
[Card 1] [Card 2] [Card 3]
[Card 4] [Card 5] [Card 6]
```

## Flexbox

Flexbox is best when content mainly moves in one direction, either a row or a column.

### Real-World Analogy

Flexbox is like arranging people in a line for a photo.
You care about the main direction first.

### Example: Navbar Row

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Example: Vertical Stack

```css
.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

## Grid

Grid is best when you need rows and columns together.

### Real-World Analogy

Grid is like arranging products on store shelves.
You want a clean system across both directions.

### Example: Card Grid

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### Example: Flexible UI Grid

```css
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
```

## Best Practices

- use Flexbox for navbars, button rows, card content, and alignment
- use Grid for card galleries, feature sections, and dashboard areas
- prefer `gap` over random margins between children
- test the layout early at different widths

## Common Mistakes

- using Flexbox for everything even when Grid is clearer
- forcing equal spacing with awkward margins
- ignoring what happens when content gets wider or taller

## Professional Frontend Tip

When building a UI, many developers start by asking:

- is this one-dimensional or two-dimensional?
- does this layout need alignment or structure?

That question often tells you whether Flexbox or Grid is the better tool.

## Tailwind Preparation

This lesson maps directly to utility-first thinking later:

- `display: flex` becomes flex utilities
- `justify-content` becomes justify utilities
- `align-items` becomes items utilities
- `grid-template-columns` becomes grid column utilities

If you understand the CSS concept first, Tailwind will feel much easier.
