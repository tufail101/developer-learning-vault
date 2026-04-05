# Chapter 5: Arrays And Objects

## Arrays

Arrays store ordered lists of values.

```js
const skills = ["HTML", "CSS", "JavaScript"];
```

## Objects

Objects store named values using keys.

```js
const student = {
  name: "Riya",
  level: "Beginner",
};
```

## Real-World Analogy

An array is like a train of boxes in order.
An object is like a form with labeled fields.

## Accessing Data

```js
console.log(skills[0]);
console.log(student.name);
```

## Why This Matters

Most frontend apps work with collections and structured data:

- lists of products
- user profiles
- comments
- tasks

Arrays and objects are the foundation for all of that.

## Best Practices

- use arrays for ordered collections
- use objects for labeled data
- keep object keys meaningful

## Common Mistakes

- confusing array index access with object property access
- storing unrelated things in one object
- forgetting that array indexing starts at 0
