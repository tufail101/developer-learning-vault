# Chapter 12: Closures And Callbacks

## Big Picture

Closures and callbacks are core JavaScript ideas.

They explain how functions remember data,
how asynchronous code is organized,
and why event-driven interfaces work.

These topics can feel abstract at first,
but they become much easier once you connect them to real code.

In this chapter, we will cover:

- what a closure actually is
- why closures exist
- counter example
- private variable example
- factory function example
- callback functions
- callback hell
- how to avoid callback hell
- real use cases like event listeners and `setTimeout`

## What A Closure Actually Is

A closure happens when a function remembers variables from the place where it was created,
even after that outer function has finished running.

That sentence is important,
so read it twice.

The key idea is not "a function inside a function."
The key idea is memory.

The inner function keeps access to outer variables.

## Real-World Analogy

Imagine you leave home with a backpack.

The backpack contains your notebook,
keys,
and lunch.

Even after you leave the house,
you still have access to those items.

A closure works like that backpack.

The function carries the variables it needs.

## Simple Closure Example

```js
function outer() {
  const message = "Hello from the outer function";

  function inner() {
    console.log(message);
  }

  return inner;
}

const savedFunction = outer();
savedFunction();
```

Why this matters:

- `outer()` has already finished
- `inner()` still remembers `message`
- that remembered connection is the closure

## Why Closures Exist

Closures exist because JavaScript functions are first-class values.

That means functions can be:

- stored in variables
- returned from other functions
- passed into other functions

When JavaScript allows that,
it must also preserve the variables those functions depend on.

Otherwise many useful patterns would break.

## Example 1: Counter Closure

This is the classic closure example because it shows memory clearly.

```js
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const increment = createCounter();

console.log(increment());
console.log(increment());
console.log(increment());
```

Each time `increment()` runs,
it remembers the same `count` variable.

That is why the value keeps increasing.

## Why The Counter Example Matters

Without closures,
every call would start over.

Closures let a function keep state
without putting that state in the global scope.

That is safer and cleaner.

## Example 2: Private Variable Pattern

Closures can hide implementation details from the rest of the program.

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }

      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));
console.log(account.withdraw(25));
console.log(account.getBalance());
```

Here,
`balance` is not directly exposed.

Other code must use the provided methods.

That is a powerful design pattern.

## Example 3: Factory Function Example

A factory function builds and returns customized objects.

Closures help each object keep its own private data.

```js
function createGreeting(language) {
  return function (name) {
    if (language === "en") {
      return `Hello, ${name}!`;
    }

    if (language === "es") {
      return `Hola, ${name}!`;
    }

    return `Hi, ${name}!`;
  };
}

const greetEnglish = createGreeting("en");
const greetSpanish = createGreeting("es");

console.log(greetEnglish("Asha"));
console.log(greetSpanish("Ravi"));
```

Each returned function remembers the `language` value that created it.

## Closures In Real Applications

Closures show up in many places:

- event listeners
- timers
- factory functions
- configuration helpers
- memoization utilities
- module patterns

If you use JavaScript for long enough,
you will use closures whether you realize it or not.

## Common Beginner Confusion

Some learners think closures copy values.

That is not quite right.

Closures usually keep access to the variable itself,
not a frozen copy of it.

```js
function makeUpdater() {
  let value = 1;

  return {
    getValue() {
      return value;
    },
    setValue(newValue) {
      value = newValue;
    },
  };
}

const updater = makeUpdater();
console.log(updater.getValue());
updater.setValue(5);
console.log(updater.getValue());
```

The closure sees the updated variable.

## Best Practices For Closures

- use closures to keep related state together
- avoid creating hidden state when simple parameters would work
- give closure-returning functions clear names
- prefer readability over cleverness

## Common Mistakes With Closures

- keeping too much data alive in memory
- hiding state so deeply that debugging becomes hard
- using closures where a plain object would be simpler
- confusing closure behavior with copied values

## What A Callback Is

A callback is a function passed into another function
so it can be called later.

```js
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function showWelcomeMessage() {
  console.log("Welcome to the dashboard.");
}

