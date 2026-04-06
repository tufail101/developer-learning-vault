# Chapter 03: Interfaces And Type Aliases

Interfaces and type aliases both describe shapes of data.

## Interface Example

```ts
interface User {
  id: number;
  name: string;
  role?: string;
  readonly createdAt: string;
}
```

## Type Alias Example

```ts
type Status = "idle" | "loading" | "success" | "error";
```

## Interface Vs Type Alias

- interfaces are great for object shapes
- type aliases are flexible and also work well for unions

## Optional And Readonly

- `?` means a property may be missing
- `readonly` means the property should not be reassigned

## Senior Dev Thinking

Use the tool that makes intent clearer for your team. Consistency matters more than winning abstract style debates.
