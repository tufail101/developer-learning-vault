# Chapter 05: Lists, Keys, And Conditional Rendering

Rendering collections is one of the most common React tasks.

## Rendering Lists

```jsx
const lessons = ["HTML", "CSS", "JavaScript"];

function LessonList() {
  return (
    <ul>
      {lessons.map((lesson) => (
        <li key={lesson}>{lesson}</li>
      ))}
    </ul>
  );
}
```

## The `key` Prop

Keys help React identify which list items changed, moved, or were removed.

Use stable unique IDs when possible.

## Conditional Rendering

```jsx
function StatusMessage({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome back" : "Please log in"}</p>;
}
```

## Senior Dev Thinking

Keys are not just warnings to silence. Good keys help preserve correct state and prevent strange UI bugs when lists reorder.
