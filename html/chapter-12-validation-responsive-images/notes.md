# Chapter 12: HTML Validation And Responsive Images

## Why Validation Matters

Validation means checking whether your HTML follows proper rules.

Valid HTML is usually:

- easier to debug
- easier for browsers to interpret
- less likely to break in strange ways

## Real-World Analogy

Think of validation like checking grammar in an essay.
The message may still be understandable with mistakes, but fixing them makes the result cleaner and more reliable.

## Common Validation Problems

- missing closing tags
- duplicate ids
- putting elements in the wrong place
- forgetting required attributes

## Responsive Images

Responsive images help the browser choose the most suitable image for different screen sizes.

This can improve performance and user experience.

## Simple Responsive Image Example

```html
<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Student working on a laptop at a desk"
/>
```

## Why This Helps

- smaller screens can load smaller images
- larger screens can use sharper images
- pages can load faster

## Best Practices

- validate your HTML regularly
- keep ids unique
- close your tags correctly
- use responsive images when image size really matters
- always keep alt text meaningful

## Mentor Tip

Beginners often think validation is boring. In real work, it saves time because it catches small mistakes early.
