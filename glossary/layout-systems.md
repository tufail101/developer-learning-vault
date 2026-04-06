# Layout Systems

## Responsive Design (`responsive-design`)

Definition:
Responsive design is the practice of building interfaces that adapt to different screen sizes and device contexts.

Analogy:
It is like furniture that can fold, stack, or rearrange itself depending on the size of the room.

Code example:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

Why this matters:
Users will view your site on phones, tablets, laptops, and large monitors. Responsive design helps your layout stay readable and usable instead of breaking on smaller screens.

Learn more:
[chapter-06-responsive-design](../css/chapter-06-responsive-design/)

## Flexbox (`flexbox`)

Definition:
Flexbox is a one-dimensional CSS layout system for arranging items in a row or column.

Analogy:
It is like lining up chairs in a room and deciding how much space goes between them and how they should wrap.

Code example:

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

Why this matters:
Flexbox is perfect for nav bars, card rows, button groups, and vertical stacks. It makes alignment much easier than older layout hacks.

Learn more:
[chapter-14-flexbox-ui](../css/chapter-14-flexbox-ui/)

## Grid (`grid`)

Definition:
CSS Grid is a two-dimensional layout system for arranging elements in rows and columns at the same time.

Analogy:
It is like placing items on a sheet of graph paper where you control both the rows and the columns.

Code example:

```css
.dashboard {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1rem;
}
```

Why this matters:
Grid is especially useful for dashboards, galleries, and page-level layouts where both width and height relationships matter. It gives you more structural control than Flexbox for complex layouts.

Learn more:
[chapter-15-grid-ui](../css/chapter-15-grid-ui/)
