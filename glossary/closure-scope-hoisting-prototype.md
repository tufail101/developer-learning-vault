# Closure, Scope, Hoisting, And Prototype

## Closure (`closure`)

Definition:
A closure is when a function remembers variables from the place where it was created, even after that outer function has finished running.

Analogy:
It is like carrying a backpack full of notes from your home office, so you can still use them later at a cafe.

Code example:

```js
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Why this matters:
Closures let you keep state without putting everything in global variables. They are used in event handlers, factory functions, private state patterns, and many library APIs.

Learn more:
[chapter-12-closures-callbacks](../javascript/chapter-12-closures-callbacks/)

## Scope (`scope`)

Definition:
Scope is the set of places in your code where a variable can be accessed.

Analogy:
It is like a keycard system in an office where some keys open the whole building and others only open one room.

Code example:

```js
const appName = "Study App";

function showLesson() {
  const lessonName = "Scope";
  console.log(appName);
  console.log(lessonName);
}
```

Why this matters:
Scope decides where data can safely be used and changed. Understanding scope helps you avoid bugs from leaking variables, name collisions, and using values outside the place they belong.

Learn more:
[chapter-11-type-conversion-scope](../javascript/chapter-11-type-conversion-scope/)

## Hoisting (`hoisting`)

Definition:
Hoisting is JavaScript's behavior of processing declarations before code execution reaches their line, which changes how `var`, `let`, `const`, and functions behave.

Analogy:
It is like the seating chart being prepared before a meeting starts, even if people walk in later.

Code example:

```js
console.log(productName); // undefined
var productName = "Keyboard";
```

Why this matters:
Hoisting explains confusing bugs where a variable exists earlier than you expected but still has the wrong value. It is especially important for understanding why `var` behaves differently from `let` and `const`.

Learn more:
[chapter-11-type-conversion-scope](../javascript/chapter-11-type-conversion-scope/)

## Prototype (`prototype`)

Definition:
A prototype is the object another object can inherit properties and methods from in JavaScript's prototype chain system.

Analogy:
It is like a shared instruction manual that many tools can read from instead of each tool carrying its own copy.

Code example:

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  return `Hello, ${this.name}`;
};

const user = new User("Asha");
console.log(user.sayHello());
```

Why this matters:
Prototypes explain how inheritance works in JavaScript under the hood, even when you use modern `class` syntax. Knowing this helps you reason about built-in methods like `.map()` and `.toUpperCase()` because those methods come from prototypes too.

Learn more:
[chapter-09-modern-javascript](../javascript/chapter-09-modern-javascript/)
