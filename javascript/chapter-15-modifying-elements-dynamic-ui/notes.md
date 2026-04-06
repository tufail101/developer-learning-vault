# Chapter 15: Modifying Elements And Building Dynamic UI

## Big Picture

Selecting elements is only the first step.

Real frontend work usually involves changing the page:

- updating text
- creating cards
- showing messages
- toggling classes
- inserting lists
- building interface pieces from data

In this chapter, we will cover:

- `innerHTML` vs `textContent` vs `createElement`
- security implications of `innerHTML`
- `appendChild` vs `append` vs `insertAdjacentHTML`
- `classList`
- `dataset`
- style manipulation
- creating elements dynamically
- `DocumentFragment` for performance

## Real-World Analogy

Imagine your HTML page is a room.

Selecting elements is like locating the furniture.

Modifying elements is like changing the room:

- replacing a chair
- adding a lamp
- moving a table
- repainting one wall

Different DOM methods are different tools for those jobs.

## `textContent`

`textContent` changes or reads plain text inside an element.

```js
const message = document.querySelector(".message");
message.textContent = "Profile saved successfully.";
```

This is safe for plain text
because the browser does not interpret it as HTML.

If the string contains `<strong>`,
the page shows those characters as text,
not as markup.

## `innerHTML`

`innerHTML` reads or writes HTML markup inside an element.

```js
const container = document.querySelector(".notice");
container.innerHTML = "<strong>Success:</strong> Item added.";
```

This is convenient,
but it comes with risk.

If you put untrusted user input into `innerHTML`,
you can create security problems.

## Security Implications Of `innerHTML`

This matters a lot.

If user-controlled content is inserted as HTML,
malicious scripts may run.

That is part of a family of attacks called XSS,
which stands for cross-site scripting.

Unsafe example:

```js
const userInput = '<img src="x" onerror="alert(`Hacked`)">';
container.innerHTML = userInput;
```

Safer plain text version:

```js
container.textContent = userInput;
```

Rule of thumb:

- use `textContent` for plain user content
- use `innerHTML` only when you trust the markup source

## `createElement`

`createElement` lets you build elements one piece at a time.

```js
const card = document.createElement("article");
card.className = "card";
card.textContent = "New lesson card";
```

This is often safer and more explicit than large HTML strings.

It also makes it easier to attach attributes and listeners in code.

## `appendChild`

`appendChild` adds one node to the end of a parent.

```js
const list = document.querySelector(".lesson-list");
const item = document.createElement("li");
item.textContent = "Practice loops";

list.appendChild(item);
```

It expects a node,
not a plain string.

## `append`

`append` is more flexible than `appendChild`.

It can add:

- nodes
- strings
- multiple values

```js
const box = document.querySelector(".box");
box.append("Hello ", document.createElement("span"));
```

That flexibility makes it nice for small UI tasks.

## `insertAdjacentHTML`

`insertAdjacentHTML` inserts HTML relative to an existing element
without replacing the whole element content.

```js
const feed = document.querySelector(".feed");

feed.insertAdjacentHTML(
  "beforeend",
  `<article class="post">New post added</article>`
);
```

Positions include:

- `beforebegin`
- `afterbegin`
- `beforeend`
- `afterend`

This is useful when:

- you trust the HTML source
- you want to insert markup quickly
- you do not want to rebuild the whole container

## `classList`

`classList` makes class changes much easier.

Useful methods include:

- `add`
- `remove`
- `toggle`
- `contains`

```js
const modal = document.querySelector(".modal");
modal.classList.add("is-open");
modal.classList.remove("hidden");
modal.classList.toggle("active");
```

This is cleaner than replacing the full `className` string.

## `dataset`

`dataset` gives you access to custom `data-*` attributes.

HTML:

```html
<button data-product-id="42" data-category="books">Add to Cart</button>
```

JavaScript:

```js
const button = document.querySelector("button");

console.log(button.dataset.productId);
console.log(button.dataset.category);
```

`dataset` is great for storing small bits of UI-related metadata in markup.

## Style Manipulation

You can change inline styles directly with JavaScript.

