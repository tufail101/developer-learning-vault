# Modules And Tooling

## Module (`module`)

Definition:
A module is a file that contains code with its own scope and can export values for other files to import.

Analogy:
It is like a labeled toolbox where each box holds a specific set of tools for one job.

Code example:

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

Why this matters:
Modules help you split code into smaller, reusable pieces instead of one giant file. That makes projects easier to read, test, and scale.

Learn more:
[chapter-17-error-handling-modules](../javascript/chapter-17-error-handling-modules/)

## Bundler (`bundler`)

Definition:
A bundler is a tool that combines and processes many source files into output files the browser can load efficiently.

Analogy:
It is like packing many separate lesson sheets into one organized study binder.

Code example:

```js
import "./styles.css";
import { addToCart } from "./cart.js";

addToCart("notebook");
```

Why this matters:
Modern projects often use many JavaScript, CSS, and asset files, and bundlers help turn that into a browser-friendly build. Even if you do not configure one at first, you will likely work with bundlers in real jobs.

Learn more:
[chapter-17-error-handling-modules](../javascript/chapter-17-error-handling-modules/)

## Package Manager (`package-manager`)

Definition:
A package manager is a tool that installs, updates, and tracks third-party libraries for your project.

Analogy:
It is like a warehouse system that fetches and organizes supplies instead of making you craft every part yourself.

Code example:

```bash
npm install react
```

Why this matters:
Package managers make it possible to use real-world tools like React, Jest, and ESLint without manually copying files around. They also help keep team dependencies consistent.

Learn more:
[chapter-08-npm-package-json](../backend/nodejs/chapter-08-npm-package-json/)

## Version Control (`version-control`)

Definition:
Version control is a system for tracking changes to files over time so you can review history, collaborate, and restore earlier states.

Analogy:
It is like having a timeline of every draft of your project instead of only the latest saved copy.

Code example:

```bash
git status
git add .
git commit -m "Add glossary entries"
```

Why this matters:
Version control is essential for teamwork and for protecting your work from mistakes. It lets you experiment more safely because changes are tracked instead of disappearing into one overwrite.

Learn more:
[chapter-01-version-control-basics](../tools/git-github/chapter-01-version-control-basics/)
