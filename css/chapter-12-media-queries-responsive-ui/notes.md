# Chapter 13: Media Queries And Responsive UI

## What A Media Query Does

A media query lets CSS change styles when the screen matches certain conditions.

This is one of the main tools used for responsive design.

## Example

```css
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

## Visual Explanation

```text
Wide screen:
[Text      ][Image]

Narrow screen:
[Text]
[Image]
```

## Why This Matters In UI

Many UI sections feel great on desktop but cramped on mobile.
Media queries let you adapt things like:

- column count
- card spacing
- image size
- navigation layout
- text scale

## Another Example

```css
@media (max-width: 640px) {
  .nav-links {
    flex-direction: column;
  }
}
```

## Real-World Analogy

It is like having different clothing choices for different weather.
When the conditions change, the styling changes too.

## Best Practices

- keep breakpoints simple
- test real screen widths
- adjust layout before over-adjusting tiny details

## Common Mistakes

- adding too many breakpoints
- only checking one phone width
- fixing problems with random values instead of improving the layout

## Professional Frontend Tip

Treat breakpoints like design decisions, not emergency fixes.
Each breakpoint should solve a real layout problem.

## Tailwind Preparation

Media queries later show up as breakpoint prefixes in utility-first workflows.
If you understand the responsive idea first, those prefixes become much easier to reason about.
