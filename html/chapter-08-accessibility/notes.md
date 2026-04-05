# Chapter 8: Accessibility

## What Accessibility Means

Accessibility means making websites usable by more people, including:

- people using keyboards instead of a mouse
- people using screen readers
- people with low vision
- people using zoom or small screens

Accessibility is not an extra feature. It is part of good web development.

## Real-World Analogy

A building with ramps, signs, wide doors, and elevators serves more people well.
A website should aim for that same kind of inclusion.

## Common Accessibility Wins

### Use Clear Headings

```html
<h1>Course Catalog</h1>
<h2>Frontend Courses</h2>
```

### Use Labels In Forms

```html
<label for="email">Email</label>
<input id="email" type="email" />
```

### Write Good Alt Text

```html
<img src="teacher.jpg" alt="Teacher explaining HTML on a whiteboard" />
```

### Use Helpful Button Labels

```html
<button aria-label="Open navigation menu">Menu</button>
```

## Best Practices

- use headings in order
- make link and button text clear
- ensure forms have labels
- write useful alt text
- test with keyboard navigation

## Mentor Tip

You do not need to master everything on day one. Start by asking:

"Can someone still use this page if they cannot see the image or use a mouse?"

That question leads to many good accessibility choices.
