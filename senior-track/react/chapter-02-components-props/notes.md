# Chapter 02: Components And Props

Components are reusable UI functions. Props are the inputs you pass into them.

## Function Components

```jsx
function Greeting() {
  return <h2>Hello</h2>;
}
```

## Props Basics

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}</h2>;
}
```

Use it like this:

```jsx
<Greeting name="Asha" />
```

## Why Props Matter

Props make components flexible instead of hardcoded.

Examples:

- product cards with different product names
- buttons with different labels
- dashboard widgets with different totals

## Prop Types Pattern

Many teams use runtime prop validation or TypeScript for clearer expectations.

```jsx
function ProductCard({ title, price }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>${price}</p>
    </article>
  );
}
```

## Senior Dev Thinking

Good props form a clean API for a component. A senior developer asks whether the component is easy to use correctly and hard to misuse.

## Best Practices

- keep props names descriptive
- pass only what the component needs
- avoid giant prop lists when an object shape would be clearer
- make reusable components predictable
