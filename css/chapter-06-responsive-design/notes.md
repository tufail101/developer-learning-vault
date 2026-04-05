# Chapter 6: Responsive Design

## What Responsive Design Means

Responsive design means a page adapts to different screen sizes.

A page should not feel broken just because someone opens it on:

- a phone
- a tablet
- a laptop

## Real-World Analogy

Think about packing a travel bag.
You arrange things differently depending on the trip and the bag size.
Responsive design works the same way.

## Example

```css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

## Visual Explanation

```text
Desktop:
[Card 1] [Card 2] [Card 3]

Tablet:
[Card 1] [Card 2]
[Card 3]

Mobile:
[Card 1]
[Card 2]
[Card 3]
```

## Why This Matters For UI

Modern UI is not only about looking good on a laptop.
It must still feel clean when:

- the nav gets narrower
- cards stack
- text wraps
- images shrink

## UI Example

```css
.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
}

@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
```

## Responsive Habits

- let layouts shrink gracefully
- test smaller screens often
- keep text readable
- avoid horizontal scrolling

## Common Mistakes

- designing only for large screens
- forgetting to test on narrow widths
- leaving buttons or text too small on mobile

## Professional Frontend Tip

A lot of UI issues are easier to solve if you design mobile behavior early instead of "fixing it later."

## Tailwind Preparation

Responsive design later becomes breakpoint-based utilities.
If you understand when and why a layout should change, the utility syntax becomes much easier to use correctly.
