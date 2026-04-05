# Chapter 15: Modifying Elements And Dynamic UI

## Changing The Page

Once JavaScript selects an element, it can modify it.

Common updates include:

- changing text
- adding classes
- creating elements
- removing elements

## Example

```js
const title = document.querySelector("h1");
title.textContent = "New Title";
```

## Creating Elements

```js
const item = document.createElement("li");
item.textContent = "New Task";
document.querySelector("ul").appendChild(item);
```

## Real-World Analogy

This is like rearranging furniture after the room is already built.

## Why This Matters

Dynamic UI is what makes apps feel alive.
Lists, notifications, to-do items, modals, and galleries all depend on DOM updates.

## Best Practices

- update the smallest necessary part of the page
- use classes for bigger visual changes
- keep creation logic and event logic understandable

## Common Mistakes

- appending elements to the wrong parent
- overwriting content by accident
- mixing too many responsibilities in one function
