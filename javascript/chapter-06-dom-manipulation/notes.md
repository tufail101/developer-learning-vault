# Chapter 6: DOM Manipulation

## What The DOM Is

The DOM is the browser's JavaScript-friendly version of the page.

JavaScript uses the DOM to:

- find elements
- change text
- add classes
- update styles

## Real-World Analogy

The DOM is like a control panel for webpage elements.
It gives JavaScript handles for changing the page after it loads.

## Example

```js
const title = document.querySelector("h1");
title.textContent = "Updated by JavaScript";
```

## Another Example

```js
const card = document.querySelector(".card");
card.classList.add("active");
```

## Why This Matters

Modern frontend development depends on dynamic UI.
Even frameworks like React still work with the same browser ideas underneath.

## Best Practices

- select only what you need
- prefer changing classes instead of inline styles for bigger visual updates
- name DOM variables clearly

## Common Mistakes

- running code before the element exists
- selecting the wrong element
- changing too many styles directly in JavaScript
