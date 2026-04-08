# What Is Express

Express is a Node.js framework for building web servers and APIs with less setup code.

That is the plain answer.

Node gives you the ability to run JavaScript on the server.
Express gives you a cleaner way to handle routes, requests, and responses on top of Node.

## Why People Use Express Instead Of Plain Node

You can build a server with Node's built-in `http` module.
But the code gets repetitive quickly.

Express removes a lot of that repetition.

It gives you simple helpers for things like:

- defining routes
- reading request data
- sending responses
- organizing middleware

So the real reason Express matters is not magic.
It just makes common server work easier to read and easier to grow.

## Real-World Analogy

Think of Node.js as an empty shop space.

You have a room.
You have electricity.
You can technically start working in it.

Express is like adding shelves, labels, and a front desk.
Now the same space is much easier to use.

## Set Up A New Express Project

Start in your terminal:

```bash
mkdir my-first-express-app
cd my-first-express-app
npm init -y
npm install express
```

Here is what those commands do:

- `mkdir my-first-express-app` creates a new folder
- `cd my-first-express-app` moves you into that folder
- `npm init -y` creates a `package.json` file
- `npm install express` downloads Express into the project

After that, create a file called `app.js`.

In a very normal beginner Express project, your folder might now look like this:

```text
my-first-express-app/
  app.js
  package.json
  package-lock.json
  node_modules/
```

## Add A Real Start Script

After `npm init -y`, your `package.json` will have a default script that is not very useful.

Change it so it includes:

```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

Now you can start the project with:

```bash
npm start
```

That is closer to how real Express projects are usually run than typing random node commands from memory.

## What `node_modules` Is

When you install Express, npm creates a folder called `node_modules`.

That folder stores the installed package files your project depends on.

It can get very large.
You do not usually commit that folder to Git.
Instead, Git tracks `package.json` and `package-lock.json`, and other people can run `npm install` to get the same packages.

## `require` vs `import`

You will see two ways to bring code into a Node project.

This is CommonJS:

```js
const express = require("express");
```

This is ESM:

```js
import express from "express";
```

For beginners, CommonJS with `require()` is usually easier to start with because it works right away in many simple Node setups.

Later, you can learn ESM.
For this chapter, we are using `require()` so the setup stays simple.

## Your First Express Server

Put this in `app.js`:

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Now run:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

You should see:

```text
Hello from Express
```

## What Each Line Is Doing

```js
const express = require("express");
```

This loads the Express package you installed.

```js
const app = express();
```

This creates your Express app object.
You will use `app` to define routes and start the server.

```js
const PORT = 3000;
```

This stores the port number where the server should listen.

```js
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
```

This defines one route.

It means:

- when someone makes a GET request to `/`
- run this function
- send back `"Hello from Express"`

```js
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

This starts the server and logs a message so you know it worked.

## Mistakes That Show Up In This Chapter

### Running The Server Before Installing Express

If you skip `npm install express`, Node cannot find the package.

### Forgetting To Stay In The Project Folder

If you run commands from the wrong folder, `package.json` and `node_modules` can end up in the wrong place.

### Forgetting To Add A Useful `start` Script

If `package.json` still has the default placeholder test script only, the project feels more confusing than it needs to.

### Expecting The Browser To Update Without Restarting

After changing `app.js`, you usually need to stop the server and run `npm start` again unless you are using a tool like `nodemon`.

### Thinking Express Replaces Node

It does not.
Express runs on top of Node.

## What To Do Right Now

Do this in order:

1. create the folder
2. run `npm init -y`
3. install Express
4. create `app.js`
5. add `"start": "node app.js"` to `package.json`
6. run `npm start`
6. open `http://localhost:3000`

If all of that works, Express has officially clicked for the first time.

## What Comes Next

The next chapter is **Creating A Server**.
That chapter stays close to this one, but slows down the server flow even more so the route and response cycle feels obvious instead of magical.
