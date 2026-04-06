# Chapter 14: DOM Introduction And Selecting Elements

## Big Picture

The DOM is how JavaScript sees your HTML page.

If JavaScript is going to update a heading,
read an input value,
hide a menu,
or attach a click listener,
it needs a way to find and work with elements.

That is where DOM selection comes in.

In this chapter, we will cover:

- what the DOM tree actually is
- `getElementById`
- `querySelector`
- `querySelectorAll`
- `HTMLCollection` vs `NodeList`
- traversal with `parentElement`,
  `children`,
  and `nextElementSibling`
- live vs static collections

## What The DOM Actually Is

DOM stands for Document Object Model.

The browser reads your HTML
and turns it into a tree of objects.

Each HTML element becomes a node in that tree.

That tree structure lets JavaScript:

- find elements
- change content
- add or remove elements
- respond to events

## Real-World Analogy

Imagine your webpage is a family tree.

The `<body>` contains children.
Those children may contain their own children.
Some elements are siblings because they share the same parent.

Once you think in terms of parent,
child,
and sibling relationships,
the DOM becomes much easier to navigate.

## A Simple DOM Tree Example

```html
<body>
  <main>
    <section>
      <h1>Welcome</h1>
      <p>Start learning.</p>
    </section>
  </main>
</body>
```

In that structure:

- `body` is a parent of `main`
- `main` is a parent of `section`
- `h1` and `p` are children of `section`
- `h1` and `p` are siblings

## Why DOM Selection Matters

Before you can change something,
you must select it.

That makes selection one of the most common frontend tasks.

If you select the wrong element,
the rest of your code often fails quietly.

That is why good DOM habits matter early.

## `getElementById`

`getElementById` selects one element by its `id`.

```js
const pageTitle = document.getElementById("page-title");
console.log(pageTitle);
```

Use it when:

- the element has a unique `id`
- you want a direct and readable lookup

IDs should be unique on the page.

## `querySelector`

`querySelector` returns the first element matching a CSS selector.

```js
const firstCard = document.querySelector(".card");
const navLink = document.querySelector("nav a");
```

This method is very flexible because it accepts the same selector style you use in CSS.

Use it when:

- you want the first match
- you want CSS-selector power
- you want one consistent selection method for many cases

## `querySelectorAll`

`querySelectorAll` returns all matching elements.

```js
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
```

It returns a `NodeList`.

You can loop through it with `forEach`.

```js
buttons.forEach((button) => {
  console.log(button.textContent);
});
```

## `HTMLCollection` Vs `NodeList`

This difference confuses many learners.

### `HTMLCollection`

Usually returned by methods like:

- `getElementsByClassName`
- `getElementsByTagName`
- `children`

### `NodeList`

Usually returned by:

- `querySelectorAll`

## Key Difference: Live Vs Static

Many `HTMLCollection` results are live.

That means if the DOM changes,
the collection updates automatically.

`querySelectorAll` returns a static `NodeList`.

That means it does not auto-update after selection.

This difference matters when adding or removing elements dynamically.

## Live Collection Example

```js
const listItems = document.getElementsByClassName("item");
console.log(listItems.length);
```

If you later add another `.item`,
`listItems.length` changes automatically.

## Static Collection Example

```js
const cards = document.querySelectorAll(".card");
console.log(cards.length);
```

If you later add another `.card`,
the old `cards` list does not change.

You would need to select again.

## When This Difference Causes Bugs

If you expect a selected list to update automatically,
but it came from `querySelectorAll`,
your loop may miss new elements.

If you expect a list to stay stable while looping,
but it came from a live collection,
your loop may behave unexpectedly as the DOM changes.

## Traversal: Moving Around The DOM

Selection gets you to one element.
Traversal helps you move relative to that element.

Useful traversal properties include:

- `parentElement`
- `children`
- `nextElementSibling`
- `previousElementSibling`

## `parentElement`

```js
const button = document.querySelector(".cta-button");
console.log(button.parentElement);
```

Use this when you already have a child element
and need the parent container.

## `children`

```js
const cardList = document.querySelector(".card-list");
console.log(cardList.children);
```

`children` gives you an `HTMLCollection`
of element children only.

It does not include text nodes.

## `nextElementSibling`

```js
const heading = document.querySelector("h2");
console.log(heading.nextElementSibling);
```

This is helpful for patterns like:

- validation messages under inputs
- accordion sections
- linked content blocks

## Example 1: Simple Selection

```js
const title = document.getElementById("title");
title.textContent = "Updated title";
```

This is straightforward and great for unique elements.

## Example 2: Medium Complexity With Multiple Matches

```js
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  console.log(link.textContent);
});
```

This is common in navigation menus,
card grids,
and form controls.

## Example 3: More Complex Traversal

```js
const activeCard = document.querySelector(".card.active");
const cardContainer = activeCard.parentElement;
const nextCard = activeCard.nextElementSibling;

console.log(cardContainer);
console.log(nextCard);
```

This is how developers move through existing UI structure
without selecting the whole page again.

## Best Practices

- use `getElementById` for truly unique elements
- use `querySelector` and `querySelectorAll` for flexible CSS-style selection
- name selected variables clearly
- select as close to where you need the element as practical
- be aware of live vs static collections

## Common Mistakes

- forgetting that `querySelector` returns only the first match
- assuming `querySelectorAll` updates after DOM changes
- using the wrong selector syntax
- confusing `children` with `childNodes`
- selecting too broadly and accidentally matching the wrong element

## Performance Notes

DOM selection is usually fast enough for regular apps.

Still,
avoid selecting the same element repeatedly inside tight loops if you can store it once.

For example:

```js
const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", () => {
  console.log("Saved");
});
```

Caching a useful reference is often cleaner and slightly more efficient.

## Debugging DOM Selection

If selection fails,
check these things:

1. Is the selector correct?
2. Does the element exist in the HTML?
3. Is the script running before the DOM is ready?
4. Are you expecting many elements but using `querySelector`?
5. Are you expecting a static list to behave like a live list?

These checks solve many beginner DOM bugs.

## How This Matters In Practice

When you are working on a real interface, DOM work is easier if you see it as tree navigation,
not random element grabbing.

They think:

1. What is the most stable selector here?
2. Should this element have an `id`,
   a class,
   or a `data-*` attribute?
3. Am I selecting once and reusing,
   or selecting repeatedly?
4. Will this code break if the markup changes slightly?

That mindset leads to code that survives refactors better.

## Quick Recap

- the DOM is the browser's object tree built from HTML
- `getElementById` selects by unique ID
- `querySelector` returns the first CSS-selector match
- `querySelectorAll` returns a static `NodeList`
- `HTMLCollection` is often live
- traversal helps you move through parent,
  child,
  and sibling relationships

## Practice Ideas

- select a heading by ID and update its text
- select all cards and add a click listener to each
- compare `children` and `querySelectorAll`
- add a new item to the DOM and observe live vs static behavior