```js
const banner = document.querySelector(".banner");
banner.style.backgroundColor = "tomato";
banner.style.padding = "1rem";
```

This works,
but it is often better to toggle classes
and let CSS control the visual design.

Why?

- CSS stays responsible for styling
- JavaScript stays focused on behavior
- the code becomes easier to maintain

## Creating Elements Dynamically

Dynamic UI often starts with data.

Example:

```js
const lessons = ["HTML", "CSS", "JavaScript"];
const list = document.querySelector(".lesson-list");

lessons.forEach((lesson) => {
  const item = document.createElement("li");
  item.textContent = lesson;
  list.appendChild(item);
});
```

This pattern shows up in:

- product grids
- comments
- notifications
- dashboard cards
- search results

## Example 1: Simple Text Update

```js
const status = document.querySelector(".status");
status.textContent = "Saving...";
```

This is a small change,
but it is exactly the kind of DOM update apps do constantly.

## Example 2: Medium Complexity Card Creation

```js
const card = document.createElement("article");
card.classList.add("lesson-card");
card.innerHTML = `
  <h3>Closures</h3>
  <p>Learn how functions remember outer variables.</p>
`;

document.querySelector(".cards").appendChild(card);
```

This is acceptable if the markup source is trusted.

If the content came from users,
build the children with `createElement` and `textContent` instead.

## Example 3: More Complex Dynamic UI From Data

```js
const products = [
  { name: "Notebook", price: 5 },
  { name: "Marker", price: 2 },
];

const grid = document.querySelector(".product-grid");

products.forEach((product) => {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  article.append(title, price);
  grid.appendChild(article);
});
```

This approach is clear,
safe,
and maintainable.

## `DocumentFragment` For Performance

When adding many elements,
you can reduce repeated DOM updates with `DocumentFragment`.

```js
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i += 1) {
  const item = document.createElement("li");
  item.textContent = `Lesson ${i}`;
  fragment.appendChild(item);
}

document.querySelector(".lesson-list").appendChild(fragment);
```

The fragment acts like a temporary container.

You build the elements there first,
then add them to the page in one final step.

This can improve performance for large inserts.

## `appendChild` Vs `append` Vs `insertAdjacentHTML`

Use this quick guide:

- use `appendChild` when you already have a node
- use `append` when you want flexibility with nodes and text
- use `insertAdjacentHTML` when you need fast trusted markup insertion

There is no single winner.
Choose based on the situation.

## Best Practices

- prefer `textContent` for plain text
- be very careful with `innerHTML`
- use `classList` for UI state changes
- use `data-*` attributes for small UI metadata
- let CSS handle most styling through classes
- use `DocumentFragment` when adding many elements

## Common Mistakes

- injecting untrusted content with `innerHTML`
- rebuilding large chunks of DOM when only one value changed
- putting too much inline styling in JavaScript
- using `className` carelessly and removing needed classes
- creating many DOM updates one by one without batching

## Performance Basics

DOM work is slower than plain JavaScript data work
because the browser may need to recalculate layout and repaint.

That does not mean you should fear DOM updates.

It means you should avoid unnecessary ones.

Good habits:

- group DOM changes together
- cache selected elements when reused
- prefer class toggles over many tiny style changes
- use fragments for bulk inserts

## How This Matters In Practice

When you are building a real interface, ask:

1. Is this content trusted or untrusted?
2. Am I changing text,
   structure,
   attributes,
   or visual state?
3. Should CSS handle this through classes?
4. Am I creating more DOM work than necessary?
5. Will another developer understand how this UI gets built?

They treat DOM updates like a design choice,
not just a technical trick.

## Quick Recap

- `textContent` is best for plain safe text
- `innerHTML` works with markup but must be used carefully
- `createElement` gives more control over dynamic UI
- `appendChild`,
  `append`,
  and `insertAdjacentHTML` solve related but different problems
- `classList` helps manage UI state cleanly
- `dataset` reads `data-*` attributes
- `DocumentFragment` helps batch element creation

## Practice Ideas

- build a task list from an array using `createElement`
- toggle an "active" class on selected cards
- insert a notification message with `insertAdjacentHTML`
- compare building 20 items normally vs with `DocumentFragment`
