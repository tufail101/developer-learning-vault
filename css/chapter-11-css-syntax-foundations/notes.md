# Chapter 11: CSS Syntax And Foundations

## What CSS Syntax Looks Like

CSS is made of rules.
Each rule has:

- a selector
- a declaration block
- properties and values

## Example

```css
h1 {
  color: #2563eb;
  font-size: 32px;
}
```

In this rule:

- `h1` is the selector
- `color` and `font-size` are properties
- `#2563eb` and `32px` are values

## Real-World Analogy

Think of CSS like giving instructions to a painter:

- who should be painted
- what should change
- what color or size to use

## Best Practices

- end each declaration with a semicolon
- keep braces matched properly
- use consistent indentation
- write one property per line for readability

## UI Example

```css
.cta-button {
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  border-radius: 999px;
}
```

## Common Mistakes

- forgetting semicolons
- missing closing braces
- writing values that do not match the property

## Professional Frontend Tip

Clean syntax sounds basic, but it saves a lot of debugging time.
Many styling bugs are just small syntax issues hiding in long files.
