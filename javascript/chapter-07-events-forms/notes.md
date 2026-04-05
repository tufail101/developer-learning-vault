# Chapter 7: Events And Forms

## Events

Events tell JavaScript that something happened.

Examples:

- click
- input
- submit
- keydown

## Real-World Analogy

Events are like doorbells.
When something happens, your code reacts.

## Example

```js
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
```

## Reading Input Values

```js
const input = document.querySelector("#name");
console.log(input.value);
```

## Why This Matters

Almost every frontend app responds to user actions.
Buttons, forms, menus, tabs, and filters all depend on event handling.

## Best Practices

- listen for the right event
- use `preventDefault()` when needed for forms
- validate user input before using it

## Common Mistakes

- forgetting to stop form refresh
- trying to read input values from the wrong selector
- putting too much logic inside one event callback