greetUser("Asha", showWelcomeMessage);
```

The callback is `showWelcomeMessage`.

It gets passed in and executed later.

## Why Callbacks Exist

Callbacks let one part of the program say,
"When you are done, run this next step."

This works well for:

- event handling
- timers
- network responses
- custom utility functions

## Callback Example With Arrays

```js
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number * 2);
});
```

The function passed to `forEach` is a callback.

## Callback Example With `setTimeout`

```js
setTimeout(function () {
  console.log("This runs after 1000ms");
}, 1000);
```

The timer API stores your callback
and runs it later.

## Callback Example With Event Listeners

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

When the click happens,
the browser runs your callback.

This is why callbacks are everywhere in frontend work.

## Callback Hell

Callback hell happens when callbacks are nested deeply,
making code hard to read,
hard to test,
and hard to debug.

```js
loginUser(user, function (userData) {
  getProfile(userData.id, function (profile) {
    getNotifications(profile.id, function (notifications) {
      renderDashboard(notifications);
    });
  });
});
```

Problems here:

- the code moves to the right too much
- error handling becomes repetitive
- the sequence is hard to scan

## How To Avoid Callback Hell

You can reduce callback hell by:

- naming functions instead of nesting anonymous ones
- splitting steps into small reusable functions
- using promises
- using `async` and `await`

Here is a cleaner callback-based rewrite:

```js
function handleNotifications(notifications) {
  renderDashboard(notifications);
}

function handleProfile(profile) {
  getNotifications(profile.id, handleNotifications);
}

function handleUser(userData) {
  getProfile(userData.id, handleProfile);
}

loginUser(user, handleUser);
```

This is still callback-based,
but much more readable.

## When Callbacks Are Still Fine

Not every callback is bad.

Callbacks are perfectly good for:

- `forEach`
- event listeners
- short timer behavior
- tiny utility hooks

The problem is not callbacks themselves.
The problem is deeply nested control flow.

## Closure And Callback Together

Closures and callbacks often appear together.

```js
function setupReminder(name) {
  return function () {
    console.log(`Reminder for ${name}`);
  };
}

const remindAsha = setupReminder("Asha");
setTimeout(remindAsha, 1000);
```

The returned callback remembers `name`.

That is closure plus callback working together.

## Real-World Use Case: Button Factories

```js
function createButtonHandler(productId) {
  return function () {
    console.log(`Added product ${productId} to cart`);
  };
}
```

Each button can receive its own handler,
and each handler remembers the correct `productId`.

This pattern shows up in apps all the time.

## Senior Dev Best Practices

- use closures to group state with behavior
- keep callback chains shallow
- move repeated callback logic into named functions
- switch to promises or `async`/`await` when flows become complex
- be mindful of memory when long-lived closures capture large objects

## Common Mistakes

- calling a callback immediately instead of passing it
- forgetting that a closure can keep old references alive
- nesting too many callbacks in one function
- writing clever closure code that teammates cannot follow

## How A Senior Dev Thinks About This

A senior developer asks:

1. What data needs to be remembered later?
2. Should that data live in a closure,
   in an object,
   or in a state container?
3. Is this callback flow still readable?
4. Will another developer understand the control flow quickly?

They use closures intentionally,
not magically.

They use callbacks where they are natural,
and they refactor when the structure becomes painful.

## Quick Recap

- a closure is a function remembering variables from where it was created
- closures let functions keep state without globals
- callbacks are functions passed to other functions to run later
- closures power patterns like counters and private variables
- callbacks power timers,
  events,
  and collection methods
- callback hell is about structure,
  not about callbacks being bad

## Practice Ideas

- build two counters from the same factory and compare their state
- create a private score tracker with closure methods
- attach click handlers to multiple buttons using closures
- rewrite a nested callback example using named functions
