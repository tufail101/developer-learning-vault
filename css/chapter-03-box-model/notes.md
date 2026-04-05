# Chapter 3: Box Model

## The Big Idea

Every HTML element behaves like a box.

That box has four important parts:

- content
- padding
- border
- margin

## Real-World Analogy

Imagine sending a gift:

- content is the gift
- padding is the soft wrapping around it
- border is the box itself
- margin is the space between this box and other boxes

## Example

```css
.box {
  padding: 16px;
  border: 2px solid #111827;
  margin: 24px;
}
```

## Margin Vs Padding

- padding adds space inside the element
- margin adds space outside the element

## Visual Explanation

```text
[ margin [ border [ padding [ content ] ] ] ]
```

## UI Example

```css
.pricing-card {
  padding: 24px;
  margin-top: 24px;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
}
```

## Borders

Borders help define shape and separation.

```css
.button {
  border: 1px solid #0f172a;
}
```

## Best Practices

- use padding to make content comfortable
- use margin to separate sections
- do not guess blindly, inspect in dev tools
- keep spacing consistent

## Common Mistakes

- confusing margin with padding
- adding random spacing values everywhere
- forgetting that borders affect the visual size

## Professional Frontend Tip

Many polished interfaces feel good simply because spacing is consistent.
The box model is where that consistency begins.

## Tailwind Preparation

Tailwind uses separate utilities for margin and padding.
If you understand the difference deeply here, those utilities become much easier to use correctly.
