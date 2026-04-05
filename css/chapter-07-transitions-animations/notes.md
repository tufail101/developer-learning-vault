# Chapter 7: Transitions And Animations

## What They Do

Transitions make style changes feel smoother.
Animations can create a longer sequence of visual movement.

## Real-World Analogy

- a transition is like a door opening gently
- an animation is like a short performance with several moves

## Example

```css
button {
  transition: transform 0.2s ease, background 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
}
```

## UI Example

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
}
```

## Visual Explanation

```text
Before hover: calm card
After hover: slightly lifted card with stronger shadow
```

## Best Practices

- keep motion subtle
- use animation to support feedback
- avoid distracting movement

## Common Mistakes

- over-animating everything
- making motion too slow
- using motion where simple clarity would be better

## Professional Frontend Tip

In real product UI, animation usually works best when it answers a small question for the user:

- did this button react?
- is this card interactive?
- did this menu open?

## Tailwind Preparation

Later you may use utility classes for transitions, duration, easing, and hover transforms.
Understanding the CSS behavior first makes those utilities feel logical instead of magical.
