# Chapter 14: DOM Introduction And Selecting Elements

## DOM Introduction

The DOM is how JavaScript sees the page.

It turns HTML into objects JavaScript can work with.

## Selecting Elements

Common ways to select elements:

```js
const title = document.querySelector("h1");
const button = document.querySelector(".btn");
const card = document.getElementById("profile-card");
```

## Real-World Analogy

The DOM is like a map of the page.
Selectors are how you find the exact part you want to work with.

## Why This Matters

Before JavaScript can update the page, it must find the right element first.

## Best Practices

- use clear selectors
- store selected elements in variables
- prefer `querySelector` and `querySelectorAll` for flexibility

## Common Mistakes

- selecting the wrong element
- using a selector that does not exist
- forgetting that `querySelectorAll` returns multiple elements
