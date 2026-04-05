# Chapter 6: Forms

## What Forms Do

Forms collect information from users.

You see forms everywhere:

- login pages
- contact pages
- search bars
- sign-up pages
- checkout pages

## Real-World Analogy

A paper application form has labeled boxes for name, age, address, and signature.
An HTML form does the same thing in the browser.

## Core Form Elements

### Label And Input

```html
<label for="name">Name</label>
<input id="name" name="name" type="text" />
```

### Textarea

```html
<label for="message">Message</label>
<textarea id="message" name="message"></textarea>
```

### Select

```html
<label for="course">Choose a course</label>
<select id="course" name="course">
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
</select>
```

## Why Labels Matter

Labels help:

- users understand the field
- screen readers announce the field properly
- users click the label to focus the input

## Form Example

```html
<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Send</button>
</form>
```

## Best Practices

- connect every label to an input
- use useful input types like `email`, `tel`, and `password`
- use `required` where appropriate
- keep forms short and clear
- group related inputs logically

## Mentor Tip

Forms often look simple, but clean form structure is a real professional skill. Good forms save users time and reduce mistakes.
