# Chapter 9: CSS Best Practices

## Why Best Practices Matter

CSS can become messy quickly if you write styles without a clear system.

Good CSS is:

- readable
- reusable
- organized
- easy to update

## Real-World Analogy

A tidy toolbox saves time.
A messy toolbox makes even easy jobs slower.

## Good Habits

- group related styles
- use clear names
- keep selectors simple
- avoid repeating the same values constantly
- style for readability and accessibility

## Best Practices Example

```css
.card {
  padding: 20px;
  border-radius: 16px;
  background: white;
}
```

## Common Mistakes

- using very long selectors
- duplicating colors and spacing rules everywhere
- making styles too specific
- leaving old unused styles behind

## Professional Frontend Tip

Before adding new CSS, check whether the pattern already exists somewhere else.
A lot of frontend quality comes from reusing and simplifying.

## Tailwind Preparation

One reason people enjoy utility-first workflows is that they reduce some CSS repetition.
But even there, good naming, consistency, and design thinking still matter.

## Mentor Tip

When you revisit your CSS later, ask:

"Can I understand this in 20 seconds?"

If not, it probably needs cleanup.
