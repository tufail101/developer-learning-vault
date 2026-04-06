# Chapter 03: State And useState

State is data that can change over time and trigger UI updates.

## `useState` Basics

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Controlled Inputs

```jsx
function NameForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
```

## Lifting State Up

If two sibling components need the same data, move that state to their nearest shared parent.

## Senior Dev Thinking

State should live in the smallest place that still makes the data flow clear. Too much global state creates complexity. Too much deeply nested local state creates duplication.

## Best Practices

- keep state minimal
- derive values when possible instead of storing duplicates
- use controlled inputs for forms
- place state where it is easiest to understand
