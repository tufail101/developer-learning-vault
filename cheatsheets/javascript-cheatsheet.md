# JavaScript Cheatsheet

## Variables: `let`, `const`, `var`

```js
const siteName = "Web Dev Learning System";
let currentChapter = 3;
var legacyValue = "older syntax";
```

When to use which:

- Use `const` by default.
- Use `let` when the value must be reassigned.
- Avoid `var` in modern code unless you are reading or maintaining older code.

Gotcha:
- `var` is function-scoped, not block-scoped.
- `const` prevents reassignment, but objects and arrays inside it can still be mutated.

## Arrays: Most-Used Methods

```js
const numbers = [1, 2, 3, 4];

numbers.push(5); // [1, 2, 3, 4, 5]
numbers.pop(); // removes last item
numbers.shift(); // removes first item
numbers.unshift(0); // adds to start

numbers.map((n) => n * 2); // transform each item
numbers.filter((n) => n > 2); // keep matching items
numbers.reduce((sum, n) => sum + n, 0); // combine into one value
numbers.find((n) => n === 3); // first matching item
numbers.findIndex((n) => n === 3); // index of first match
numbers.some((n) => n > 3); // true if any match
numbers.every((n) => n > 0); // true if all match
numbers.includes(2); // true
numbers.slice(1, 3); // non-mutating copy of part of array
numbers.splice(1, 1); // mutates original array
numbers.forEach((n) => console.log(n)); // side effects
numbers.flat(); // flatten one level
["hi there", "learn js"].flatMap((s) => s.split(" ")); // map + flatten
```

Gotcha:
- `map`, `filter`, and `slice` return new arrays.
- `push`, `pop`, `shift`, `unshift`, and `splice` mutate the original array.

## Objects

### Object Utility Methods

```js
const user = { name: "Asha", role: "student" };

Object.keys(user); // ["name", "role"]
Object.values(user); // ["Asha", "student"]
Object.entries(user); // [["name", "Asha"], ["role", "student"]]
Object.assign({}, user, { role: "mentor" }); // copy + override

const updatedUser = { ...user, role: "mentor" }; // spread copy
```

Gotcha:
- Spread makes a shallow copy, not a deep one.

## Destructuring

### Array Destructuring

```js
const colors = ["red", "green", "blue"];
const [firstColor, secondColor = "gray"] = colors;
```

### Object Destructuring

```js
const profile = { name: "Ravi", city: "Delhi" };

const { name, city, country = "India" } = profile;
const { name: fullName } = profile;
```

Use cases:

- cleaner function parameters
- pulling values from objects quickly
- renaming values to avoid collisions

## Template Literals

```js
const name = "Asha";
const score = 92;

const message = `${name} scored ${score}% on the practice test.`;
```

Useful for:

- dynamic strings
- multiline strings
- readable UI text

## Functions: Arrow Vs Regular

### Regular Function

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### Arrow Function

```js
const greet = (name) => `Hello, ${name}`;
```

### `this` Binding Difference

```js
const user = {
  name: "Asha",
  regularMethod() {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};
```

Gotcha:
- Arrow functions do not have their own `this`.
- Use regular functions for object methods when you need `this` to refer to the object.

## Strings: Common Methods

```js
const title = " Learn JavaScript Fast ";

title.trim(); // "Learn JavaScript Fast"
title.toLowerCase(); // " learn javascript fast "
title.toUpperCase(); // " LEARN JAVASCRIPT FAST "
title.includes("Java"); // true
title.startsWith(" "); // true
title.endsWith(" "); // true
title.replace("Fast", "Deeply"); // replace text
"a,b,c".split(","); // ["a", "b", "c"]
["Learn", "JS"].join(" "); // "Learn JS"
"hello".padStart(8, "*"); // "***hello"
```

## Async/Await Pattern

```js
async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Could not load user:", error.message);
  }
}
```

Gotcha:
- `await` only works inside `async` functions or supported module top level.
- Always check `response.ok` for fetch requests. `fetch()` only rejects on network failure, not on HTTP 404/500 by itself.

## Fetch API Pattern

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch failed:", error.message);
  });
```

Use this for:

- API data loading
- form submission
- external data integration

## DOM Selection Quick Reference

```js
document.getElementById("title");
document.querySelector(".card");
document.querySelectorAll(".card");
```

Rule of thumb:

- `getElementById` for one unique element
- `querySelector` for the first CSS selector match
- `querySelectorAll` for all matches

## DOM Manipulation Quick Reference

```js
const title = document.querySelector(".title");

title.textContent = "Updated title";
title.innerHTML = "<strong>Updated title</strong>";
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("highlight");
title.setAttribute("data-state", "open");
title.style.color = "tomato";

const card = document.createElement("article");
card.textContent = "New card";
document.body.append(card);
```

Gotcha:
- Prefer `textContent` for plain text.
- Use `innerHTML` carefully because untrusted content can create security problems.

## Events

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked");
});
```

Common event types:

- `click`
- `input`
- `change`
- `submit`
- `keydown`
- `mouseover`

## Objects And Arrays In Function Parameters

```js
function createCard({ title, description = "No description yet" }) {
  return `${title}: ${description}`;
}

createCard({ title: "Closures" });
```

This pattern is common in real apps because it makes arguments easier to read.

## Fast Reference Snippets

### Copy An Array

```js
const original = [1, 2, 3];
const copy = [...original];
```

### Copy An Object

```js
const original = { name: "Asha" };
const copy = { ...original };
```

### Optional Chaining And Nullish Coalescing

```js
const city = user?.address?.city ?? "Unknown city";
```

Gotcha:
- `??` only falls back for `null` and `undefined`.
- `||` falls back for all falsy values like `0` and `""`.

## Common Mistakes

- using `var` in new code
- mutating arrays accidentally with `splice`
- forgetting to return inside `map`
- using arrow functions for object methods that need `this`
- assuming `fetch` throws on every HTTP error
- using `innerHTML` for unsanitized user content
