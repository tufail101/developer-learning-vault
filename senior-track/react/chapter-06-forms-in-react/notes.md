# Chapter 06: Forms In React

Forms in React are usually controlled, meaning React state is the source of truth for the current field values.

## Controlled Form Example

```jsx
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```

## Validation

Validate required fields, shape, and user feedback early. Show errors clearly near the relevant fields.

## Submission

Prevent the browser's default full-page refresh and handle the data in JavaScript.

## When This Matters In Practice

Forms are where user intent meets system rules. Someone working on a real project thinks about validation, accessibility, loading states, and error recovery, not just input fields.
