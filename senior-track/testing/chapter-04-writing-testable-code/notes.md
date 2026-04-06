# Chapter 04: Writing Testable Code

The easiest tests usually come from code that was designed clearly in the first place.

## Pure Functions

Pure functions are easier to test because the same input produces the same output and there are no hidden side effects.

```js
function addTax(price, rate) {
  return price + price * rate;
}
```

## Dependency Injection

Pass dependencies in instead of hardcoding them deep inside a function.

```js
function createCheckoutService(apiClient) {
  return {
    submit(order) {
      return apiClient.post("/orders", order);
    },
  };
}
```

## Avoid Tight Coupling

Code becomes harder to test when logic is tightly attached to globals, DOM state, or hidden side effects.

## Senior Dev Thinking

Testable code is usually cleaner production code too. The same design decisions that improve testing often improve maintainability and refactoring safety.
