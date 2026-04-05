# Chapter 8: npm And package.json

## What npm Is

npm is the package manager that comes with Node.js.

It helps you:

- install packages
- manage dependencies
- run scripts

## What `package.json` Is

`package.json` is the file that describes your Node project.

It can include:

- project name
- version
- scripts
- dependencies

## Real-World Analogy

If your project were a workshop, `package.json` would be the document listing the tools and instructions needed to work there.

## Example

```json
{
  "name": "node-learning-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  }
}
```

## Why This Matters

Real backend projects rely on packages and scripts.
Learning npm early helps you work with the wider Node ecosystem.

## Best Practices

- keep script names clear
- understand what a package adds before installing it
- use `npm init -y` to start quickly when learning

## Common Mistakes

- installing packages without understanding them
- forgetting to save project details clearly
- not checking available scripts in `package.json`
