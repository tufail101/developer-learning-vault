# Chapter 12: Display And Positioning

## Display

The `display` property controls how an element behaves in layout.

Common values:

- `block`
- `inline`
- `inline-block`
- `none`
- `flex`
- `grid`

## Positioning

Positioning controls where an element sits relative to normal page flow.

Common values:

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

## Real-World Analogy

Display is like deciding whether furniture takes a whole wall, sits inline, or becomes part of a grid.
Positioning is like deciding whether something stays in its normal place, sticks to the screen, or floats over other content.

## Example

```css
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

## Visual Explanation

```text
Normal flow:
[Card]
[Card]
[Card]

Absolute badge inside a card:
[Card         New]
```

## Why This Matters In UI

Many modern UI patterns depend on these ideas:

- hidden menus
- badges on cards
- sticky headers
- overlays and notifications

## Extra Example

```css
.header {
  position: sticky;
  top: 0;
}
```

## Best Practices

- understand normal document flow before positioning things
- use `position: absolute` carefully
- prefer layout tools first, positioning second

## Common Mistakes

- using positioning to solve every layout problem
- forgetting that absolutely positioned items need a useful parent context
- hiding content with `display: none` without thinking about usability

## Professional Frontend Tip

Good frontend developers usually reach for layout tools first and positioning second.
That keeps the UI more flexible and easier to maintain.

## Tailwind Preparation

Later you may see utilities for `hidden`, `block`, `inline-block`, `absolute`, `relative`, `sticky`, and `fixed`.
Those utilities make much more sense when you already understand document flow.
