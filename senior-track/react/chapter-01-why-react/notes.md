# Chapter 01: Why React

React helps solve the pain of building larger interfaces with plain DOM manipulation.

## Problems React Solves

- UI state gets harder to track as pages grow
- manual DOM updates become repetitive and fragile
- shared UI patterns are easier to reuse as components
- teams need a predictable way to organize frontend code

## Component Thinking

Instead of thinking about a page as one giant file, React encourages you to think in small UI pieces:

- `App`
- `Header`
- `Hero`
- `ProductCard`
- `CartSidebar`

Each component receives data and returns UI.

## JSX Introduction

JSX lets you write HTML-like markup inside JavaScript:

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

JSX is not exactly HTML. It is syntax that becomes JavaScript.

Important differences:

- use `className` instead of `class`
- use `htmlFor` instead of `for`
- return one parent element

## Why Teams Like React

- components are reusable
- state changes can automatically update the UI
- data flow is easier to reason about
- the ecosystem is large and mature

## When This Matters In Practice

Someone building real things does not ask, "How do I rewrite everything in React?"
They ask, "What UI patterns, state boundaries, and user flows actually justify React here?"

## Quick Example

```jsx
function Hero() {
  return (
    <section>
      <h1>Learn Web Development</h1>
      <p>Build real projects one step at a time.</p>
    </section>
  );
}
```

## Best Practices

- keep components focused on one responsibility
- name components clearly
- avoid putting everything in one file
- think about data flow early
