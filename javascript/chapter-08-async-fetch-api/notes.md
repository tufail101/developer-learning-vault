# Chapter 8: Async JavaScript And Fetch API

## What Async Means

Some tasks take time.

Examples:

- loading data from the internet
- waiting for user input
- reading stored information

JavaScript can keep the page responsive while waiting.

## Real-World Analogy

Async work is like ordering food and waiting for it to arrive while still talking to your friends.

## Example

```js
async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}
```

## Why `fetch` Matters

`fetch()` lets your frontend request data from APIs.

That is how many apps load:

- weather data
- products
- posts
- user profiles

## Best Practices

- show loading states
- handle errors with `try` and `catch`
- keep API logic readable

## Common Mistakes

- forgetting `await`
- not converting response data with `.json()`
- assuming requests always succeed
