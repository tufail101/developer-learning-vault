# Chapter 04: useEffect And Lifecycle Thinking

`useEffect` lets you run side effects after React renders.

## Common Use Cases

- fetch data on mount
- subscribe to browser events
- sync with local storage
- clean up timers or listeners

## Basic Example

```jsx
import { useEffect } from "react";

function PageTitle() {
  useEffect(() => {
    document.title = "React Lesson";
  }, []);

  return <h1>React Lesson</h1>;
}
```

## Dependency Array

- no array: runs after every render
- empty array: runs once after mount
- values in array: runs when those values change

## Cleanup

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

## Fetch On Mount

Use `useEffect` to start async data loading when a component appears.

## Senior Dev Thinking

Effects are for syncing with systems outside React. If something can be calculated during render, it usually should not be an effect.
