# Chapter 4: Links And Images

## Why Links Matter

Without links, the web would feel like a stack of disconnected pages.

Links help users move from one page to another, jump to sections, open resources, and navigate a site.

## Why Images Matter

Images can explain an idea faster than text, but they should support the content, not replace it.

## Real-World Analogy

- links are doors between rooms
- images are signs, posters, or photos that help people understand the space

## Link Example

```html
<a href="about.html">About Us</a>
<a href="https://example.com" target="_blank" rel="noreferrer">Visit Example</a>
```

## Image Example

```html
<img src="profile.jpg" alt="Student sitting at a desk and writing HTML code" />
```

## Important Idea: `alt`

The `alt` attribute describes the image when:

- the image does not load
- a screen reader is used
- the image has important meaning

Bad alt text:

```html
<img src="team.jpg" alt="image" />
```

Better alt text:

```html
<img src="team.jpg" alt="Three teammates discussing a website wireframe" />
```

## Best Practices

- write clear link text like "Read pricing" instead of "Click here"
- use relative paths for pages inside your project
- add useful alt text to meaningful images
- do not overload a page with unnecessary images

## Beginner Reminder

If an image is important to understanding the page, describe it well.
If a link is important, name it clearly.
