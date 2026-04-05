# Chapter 2: Selectors

## What Selectors Do

Selectors tell CSS which HTML elements should receive a style.

Without selectors, CSS would not know where to apply a rule.

## Real-World Analogy

Selectors are like addresses on delivery boxes.
They tell the style exactly where it should go.

## Common Selector Types

### Element Selector

```css
h1 {
  color: tomato;
}
```

### Class Selector

```css
.card {
  padding: 16px;
}
```

### ID Selector

```css
#main-title {
  letter-spacing: 2px;
}
```

## Visual Explanation

```text
Element selector -> all buttons
Class selector   -> all .card items
ID selector      -> one unique section
```

## UI Example

```css
.button-primary {
  background: #2563eb;
  color: white;
}

.card-title {
  font-size: 20px;
}
```

## Best Practices

- prefer classes for reusable styling
- keep selectors simple
- avoid styling too many things with ids
- choose clear class names

## Common Mistakes

- using ids everywhere
- making selectors overly long
- writing class names that do not describe purpose

## Mentor Tip

If you think a style may be reused later, it probably should be a class.

## Tailwind Preparation

Utility-first CSS still depends on understanding what is being targeted and why.
Selectors are the traditional CSS way of attaching style rules to the right place.
