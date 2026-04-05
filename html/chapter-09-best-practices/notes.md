# Chapter 9: HTML Best Practices

## Why Best Practices Matter

Good HTML is not only about making the browser happy. It is also about helping future-you and other developers understand the page quickly.

## Real-World Analogy

A clean kitchen is easier to work in than a messy one.
Clean HTML gives the same feeling when you open a file.

## Strong HTML Habits

- use semantic tags where possible
- keep indentation consistent
- avoid unnecessary wrappers
- use clear attribute values
- keep content structure logical
- make accessibility part of normal work

## Clean Example

```html
<main>
  <section>
    <h1>Services</h1>
    <p>We design clean websites for small businesses.</p>
  </section>
</main>
```

## Messy Example To Avoid

```html
<div>
  <div>
    <div>Services</div>
    <div>We design clean websites for small businesses.</div>
  </div>
</div>
```

The second version may still show up in the browser, but it communicates less meaning.

## Best Practices Checklist

- choose meaning before convenience
- keep the structure shallow when possible
- use comments only when they add value
- write HTML that is easy to scan

## Mentor Tip

Readable HTML is a gift to your future self. When you revisit a project after a month, clean structure saves a lot of time.
