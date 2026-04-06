# Chapter 14: CSS Variables

## What CSS Variables Are

CSS variables let you store reusable values like colors, spacing, or shadows.

They are often written in `:root` so the whole page can reuse them.

## Example

```css
:root {
  --brand: #2563eb;
  --surface: #ffffff;
}

.button {
  background: var(--brand);
}
```

## Visual Explanation

```text
Without variables:
blue here
blue there
blue somewhere else

With variables:
--brand controls all of them
```

## UI Example

```css
:root {
  --brand: #2563eb;
  --text: #0f172a;
  --surface: #ffffff;
  --radius-lg: 20px;
}

.card {
  background: var(--surface);
  color: var(--text);
  border-radius: var(--radius-lg);
}
```

## Real-World Analogy

Think of variables like labeled jars in a kitchen.
Instead of searching for the same ingredient again and again, you store it once and reuse it.

## Why They Help

- reduce repetition
- make updates faster
- help keep design consistent

## Best Practices

- use clear variable names
- store repeated values, not every value
- keep the main shared variables near the top of the file

## Common Mistakes

- giving variables confusing names
- using too many unnecessary variables
- forgetting that variables should improve clarity, not reduce it

## Professional Frontend Tip

Variables are especially useful when you start building themes, UI kits, or larger projects with repeated design tokens.

## Tailwind Preparation

If you later use utility-first frameworks, variables still matter.
They are often part of the underlying design system for brand colors, spacing, and theme tokens.
