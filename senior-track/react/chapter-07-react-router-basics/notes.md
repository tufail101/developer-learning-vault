# Chapter 07: React Router Basics

React Router helps single-page apps switch views without full page reloads.

## Core Ideas

- routes map URLs to components
- `Link` creates client-side navigation
- `useParams` reads dynamic route values
- `useNavigate` changes routes in code

## Basic Example

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Dynamic Routes

Use route params for things like `/posts/:postId`.

## Senior Dev Thinking

A route is part of the product experience, not just a technical detail. Good route design improves navigation clarity, shareability, and deep linking.
