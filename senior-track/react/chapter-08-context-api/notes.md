# Chapter 08: Context API

Context helps you share data across many components without passing props through every layer.

## Core Flow

1. create context
2. wrap part of the tree with a provider
3. read values with `useContext`

## Basic Example

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeLabel() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
```

## When Context Helps

- theme settings
- auth data
- language choice
- shared UI preferences

## When Context Is Not Enough

Context is useful, but not every piece of app state belongs there. Very large app state may need more specialized patterns.

## Senior Dev Thinking

Use Context to remove painful prop drilling, not to turn every value into global state.
