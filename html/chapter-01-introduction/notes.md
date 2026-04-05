# Chapter 1: Introduction To HTML

## What HTML Is

HTML stands for HyperText Markup Language. It is the language we use to describe the structure of a webpage.

When you open a website, the browser needs instructions like:

- what is the main heading
- what is a paragraph
- what is a link
- what is an image
- what content belongs together

HTML gives those instructions.

## Friendly Way To Think About It

Imagine you are setting up a classroom.

- HTML decides where the whiteboard, desks, door, and notice board go
- CSS decides the colors, spacing, and appearance
- JavaScript makes things interactive, like opening menus or submitting forms

So when we learn HTML, we are learning how to organize content clearly.

## How A Browser Sees A Page

```text
Web Page
|- <head>  -> page information for the browser
`- <body>  -> page content for the user
```

The `head` is not usually visible on the page.
The `body` is the part users actually read and interact with.

## Your First HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, Web</h1>
    <p>I am learning how webpages are built.</p>
  </body>
</html>
```

## What Each Part Does

### `<!DOCTYPE html>`

This tells the browser to use modern HTML rules.

### `<html lang="en">`

This is the root of the whole page. The `lang` attribute tells browsers and screen readers what language the page uses.

### `<head>`

The `head` stores information about the page, like title and metadata.

### `<body>`

The `body` contains the visible content such as headings, paragraphs, images, and links.

## Best Practices

- always start with `<!DOCTYPE html>`
- add `lang` to the `html` element
- keep your indentation clean
- give the page a meaningful title
- think about structure before appearance

## Common Beginner Mistake

A lot of beginners think HTML is about "making things pretty." It is not. HTML is mainly about meaning and structure. That mindset will help you a lot later.

## Try It Yourself

1. Create a file called `index.html`
2. Write the base page structure
3. Add one heading and one paragraph
4. Change the title inside `<title>`
5. Open the file in your browser

## Mini Challenge

Build a simple "About Me" page with:

- a proper HTML document structure
- one main heading
- two paragraphs
- a meaningful page title
