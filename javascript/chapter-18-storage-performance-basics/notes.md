# Chapter 18: Local Storage, Session Storage, And Performance Basics

## Local Storage

Local storage keeps data in the browser even after the tab closes.

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
```

## Session Storage

Session storage keeps data for the current tab session.

```js
sessionStorage.setItem("draft", "unfinished message");
```

## Performance Basics

Performance means helping the page stay fast and responsive.

Basic habits:

- avoid unnecessary DOM work
- keep loops efficient
- update only what needs updating

## Real-World Analogy

Storage is like keeping notes in a drawer.
Performance is like keeping your workspace uncluttered so tasks stay quick.

## Why This Matters

Frontend apps often need to remember simple data and stay responsive as they grow.

## Best Practices

- store only small useful values in browser storage
- convert objects with `JSON.stringify` and `JSON.parse`
- avoid doing heavy work repeatedly without a reason

## Common Mistakes

- forgetting that storage values are strings
- storing too much unnecessary data
- repeatedly changing the DOM more than needed
