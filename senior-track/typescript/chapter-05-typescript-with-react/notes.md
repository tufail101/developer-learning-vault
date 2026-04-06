# Chapter 05: TypeScript With React

TypeScript and React work well together because components already behave like functions with defined inputs and outputs.

## Typing Props

```tsx
type ButtonProps = {
  label: string;
  disabled?: boolean;
};

function Button({ label, disabled = false }: ButtonProps) {
  return <button disabled={disabled}>{label}</button>;
}
```

## Typing `useState`

```tsx
const [count, setCount] = useState<number>(0);
```

## Event Types

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}
```

## Senior Dev Thinking

React types should help component APIs feel obvious. If the type definitions are harder to read than the component itself, simplify them.
