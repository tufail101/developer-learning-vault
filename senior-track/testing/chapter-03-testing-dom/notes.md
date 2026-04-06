# Chapter 03: Testing The DOM

Frontend tests become much more valuable when they resemble real user behavior.

## Testing Library Ideas

- query the page the way users experience it
- prefer accessible queries like `getByRole`
- simulate user behavior with `userEvent`

## Query Types

- `getBy...` for elements that should already exist
- `queryBy...` for elements that may not exist
- `findBy...` for async elements that appear later

## Example

```js
screen.getByRole("button", { name: /submit/i });
```

## Senior Dev Thinking

If a test only passes because it knows internal markup too closely, it may be brittle. Testing visible behavior usually creates more durable tests.
