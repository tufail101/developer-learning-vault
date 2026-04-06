# Chapter 18: Storage And Performance Basics

## Big Picture

Frontend developers often need to remember data
and keep interfaces feeling fast.

Those two jobs meet in this chapter.

We will cover:

- `localStorage`
- `sessionStorage`
- cookies
- when to use each
- `JSON.stringify`
- `JSON.parse`
- storage limits and errors
- avoiding layout thrashing
- debounce
- throttle
- `requestAnimationFrame`

## Why Storage Matters

Sometimes your app needs to remember information:

- dark mode preference
- shopping cart items
- auth-related tokens
- form drafts
- dismissed announcements

Browsers provide different storage tools,
and each one has tradeoffs.

## Real-World Analogy

Think of browser storage like places to keep information.

`localStorage` is a locker that stays after you leave.

`sessionStorage` is a desk that gets cleared when the workday ends.

Cookies are small notes sent back and forth with the server.

Performance tools are like traffic management.

They help the page avoid jams,
stutters,
and wasted motion.

## `localStorage`

`localStorage` stores data in the browser with no expiration time by default.

If the user closes the tab or restarts the browser,
the data is still there.

Example:

```js
localStorage.setItem("theme", "dark");

const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
```

Use `localStorage` for:

- preferences
- lightweight saved UI state
- data you want to persist across sessions

## `sessionStorage`

`sessionStorage` stores data for one browser tab session.

When the tab closes,
the data is cleared.

```js
sessionStorage.setItem("currentStep", "2");
console.log(sessionStorage.getItem("currentStep"));
```

Use it for:

- multi-step forms in one session
- temporary page state
- data that should disappear when the tab ends

## Cookies

Cookies are small pieces of data stored in the browser
and often sent with HTTP requests to the server.

They are commonly used for:

- authentication
- session management
- tracking

Simple example:

```js
document.cookie = "username=Asha; path=/";
```

Cookies are more limited and more complex than `localStorage`.

They also have security and privacy implications,
so they should be used carefully.

## When To Use Each

Use `localStorage` when:

- data should persist across browser restarts
- the data is small and non-sensitive

Use `sessionStorage` when:

- data is temporary
- the tab session should define its lifetime

Use cookies when:

- the server needs the data on requests
- you are dealing with session or auth patterns

Do not store sensitive data casually in browser storage.

## Storage Only Accepts Strings

This is a very important rule.

`localStorage` and `sessionStorage` store strings,
not raw objects or arrays.

That means structured data must be converted.

## `JSON.stringify`

Use `JSON.stringify()` to convert objects or arrays into strings.

```js
const cart = [
  { id: 1, name: "Notebook", price: 5 },
  { id: 2, name: "Marker", price: 2 },
];

localStorage.setItem("cart", JSON.stringify(cart));
```

## `JSON.parse`

Use `JSON.parse()` to turn the stored string back into usable data.

```js
const savedCart = localStorage.getItem("cart");
const parsedCart = JSON.parse(savedCart);

console.log(parsedCart);
```

## Example 1: Simple Preference Storage

```js
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  return localStorage.getItem("theme") || "light";
}

saveTheme("dark");
console.log(loadTheme());
```

This is a realistic beginner-friendly use case.

## Example 2: Medium Complexity Object Storage

```js
const userSettings = {
  fontSize: "large",
  sidebarOpen: true,
};

localStorage.setItem("settings", JSON.stringify(userSettings));

const savedSettings = JSON.parse(localStorage.getItem("settings"));
console.log(savedSettings.sidebarOpen);
```

This pattern is everywhere in frontend apps.

## Example 3: Safer Parsing With Fallback

```js
function loadCart() {
  const rawCart = localStorage.getItem("cart");

  if (!rawCart) {
    return [];
  }

  try {
    return JSON.parse(rawCart);
  } catch (error) {
    console.error("Cart data was corrupted:", error.message);
    return [];
  }
}
```

This is a senior habit:
assume stored data may be missing or broken.

## Storage Limits And Errors

Browser storage is not unlimited.

If you store too much,
you may hit a quota error.

Different browsers have different limits.

That means:

- keep stored data small
- remove stale data when possible
- avoid dumping huge datasets into storage

Also remember:

- private browsing modes can behave differently
- disabled storage can break assumptions
- parsing bad JSON throws errors

## Performance Basics

Performance is about making the app feel responsive.

You do not need to become a browser engine expert,
but you should build some useful instincts.

## Avoid Layout Thrashing

Layout thrashing happens when code repeatedly reads layout information
and then writes layout changes back and forth.

That forces the browser to recalculate layout too often.

Bad pattern:

```js
const box = document.querySelector(".box");

for (let i = 0; i < 100; i += 1) {
  const width = box.offsetWidth;
  box.style.width = `${width + 1}px`;
}
```

This mixes reads and writes repeatedly.

Better idea:

- read what you need once
- batch writes together

## Debounce

Debounce delays a function until the rapid events stop.

This is great for:

- search input
- resize handlers
- auto-save after typing stops

Basic debounce implementation:

```js
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
```

## Throttle

Throttle limits a function
so it can only run at most once during a set time window.

This is useful for:

- scroll handlers
- mouse movement tracking
- resizing work that should update regularly but not constantly

Basic throttle implementation:

```js
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) {
      return;
    }

    callback.apply(this, args);
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

## Debounce Vs Throttle

Use debounce when you want:

- one final action after rapid input stops

Use throttle when you want:

- steady updates at a controlled rate

This difference matters a lot in real UI behavior.

## `requestAnimationFrame`

`requestAnimationFrame` tells the browser,
"Run this animation update before the next repaint."

That makes it better for visual animation work than a plain timer.

```js
let position = 0;
const box = document.querySelector(".box");

function animate() {
  position += 2;
  box.style.transform = `translateX(${position}px)`;

  if (position < 200) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
```

This helps animations feel smoother.

## Common Performance Mistakes

- running expensive code on every keypress without debounce
- doing heavy work on every scroll event without throttle
- mixing layout reads and writes repeatedly
- updating too many inline styles one by one
- storing large unnecessary blobs in browser storage

## Best Practices

- store only small useful data in browser storage
- always serialize complex data with JSON
- handle missing or invalid stored data safely
- debounce noisy input events
- throttle frequent continuous events
- use `requestAnimationFrame` for animation updates

## Best Practices In Real Projects

When you are building for real users, think about system boundaries.

They ask:

1. Should this data live in browser storage at all?
2. Does the server need this value,
   or only the UI?
3. Is this event firing too often?
4. Am I causing extra layout work?
5. Does this optimization solve a measured problem?

They optimize intentionally,
not nervously.

## How This Matters In Practice

Storage and performance are both about discipline.

Just because the browser lets you store data
does not mean you should store everything.

Just because an event fires often
does not mean your code should run fully every time.

One simple way to think about it is:

- persist only what matters
- update only when needed
- measure before over-optimizing

## Quick Recap

- `localStorage` persists across sessions
- `sessionStorage` lasts for one tab session
- cookies are small data sent with requests
- storage APIs work with strings,
  so use JSON for objects and arrays
- invalid storage data should be handled safely
- debounce waits for rapid events to stop
- throttle limits how often a handler runs
- `requestAnimationFrame` is good for animation timing

## Practice Ideas

- save a theme preference in `localStorage`
- store and restore a task list with JSON
- debounce a live search input
- throttle a scroll position logger
- animate a box with `requestAnimationFrame`
