# Chapter 02: Jest Basics

Jest is a popular JavaScript testing framework.

## Core Building Blocks

- `describe` groups related tests
- `it` or `test` defines one test case
- `expect` makes an assertion

## Basic Example

```js
describe("sum", () => {
  it("adds two numbers", () => {
    expect(2 + 3).toBe(5);
  });
});
```

## Setup And Teardown

Useful hooks include:

- `beforeEach`
- `afterEach`
- `beforeAll`
- `afterAll`

## Senior Dev Thinking

A good test name explains behavior clearly. Another developer should understand the scenario without reading the implementation first.
