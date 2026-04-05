# Chapter 8: Components

## What A Component Is

A component is a reusable piece of UI, such as:

- button
- card
- badge
- navigation item
- input field

## Real-World Analogy

Components are like LEGO blocks.
You build small parts first, then combine them into larger interfaces.

## Example

```css
.button {
  padding: 12px 18px;
  border-radius: 999px;
  background: #111827;
  color: white;
}
```

## Why Components Matter In UI Work

Most modern interfaces are built from repeated pieces:

- primary button
- secondary button
- card
- badge
- navbar item
- input field

When you style these pieces consistently, the whole interface feels more professional.

## Visual Explanation

```text
Page
|- Navbar
|- Hero
|- Cards
|- Footer

Each of those larger sections still contains smaller reusable pieces.
```

## Best Practices

- use clear reusable class names
- keep visual rules consistent
- build small pieces that can appear in many places

## Common Mistakes

- repeating the same style rules in many files
- making one-off button styles for every section
- naming classes too vaguely

## Professional Frontend Tip

When a UI starts growing, repeated component patterns save time and reduce bugs.
That is one reason design systems are so valuable.

## Tailwind Preparation

Even if you later move to utility classes, you will still think in components.
The styling method may change, but the UI building blocks stay the same.
