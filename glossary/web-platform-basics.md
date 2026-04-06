# Web Platform Basics

## DOM (`dom`)

Definition:
The DOM is the browser's object-based representation of your HTML page.

Analogy:
It is like the browser turning your page into a tree-shaped map that JavaScript can walk through and edit.

Code example:

```js
const title = document.querySelector("h1");
title.textContent = "Updated heading";
```

Why this matters:
If you want JavaScript to read inputs, change text, add cards, or respond to clicks, you are working with the DOM. It is one of the most important bridges between HTML and JavaScript.

Learn more:
[chapter-14-dom-introduction-selecting-elements](../javascript/chapter-14-dom-introduction-selecting-elements/)

## API (`api`)

Definition:
An API is a defined way for one piece of software to communicate with another.

Analogy:
It is like a restaurant menu that lists what you can ask for and what format the kitchen expects.

Code example:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data.title));
```

Why this matters:
APIs are how applications get data from servers, third-party services, and browser features. Once you understand APIs, you can connect your frontend to real data instead of hardcoded examples.

Learn more:
[chapter-08-async-fetch-api](../javascript/chapter-08-async-fetch-api/)

## REST API (`rest-api`)

Definition:
A REST API is a style of API design where data is treated as resources that are accessed with standard HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`.

Analogy:
It is like dealing with organized file cabinets where each drawer has a clear label and the same basic actions work on each one.

Code example:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Updated title",
  }),
});
```

Why this matters:
Many real-world apps talk to REST APIs for users, products, posts, and dashboards. Understanding the pattern helps you build predictable frontend-backend communication.

Learn more:
[chapter-08-async-fetch-api](../javascript/chapter-08-async-fetch-api/)

## JSON (`json`)

Definition:
JSON is a text format used to store and exchange structured data with objects and arrays.

Analogy:
It is like sending organized data in a neatly labeled shipping box instead of a loose pile of notes.

Code example:

```js
const user = { name: "Asha", role: "student" };
const jsonText = JSON.stringify(user);
const parsedUser = JSON.parse(jsonText);
```

Why this matters:
JSON is used constantly in APIs, local storage, config files, and data transfer between systems. If you work with web data, you will read and write JSON all the time.

Learn more:
[chapter-18-storage-performance-basics](../javascript/chapter-18-storage-performance-basics/)
